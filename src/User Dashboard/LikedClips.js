import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../Components/AuthContext'
import supabase from '../supabaseClient'
import '../Styles/LikedClips.css'
import back from '../Assets/cancel-01.png'
import frame1 from '../Assets/Frame1.png'
import empty from '../Assets/Emptybox.png'
import eye from '../Assets/eye.png'
import UserNavbar from '../Components/UserNavbar'


import dp from '../Assets/dp.png';
const defaultAvatar = dp;


function LikedClips() {
  const [videos, setVideos] = useState([]);
  const { user } = useAuth();
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null)


  useEffect(() => {
    const fetchLikedVideos = async () => {
      if (!user) return;

      

      const { data, error } = await supabase
        .from('liked_videos')
        .select('video_id, videos(title, views, duration, thumbnail)')
        .eq('user_id', user.id)
        .order('liked_at', { ascending: false });

      if (error) {
        console.error('Error fetching liked videos:', error);
      } else {
        const liked = data.map((entry) => ({
          id: entry.video_id,
          ...entry.videos
        }));
        setVideos(liked);
      }
    };

    fetchLikedVideos();
  }, [user]);

  useEffect(() => {
    const getUserData = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();
  
      if (user) {
        const { data: profile } = await supabase
          .from('users') // or 'profiles' if you're storing extended user info there
          .select('username')
          .eq('id', user.id)
          .single();
  
        setUsername(profile?.username || 'User');
      }
    };
  
    getUserData();
  }, []);
  
  useEffect(() => {
    const fetchUserData = async () => {
      const {
        data: { user } } = await supabase.auth.getUser()
  
      if (user) {
        const { data, error } = await supabase
  .from('profiles')
  .select('username, avatar_url, views_watched, location, last_seen_at') // 👈 include avatar_url
  .eq('id', user.id)
  .single();

if (!error) setUserData(data);

      }
    }

    
  
    fetchUserData()
  }, [])

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setUsername(user.user_metadata.username || user.email); // fallback if username isn't set
      }
    };
    fetchUser();
  }, []);
  

  const isOnline = (lastSeen) => {
    const now = new Date()
    const last = new Date(lastSeen)
    const diff = (now - last) / 1000 // in seconds
    return diff < 120 // last seen within 2 minutes
  }
  
  
  


  return (
    <>

<div className='desktop-profile'>
      <div className='usernav'>
      <UserNavbar />
      </div>
        <div className='desktop-profile-content'>
        <h2 className='desktop-profile-info'>{username}</h2>
            <img className='desktop-dp' src={userData?.avatar_url || defaultAvatar} alt='User' />
        <div className='desktop-user-details'>
        <li>{userData ? userData.views_watched : '...'} times</li>
<li>{userData ? userData.location : '...'}</li>
<li>{userData ? (isOnline(userData.last_seen_at) ? 'Online' : 'Offline') : '...'}</li>
        </div>
        </div>
        <div className='desktop-topics'>
            <Link className='tag1' to='/LikedClips'>Liked Videos</Link>
            <Link className='tag' to='/Notification'>Notifications</Link>
            <Link className='tag' to='/Setting'>Account Settings</Link>
        </div>
        </div>

    <div className='clip'>
     

      
      <div className='mobile-liked-clips'>
      <div className='clip-01'>
      <div className='clip1'>
      <Link to='/Home'><img className='cancel' src={back} alt='jpg' /></Link>
      <h2>Profile Information</h2>
      </div>

      <div className='clip2'>
      <div className='clip3'>
      <h2 className='user'>{username}</h2>

      <img className='dp' src={userData?.avatar_url || defaultAvatar} alt='User' />

      </div>

      <div className='clip4'>
        <ul className='details'>
        <li>{userData ? userData.views_watched : '...'} times</li>
<li>{userData ? userData.location : '...'}</li>
<li>{userData ? (isOnline(userData.last_seen_at) ? 'Online' : 'Offline') : '...'}</li>
        </ul>
      </div>
      </div>
      </div>
      

      <div className='clip6'>
        <ul className='topic'>
          <Link className='tag1' to='/LikedClips'>Liked Videos</Link>
          <Link className='tag' to='/Notification'>Notifications</Link>
          <Link className='tag' to='/Setting'>Account Settings</Link>
        </ul>
      </div>

      

      <div className='clip7'>
      <div className='clip-container'>
  {videos.length === 0 ? (
    <div>
      <img src={empty} alt='No liked videos' />
      <p className='no-liked'>No liked videos</p>
    </div>
    
  ) : (
    videos.map((video, index) => (
      <div className='clip-image' key={index}>
        <Link to={`/ViewVideos/${video.id}`}>
          <img src={video.thumbnail || frame1} alt={video.title} />
          <span>{video.title}</span>
          <p>{video.duration} &nbsp; - &nbsp;
            <img className='eye' src={eye} alt='views' />{video.views}
          </p>
        </Link>
      </div>
    ))
  )}
</div>

      </div>
      </div>

      
      
      
    </div>
    </>
  )
}

export default LikedClips