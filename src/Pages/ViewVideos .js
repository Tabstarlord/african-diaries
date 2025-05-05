import React, { useEffect, useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Styles/ViewVideos.css';
import { formatDistanceToNow } from 'date-fns';
import { useUser } from '../Components/UserContext';
import supabase from '../supabaseClient';
import like from '../Assets/Like2.png';
import dislike from '../Assets/dislike.png';
import chat from '../Assets/bubble-chat.png';
import share from '../Assets/share.png';
import eye from '../Assets/eye.png';
import number from '../Assets/Frame12.png';
import avatar from '../Assets/Ellipse.png';
import Foot from '../Components/Foot';
import Navbar from '../Components/Navbar';
import UserNavbar from '../Components/UserNavbar';


function ViewVideos() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [videos, setVideos] = useState([]);
  const [comments, setComments] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [userId, setUserId] = useState(null);
  const [reactionCounts, setReactionCounts] = useState({
    likes: 0,
    dislikes: 0,
    comments: 0,
    shares: 0,
  });

  const { id } = useParams();
  const { user } = useUser();
  const videoRef = useRef(null);


useEffect(() => {
  const fetchVideo = async () => {
    const { data, error } = await supabase
    .from('videos')
    .select('*')
    .eq('id', id)
    .single(); //get a single video row

    if (error) {
      console.error('Error fetching video data:', error.message);
    } else {
      setCurrentVideo(data);
    }
  };

  fetchVideo();
}, [id]);

 

  useEffect(() => {
    const authStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(authStatus === 'true');
  }, []);

 

  const togglePlayPause = () => {
    if (videoRef.current) {
      videoRef.current.paused ? videoRef.current.play() : videoRef.current.pause();
    }
  };

  // Call this function to increment the view count for the category
  const incrementCategoryView = async (category) => {
    try {
      const { error } = await supabase
        .from('category_views')
        .upsert(
          { category_name: category, view_count: supabase.raw('view_count + 1') },
          { onConflict: ['category_name'] }
        );
      if (error) console.error('Category view increment error:', error);
    } catch (err) {
      console.error('Category view error:', err);
    }
  };

  useEffect(() => {
    const logWatchHistory = async () => {
      if (!user || !currentVideo) return;
      const { error } = await supabase.from('watched_videos').insert({
        user_id: user.id,
        video_id: currentVideo.id,
      });
      if (error) console.error('Watch history error:', error);
    };
  
    if (currentVideo) {
      logWatchHistory();
      incrementCategoryView(currentVideo.category);
    }
  }, [currentVideo, user]);


  //*Related Videos*//
  useEffect(() => {
    const fetchRelatedVideos = async () => {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .neq('id', id)
        .limit(10);
        if (!error) setVideos(data);
    };
    fetchRelatedVideos();
  }, [id]);



      //*Comments*//
      useEffect(() => {
        const fetchComments = async () => {
          const { data, error } = await supabase
            .from('comments')
            .select('*')
            .eq('video_id', id)
            .order('created_at', { ascending: false });
          if (!error) setComments(data);
        };
        fetchComments();
      }, [id]);

      const handleCommentSubmit = async (e) => {
        e.preventDefault();
        const content = e.target.elements.comment.value;
        if (!user || !content.trim()) return;
    
        const { data, error } = await supabase.from('comments').insert([{
          video_id: id,
          user_id: user.id,
          username: user.user_metadata.username || 'Anonymous',
          avatar_url: user.user_metadata.avatar_url || '',
          content,
        }]);
    
        if (!error) {
          setComments(prev => [data[0], ...prev]);
          e.target.reset();
        }
      };


  //*Reactions*//
  const fetchReactions = async () => {
    const { data, error } = await supabase
      .from('reactions')
      .select('type, count:count(*)')
      .eq('video_id', id)
      .group('type');
    if (error) return console.error('Reaction fetch error:', error);

    const counts = { likes: 0, dislikes: 0, comments: 0, shares: 0 };
    data.forEach((r) => {
      counts[r.type + 's'] = r.count;
    });
    setReactionCounts(counts);
  };

  const handleReaction = async (type) => {
    if (!userId || !id) return;
    const { error } = await supabase.from('reactions').insert([{ video_id: id, user_id: userId, type }]);
    if (!error) fetchReactions();
  };

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) setUserId(user.id);
    };
    fetchUser();
  }, []);
  
  useEffect(() => {
    if (!id || (!userId && isLoggedIn)) return;
    const trackView = async () => {
      const { error: insertError } = await supabase.from('video_views').insert([{
        video_id: id,
        user_id: userId || null,
        viewed_at: new Date(),
      }]);

      if (insertError) {
        console.error('Error inserting view record:', insertError);
      }

      // Step 2: Increment view_count in videos table
      const { error: updateError } = await supabase.rpc('increment_view_count', { vid: id });
      if (insertError || updateError) {
        console.error('View tracking error:', insertError || updateError);
      }
    };
    trackView();
  }, [id, userId, isLoggedIn]);


  
  return (
    <>
      {isLoggedIn ? <UserNavbar /> : <Navbar />}
      <div className='view'>
        <div className='view-1'>
          {currentVideo ? (
            <>
            <div>
              <span>{currentVideo.title} <h5>- {currentVideo.duration}</h5> </span>

              <div className='links'>
                {Array.isArray(currentVideo.tags) && currentVideo.tags.map((tag, i) => (
                  <Link key={i} to={`/tags/${tag}`}>{tag}</Link>
                ))}
              </div>
                <video
                ref={videoRef}
                controls
                width='95%'
                height='auto'
                autoPlay
                onClick={togglePlayPause}>
                  <source src={currentVideo.video_url} type='video/mp4' />
                </video>
            </div>

            <div className='react'>
                <Link to='#' onClick={() => handleReaction('like')}>
                  <img className='react-1' src={like} alt='like' />
                  <p>{reactionCounts.likes}</p>
                </Link>
                <Link to='#' onClick={() => handleReaction('dislike')}>
                  <img className='react-1' src={dislike} alt='dislike' />
                  <p>{reactionCounts.dislikes}</p>
                </Link>
                <Link to='#' onClick={() => handleReaction('comment')}>
                  <img className='react-1' src={chat} alt='comment' />
                  <p>{reactionCounts.comments}</p>
                </Link>
                <Link to='#' onClick={() => handleReaction('share')}>
                  <img className='react-1' src={share} alt='share' />
                </Link>
              </div>

              <div className='view-2'>
                <img src={eye} alt='views' />
                <p>{currentVideo.views || '12k'}</p>
              </div>
            </>
          ) : (
            <p>Loading video...</p>
          )}
        </div>

        <div className='comments'>
          <div className='comment'>
            <img src={chat} alt='comments' />
            <p>Comments</p>
            <img src={number} alt='numbers' />
          </div>

          <div className='comment-1'>
            {comments.map((comment) => (
              <div key={comment.id}>
                <div className='com'>
                  <img src={comment.avatar_url || avatar} alt='avatar' />
                  <span>{comment.username}</span>
                  <p>{formatDistanceToNow(new Date(comment.created_at), { addSuffix: true })}</p>
                </div>
                <div className='com-1'>
                  <p>{comment.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <div className='write'>
          <form onSubmit={handleCommentSubmit}>
         
            <input type='text' name='comment' placeholder='Add a comment' required />
            <button className='send'>Send</button>
          </form>
        </div>

        <div className='related'>
          <h3 className='relate'>Related Videos</h3>
          <div className='view-page-wrapper'>
            <div className='view-container'>
          {videos.map((videos, index) => (
            <div className='image' key={index}>
              <Link to={`/ViewVideos/${videos.id}`} key={videos.id}>
                <video
                  src={videos.video_url}
                  muted
                  playsInline
                  preload="metadata"
                  className="video-thumb"
                  onMouseOver={async e => {
                    try {
                      await e.target.play();
                    } catch (err) {
                      console.error('Play interrupted:', err);
                    }
                  }}
                  onMouseOut={e => {
                    e.target.pause();
                  }}
                ></video>
                <span>{videos.title}</span>
                <p>
                  {videos.duration} &nbsp; - &nbsp;
                  <img className='eye' src={eye} alt='view count' />
                  {videos.views}
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
