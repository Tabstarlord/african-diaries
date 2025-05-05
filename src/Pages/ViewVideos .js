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
  const [videoData, setVideoData] = useState(null);
  const [videoUrl, setVideoUrl] = useState('');
  const [comments, setComments] = useState([]);
  const [currentVideo] = useState(null);
  const [userId, setUserId] = useState(null);
  const [reactionCounts, setReactionCounts] = useState({
    likes: 0,
    dislikes: 0,
    comments: 0,
    shares: 0,
  });

  const { id } = useParams();
  const { user } = useUser();


useEffect(() => {
  const fetchVideo = async () => {
    const { data, error } = await supabase
    .from('videos')
    .select('*')
    .eq('id', id)
    .single(); //get a single video row

    if (error) {
      console.error('Error fetching video data:', error);
      return;
    }

    setVideoData(data);

    const { data: urlData, error: urlError } = supabase
    .storage
    .from('video') //your bucket name
    .getPublicUrl(data.video_url);

    if (urlError) {
      console.error('Error generating public URL:', urlError);
    } else {
      setVideoUrl(urlData.publicUrl);
    }
  };

  if (id) fetchVideo();
}, [id]);

 

  useEffect(() => {
    const authStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(authStatus === 'true');
  }, []);

  const videoRef = useRef(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    } else {
      console.warn('Video element not found.');
    }
  };

  // Call this function to increment the view count for the category
  const incrementCategoryView = async (category) => {
    try {
      // Increment the category view count in the 'category_views' table
      const { error } = await supabase
        .from('category_views')
        .upsert(
          { category_name: category, view_count: supabase.raw('view_count + 1') },
          { onConflict: ['category_name'] }
        );

      if (error) {
        console.error('Error incrementing category view count:', error);
      }
    } catch (error) {
      console.error('Error incrementing category view:', error);
    }
  };

  useEffect(() => {
    const logWatchHistory = async () => {
      if (!user || !currentVideo) return;
      const { error } = await supabase.from('watched_videos').insert({
        user_id: user.id,
        video_id: currentVideo.id,
      });
      if (error) console.error('Error logging watch history:', error);
    };
  
    if (currentVideo) {
      logWatchHistory();
      // Increment category view count when a video is viewed
      incrementCategoryView(currentVideo.category); // Pass the category of the video here
    }
  }, [currentVideo, user]);


  //*Related Videos*//
  useEffect(() => {
    const fetchRelatedVideos = async () => {
      if (!currentVideo) return;
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .neq('id', id)
        .limit(5);

      if (error) console.error('Error fetching related videos:', error);
      else setVideos(data);
    };

    fetchRelatedVideos();
  }, );



      //*Comments*//
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .eq('video_id', id)
        .order('created_at', { ascending: false });

      if (error) console.error('Error fetching comments:', error);
      else setComments(data);
    };

    fetchComments();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.elements.comment.value;
    if (!user) return;
    if (!content.trim()) return;

    const { data, error } = await supabase.from('comments').insert([{
      video_id: id,
      user_id: user.id,
      username: user.user_metadata.username || 'Anonymous',
      avatar_url: user.user_metadata.avatar_url || '',
      content,
    }]);

    if (error) {
      console.error('Insert error:', error);
    } else {
      setComments((prev) => [data[0], ...prev]);
      e.target.reset();
    }
  };


  //*Reactions*//
  const fetchReactions = async () => {
    if (!id) return;
    const { data, error } = await supabase
      .from('reactions')
      .select('type, count:count(*)')
      .eq('video_id', id)
      .group('type');

    if (error) return console.error('Reaction fetch error:', error);

    const counts = {
      likes: 0,
      dislikes: 0,
      comments: 0,
      shares: 0,
    };

    data.forEach((reaction) => {
      counts[reaction.type + 's'] = reaction.count;
    });

    setReactionCounts(counts);
  };

  const handleReaction = async (type) => {
    if (!userId || !id) return;

    const { error } = await supabase.from('reactions').insert([{
      video_id: id,
      user_id: userId,
      type,
    }]);

    if (!error) fetchReactions();
    else console.error('Reaction error:', error);
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
      // Step 1: Insert into video_views (for today's view count)
      const { error: insertError } = await supabase.from('video_views').insert([
        {
          video_id: id,
          user_id: userId || null, // optional, can be anonymous
          viewed_at: new Date(), // optional; Supabase default works
        },
      ]);

      if (insertError) {
        console.error('Error inserting view record:', insertError);
      }

      // Step 2: Increment view_count in videos table
      const { error: updateError } = await supabase.rpc('increment_view_count', {
        vid: id,
      });

      if (updateError) {
        console.error('Error incrementing view count:', updateError);
      }
    };

    trackView();
  }, [id, userId, isLoggedIn]);

  console.log("Video URL:", currentVideo?.video_file_name);

  
  return (
    <>
      {isLoggedIn ? <UserNavbar /> : <Navbar />}
      <div className='view'>
        <div className='view-1'>
          <div>
            {videoData && videoUrl ? (
              <div>
<span>{videoData.title} <h5>- {videoData.duration}</h5></span>

<div className='links'>
{currentVideo?.tags?.map((tag, i) => (
<Link key={i} to={`/tags/${tag}`}>{tag}</Link>
))}
</div>

    <video
    controls
    width='95%'
    height='auto'
    autoPlay
    onClick={togglePlayPause} >
      <source src={videoUrl} type='video/mp4' />
    </video>
              </div>
            ) : (
              <p>Loading video...</p>
            )}
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
            <p>{currentVideo?.views || '12k'}</p>
          </div>
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
                <div className='com-2'>
                  <p className='r'>Reply</p>
                  <img src={like} alt='like' /><p>0</p>
                  <img src={dislike} alt='dislike' />
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
          <span className='relate'>Related Videos</span>
          <div className='view-page-wrapper'>
            <div className='view-container'>
              {videos.map((video) => (
                <div className='view-image' key={video.id}>
                  <Link to={`/ViewVideos/${video.id}`}>
                    <video width='100%' height='100%' className='video-thumb'>
                      <source src={video.video_url} type='video/mp4' />
                    </video>
                    <h2>{video.title}</h2>
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
