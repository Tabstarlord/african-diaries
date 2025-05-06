import React, { useEffect, useState } from 'react'
import supabase from '../supabaseClient'
import { useAuth } from '../Components/AuthContext'
import { Link } from 'react-router-dom'
import dp from '../Assets/dp.png'
import back from '../Assets/cancel-01.png'
import red from '../Assets/dot.png'
import avatar from '../Assets/Ellipse95.png'
import frame16 from '../Assets/Frame19.png'
import empty from '../Assets/Emptybox.png'
import '../Styles/Notification.css'
import UserNavbar from '../Components/UserNavbar'


function Notification() {
  const [notifications, setNotifications] = useState([]);
  const { user } = useAuth();
   const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null)

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
          .select('*')
          .eq('id', user.id)
          .single()
  
        if (!error) setUserData(data)
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
     <div className='desktop-notification-profile'>
            <div className='desktop-notification-profile-content'>
                <h2 className='desktop-notification-profile-info'>{username}</h2>
                <img className='desktop-notification-dp' src={dp} alt='User' />
            <div className='desktop-notification-user-details'>
            <li>{userData ? userData.views_watched : '...'} times</li>
<li>{userData ? userData.location : '...'}</li>
<li>{userData ? (isOnline(userData.last_seen_at) ? 'Online' : 'Offline') : '...'}</li>
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
      <Link to='/Home'><img className='cancel' src={back} alt='jpg' /></Link>
        <h2>Profile Information</h2>
    </div>
           
    <div className='not2'>
    <div className='not3'>
        <h2 className='user'>{username}</h2>
        <img className='dp' src={dp} alt='User' />
    </div>
           
    <div className='not4'>
        <ul className='deta'>
        <li>{userData ? userData.views_watched : '...'} times</li>
<li>{userData ? userData.location : '...'}</li>
<li>{userData ? (isOnline(userData.last_seen_at) ? 'Online' : 'Offline') : '...'}</li>
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
        notifications.map((note) => (
          <div key={note.id} className="noification-image">
            <img className="red" src={note.is_read ? '' : red} alt="dot" />
            <img className="avatar" src={note.actor.avatar_url || avatar} alt="avatar" />
            <span className="notify">
              {note.message}
              <p className="time">{new Date(note.created_at).toLocaleString()}</p>
            </span>
            <img className="display" src={frame16} alt="thumbnail" />
          </div>
        ))
      )}
    </div>
      </div>
      </div>
    </>
  )
}

export default Notification