import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Components/AuthContext';
import supabase from '../supabaseClient';

import '../Styles/LikedClips.css';

import back from '../Assets/cancel-01.png';
import frame1 from '../Assets/Frame1.png';
import empty from '../Assets/Emptybox.png';
import eye from '../Assets/eye.png';
import UserNavbar from '../Components/UserNavbar';
import defaultAvatar from '../Assets/User-favicon.png';

function LikedClips() {
  const { user } = useAuth();
  const [videos, setVideos] = useState([]);
  const [userData, setUserData] = useState(null);
  const [profileImage, setProfileImage] = useState(defaultAvatar);
  const [joinedDays, setJoinedDays] = useState('');
  const [username, setUsername] = useState('');

  // Fetch liked videos
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

  // Fetch user profile info
  useEffect(() => {
    const fetchUserData = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('username, avatar_url, views_watched, location, last_seen_at')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Error fetching user profile:', error.message);
        return;
      }

      setUserData(data);
      setUsername(data.username);

      if (data.avatar_url) {
        const { data: avatarData } = supabase
          .storage
          .from('avatars')
          .getPublicUrl(data.avatar_url);

        setProfileImage(avatarData?.publicUrl || defaultAvatar);
      }

      if (user.created_at) {
        const createdDate = new Date(user.created_at);
        const now = new Date();
        const diffDays = Math.floor((now - createdDate) / (1000 * 60 * 60 * 24));
        setJoinedDays(diffDays);
      }
    };

    fetchUserData();
  }, [user]);

  const isOnline = (lastSeen) => {
    const now = new Date();
    const last = new Date(lastSeen);
    const diff = (now - last) / 1000; // in seconds
    return diff < 120;
  };

  return (
    <>
      <div className='desktop-profile'>
        <div className='desktop-profile-content'>
          <h2 className='desktop-profile-info'>{username}</h2>
          <img className='desktop-dp' src={profileImage} alt='User' />
          <div className='desktop-user-details'>
            <li>Joined: <strong>{joinedDays} days on African Diaries</strong></li>
            <li>Profile views: <strong>{userData?.views_watched || 0} times</strong></li>
            <li>From: <strong>{userData?.location || 'Unknown'}</strong></li>
            <li>Last Activity: <strong>{isOnline(userData?.last_seen_at) ? 'Online' : 'Offline'}</strong></li>
          </div>
        </div>
        <div className='desktop-topics'>
          <Link className='tag1' to='/LikedClips'>Liked Videos</Link>
          <Link className='tag' to='/Notification'>Notifications</Link>
          <Link className='tag' to='/Setting'>Account Settings</Link>
        </div>
      </div>

      <div className='clip'>
        <div className='usernav'>
          <UserNavbar />
        </div>

        <div className='mobile-liked-clips'>
          <div className='clip-01'>
            <div className='clip1'>
              <Link to='/Home'><img className='cancel' src={back} alt='jpg' /></Link>
              <h2>Profile Information</h2>
            </div>

            <div className='clip2'>
              <div className='clip3'>
                <h2 className='user'>{username}</h2>
                <img className='dp' src={profileImage} alt='User' />
              </div>

              <div className='clip4'>
                <ul className='details'>
                  <li>Joined: <strong>{joinedDays} days on African Diaries</strong></li>
                  <li>Profile views: <strong>{userData?.views_watched || 0} times</strong></li>
                  <li>From: <strong>{userData?.location || 'Unknown'}</strong></li>
                  <li>Last Activity: <strong>{isOnline(userData?.last_seen_at) ? 'Online' : 'Offline'}</strong></li>
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
  );
}

export default LikedClips;
