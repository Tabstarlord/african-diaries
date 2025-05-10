import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/ViewVideos.css';
import { formatDistanceToNow } from 'date-fns';
import { useAuth } from '../Components/AuthContext';
import supabase from '../supabaseClient';
import likeIcon from '../Assets/Like2.png';
import dislikeIcon from '../Assets/dislike.png';
import chatIcon from '../Assets/bubble-chat.png';
import shareIcon from '../Assets/share.png';
import eyeIcon from '../Assets/eye.png';
import numberIcon from '../Assets/Frame12.png';
import defaultAvatar from '../Assets/Ellipse.png';
import Foot from '../Components/Foot';
import Navbar from '../Components/Navbar';
import UserNavbar from '../Components/UserNavbar';

function ViewVideos() {
  const { id } = useParams();
  const { user } = useAuth();
  const videoRef = useRef(null);
  const commentsRef = useRef(null);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [showComments] = useState(true);
  const [reactionCounts, setReactionCounts] = useState({ likes: 0, dislikes: 0, comments: 0, shares: 0 });
  const [userReactions, setUserReactions] = useState(new Set());

  // Fetch video data
  useEffect(() => {
    const fetchVideo = async () => {
      const { data, error } = await supabase.from('videos').select('*').eq('id', id).single();
      if (!error) setCurrentVideo(data);
    };
    fetchVideo();
  }, [id]);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  useEffect(() => {
    if (!id || (!user?.id && isLoggedIn)) return;
    const trackView = async () => {
      await supabase.from('video_views').insert([{ video_id: id, user_id: user?.id || null, viewed_at: new Date() }]);
      await supabase.rpc('increment_view_count', { vid: id });
    };
    trackView();
  }, [id, user?.id, isLoggedIn]);

  useEffect(() => {
    if (currentVideo) {
      supabase.rpc('increment_category_view', { cat_name: currentVideo.category });
      if (user) {
        supabase.from('watched_videos').insert({ user_id: user.id, video_id: currentVideo.id });
      }
    }
  }, [currentVideo, user]);

  // Fetch related videos
  useEffect(() => {
    const fetchRelatedVideos = async () => {
      const { data } = await supabase.from('videos').select('*').neq('id', id).limit(10);
      setRelatedVideos(data);
    };
    fetchRelatedVideos();
  }, [id]);

  useEffect(() => {
    setReactionCounts(prev => ({
      ...prev,
      comments: comments.length,
    }));
  }, [comments]);
  

  // Fetch comments
  const fetchComments = useCallback(async () => {
    const { data, error } = await supabase
      .from('comments')
      .select('*')
      .eq('video_id', id)
      .order('created_at', { ascending: false });
  
    if (error) {
      console.error('Error fetching comments:', error);
    } else {
      setComments(data);
    }
  }, [id]);
  

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  // Handle comment submit
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.elements.comment.value;
    if (!user || !content.trim()) return;
    if (!user || !content) {
      console.warn('No user or comment content');
      return;
    }
  
    const username = user.user_metadata?.username || 'Anonymous';
    const avatar_url = user.user_metadata?.avatar_url || '';
  
    const { data, error } = await supabase.from('comments').insert([
      {
        video_id: id,
        user_id: user.id,
        username,
        avatar_url,
        content
      }
    ]);
  
    if (error) {
      console.error('Error inserting comment:', error.message);
      return;
    }
  
    // Clear the input
    e.target.reset();
  
    // Re-fetch comments from Supabase
    const { data: updatedComments, error: fetchError } = await supabase
      .from('comments')
      .select('*')
      .eq('video_id', id)
      .order('created_at', { ascending: false });
  
    if (fetchError) {
      console.error('Error fetching updated comments:', fetchError.message);
      return;
    }

    if (!error && data) {
      setComments((prev) => [data[0], ...prev]);
  
      // 🔥 Increment the local comment count here
      setReactionCounts(prev => ({
        ...prev,
        comments: prev.comments + 1
      }));
  
      e.target.reset();
    } else {
      console.error("Error submitting comment:", error)
    }
  
    setComments(updatedComments);
  };
  

  // Fetch reactions
  const fetchReactions = useCallback(async () => {
    const { data } = await supabase.from('reactions').select('type, user_id, video_id');
    const counts = { likes: 0, dislikes: 0, comments: 0, shares: 0 };
    const reactionsSet = new Set();

    data.forEach((r) => {
      if (r.video_id === id) {
        counts[r.type + 's'] += 1;
        if (r.user_id === user?.id) reactionsSet.add(r.type);
      }
    });

    setReactionCounts(counts);
    setUserReactions(reactionsSet);
  }, [id, user?.id]);

  useEffect(() => {
    fetchReactions();
  }, [fetchReactions]);

  // Toggle reaction
  const toggleReaction = async (type) => {
    if (!user?.id || !id) return;

    const { data: existing } = await supabase
      .from('reactions')
      .select('id')
      .eq('video_id', id)
      .eq('user_id', user.id)
      .eq('type', type)
      .single();

    if (existing) {
      await supabase.from('reactions').delete().eq('id', existing.id);
    } else {
      await supabase.from('reactions').insert([{ video_id: id, user_id: user.id, type }]);
    }

    fetchReactions();
  };

  const togglePlayPause = () => {
    if (videoRef.current) {
      videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    }
  };

 

  console.log("User:", user);
 console.log("Comments:", comments);

  return (
    <>
      {user ? <UserNavbar /> : <Navbar />}
      <div className='view'>
        <Link to='/Home' className='back-to-home'>Back To Home</Link>

        <div className='view-1'>
          {currentVideo ? (
            <>
              <div>
                <span>{currentVideo.title} <h5>- {currentVideo.duration}</h5></span>
                <div className='links'>
                  {Array.isArray(currentVideo.tags) && currentVideo.tags.map((tag, i) => (
                    <Link key={i} to={`/tags/${tag}`}>{tag}</Link>
                  ))}
                </div>
                <video className='video-player' ref={videoRef} controls width='95%' autoPlay onClick={togglePlayPause}>
                  <source src={currentVideo.video_url} type='video/mp4' />
                </video>
              </div>

              <div className="react">
                <div className="react-btn" onClick={() => toggleReaction('like')} style={{ color: userReactions.has('like') ? 'blue' : 'black' }}>
                  <img className="react-1" src={likeIcon} alt="like" />
                  <p>{reactionCounts.likes}</p>
                </div>
                <div className="react-btn" onClick={() => toggleReaction('dislike')} style={{ color: userReactions.has('dislike') ? 'blue' : 'black' }}>
                  <img className="react-1" src={dislikeIcon} alt="dislike" />
                  <p>{reactionCounts.dislikes}</p>
                </div>
                <div className="react-btn" onClick={() => document.querySelector('.comments')?.scrollIntoView({ behavior: 'smooth' })}>
                  <img className="react-1" src={chatIcon} alt="comment" />
                  <p>{reactionCounts.comments}</p>
                </div>
                <div className="react-btn" onClick={() => toggleReaction('share')} style={{ color: userReactions.has('share') ? 'blue' : 'black' }}>
                  <img className="react-1" src={shareIcon} alt="share" />
                  <p>{reactionCounts.shares}</p>
                </div>
              </div>
            </>
          ) : <p>Loading video...</p>}
        </div>

        {showComments && (
          <div className='comments' id='comments-section' ref={commentsRef}>
            <div className='comment'>
              <img src={chatIcon} alt='comments' />
              <p>Comments</p>
              <img src={numberIcon} alt='numbers' />
            </div>

            <div className='comment-1'>
              {comments.length === 0 ? (
                <p>No comments yet. Be the first to comment!</p>
              ) : (
                comments.map(comment => (
                  <div key={comment.id}>
                    <div className='com'>
                      <img src={comment.avatar_url || defaultAvatar} alt='avatar' />
                      <span>{comment.username}</span>
                      <p>{formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}</p>
                    </div>
                    <div className='com-1'>
                      <p>{comment.content}</p>
                    </div>
                  </div>
                ))
              )}
              
              {console.log("Rendering comments:", comments)}

            </div>

            <div className='write'>
              <form onSubmit={handleCommentSubmit}>
                <input type='text' name='comment' placeholder='Add a comment' required />
                <button className='send'>Send</button>
              </form>
            </div>
          </div>
        )}

        <div className='related'>
          <h3 className='relate'>Related Videos</h3>
          <div className='view-page-wrapper'>
            <div className='view-container'>
              {relatedVideos.map((vid, index) => (
                <div className='image' key={index}>
                  <Link to={`/ViewVideos/${vid.id}`}>
                    <video src={vid.video_url} muted preload="metadata" className="video-thumb"
                      onMouseOver={e => e.target.play().catch(() => {})}
                      onMouseOut={e => e.target.pause()} />
                    <span>{vid.title}</span>
                    <p>
                      {vid.duration} &nbsp;-&nbsp;
                      <img className='eye' src={eyeIcon} alt='view count' /> {vid.views}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Foot />
    </>
  );
}

export default ViewVideos;