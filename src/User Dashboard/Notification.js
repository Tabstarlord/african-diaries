import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../supabaseClient';
import { useAuth } from '../Components/AuthContext';
import defaultAvatar from '../Assets/User-favicon.png';
import back from '../Assets/cancel-01.png';
import red from '../Assets/dot.png';
import avatarFallback from '../Assets/Ellipse95.png';
import frame16 from '../Assets/Frame19.png';
import empty from '../Assets/Emptybox.png';
import '../Styles/Notification.css';
import UserNavbar from '../Components/UserNavbar';

function Notification() {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState([]);

  // Profile state
  const [profileImage, setProfileImage] = useState(defaultAvatar);
  const [name, setName] = useState('');
  const [joinedDays, setJoinedDays] = useState('');
  const [profileViews, setProfileViews] = useState(0);
  const [location, setLocation] = useState('Unknown');
  const [lastSeen, setLastSeen] = useState('Offline');

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Failed to load profile:', error.message);
        return;
      }

      setName(data.username || '');
      setProfileViews(data.profile_views || 0);
      setLocation(data.location || 'Unknown');
      setLastSeen(data.last_seen === 'online' ? 'Online' : 'Offline');

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
        const diffTime = Math.abs(now - createdDate);
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        setJoinedDays(diffDays);
      }
    };

    fetchProfile();
  }, [user]);

  useEffect(() => {
    const fetchNotifications = async () => {
      const { data, error } = await supabase
        .from('notifications')
        .select(`
          id, message, created_at, is_read,
          actor:actor_id ( username, avatar_url )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching notifications:', error);
      } else {
        setNotifications(data);
      }
    };

    if (user) fetchNotifications();
  }, [user]);

  return (
    <>
      <div className='desktop-notification-profile'>
        <div className='desktop-notification-profile-content'>
          <h2 className='desktop-notification-profile-info'>{name}</h2>
          <img className='desktop-notification-dp' src={profileImage} alt='User' />
          <div className='desktop-notification-user-details'>
            <li>Joined: <strong>{joinedDays} days on African Diaries</strong></li>
            <li>Profile views: <strong>{profileViews} times</strong></li>
            <li>From: <strong>{location}</strong></li>
            <li>Last Activity: <strong>{lastSeen}</strong></li>
          </div>
        </div>
        <div className='desktop-notification-topics'>
          <Link className='tag' to='/LikedClips'>Liked Videos</Link>
          <Link className='tag1' to='/Notification'>Notifications</Link>
          <Link className='tag' to='/Setting'>Account Settings</Link>
        </div>
      </div>

      <div className='not'>
        <div className='usernav'>
          <UserNavbar />
        </div>

        <div className='notification'>
          <div className='mobile-profile'>
            <div className='not1'>
              <Link to='/Home'><img className='cancel' src={back} alt='back' /></Link>
              <h2>Profile Information</h2>
            </div>

            <div className='not2'>
              <div className='not3'>
                <h2 className='user'>{name}</h2>
                <img className='dp' src={profileImage} alt='User' />
              </div>

              <div className='not4'>
                <ul className='deta'>
                  <li>Joined: <strong>{joinedDays} days on African Diaries</strong></li>
                  <li>Profile views: <strong>{profileViews} times</strong></li>
                  <li>From: <strong>{location}</strong></li>
                  <li>Last Activity: <strong>{lastSeen}</strong></li>
                </ul>
              </div>
            </div>

            <div className='not6'>
              <ul className='topics1'>
                <Link className='tag' to='/LikedClips'>Liked Videos</Link>
                <Link className='tag1' to='/Notification'>Notifications</Link>
                <Link className='tag' to='/Setting'>Account Settings</Link>
              </ul>
            </div>
          </div>

          <div className="notification-content">
            {notifications.length === 0 ? (
              <div>
                <img src={empty} alt='No Notifications' />
                <p>No notifications yet</p>
              </div>
            ) : (
              notifications.map((note) => {
                const actorAvatar = note.actor?.avatar_url
                  ? supabase.storage.from('avatars').getPublicUrl(note.actor.avatar_url).data?.publicUrl
                  : avatarFallback;

                return (
                  <div key={note.id} className="noification-image">
                    <img className="red" src={note.is_read ? '' : red} alt="dot" />
                    <img className="avatar" src={actorAvatar} alt="avatar" />
                    <span className="notify">
                      {note.message}
                      <p className="time">{new Date(note.created_at).toLocaleString()}</p>
                    </span>
                    <img className="display" src={frame16} alt="thumbnail" />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
