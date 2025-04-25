import React, {useEffect, useState} from 'react'
import supabase from '../supabaseClient'
import { Link } from 'react-router-dom'
import dp from '../Assets/dp.png'
import back from '../Assets/cancel-01.png'
import frame20 from '../Assets/Emptybox.png'
import UserNavbar from '../Components/UserNavbar'
import '../Styles/NoNotification.css'

function NoNotification() {
  const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [hasNotifications, setHasNotifications] = useState(false);

useEffect(() => {
  const fetchUserAndNotifications = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    setUser(user);

    if (user) {
      const { data: notifications } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', user.id);

      setHasNotifications(notifications && notifications.length > 0);
    }

    setLoading(false);
  };

  fetchUserAndNotifications();
}, []);

if (loading) return <p>Loading...</p>;
if (!user) return <p>Please log in to view your notifications.</p>;
if (hasNotifications) return null; // or redirect to Notification page


  return (
    
    <>
    <div className='no'>
      <div className='usernav'>
            <UserNavbar />
            </div>

            <div className='desktop-notification-profile'>
            <div className='desktop-notification-profile-content'>
                <h2 className='desktop-notification-profile-info'>Profile Information</h2>
                <img className='desktop-notification-dp' src={dp} alt='User' />
            <div className='desktop-notification-user-details'>
                <li>Joined: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong>23 days on African Diaries</strong></li>
                <li>Profile views:  &nbsp; &nbsp;<strong>113 times</strong></li>
                <li>From: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong>Earth</strong></li>
                <li>Last Activity: &nbsp; <strong>Online</strong></li>
            </div>
            </div>
            <div className='desktop-notification-topics'>
                <Link className='tag' to='/LikedClips'>Liked Videos</Link>
                <Link className='tag1' to='/Notification'>Notifications</Link>
                <Link className='tag' to='/Setting'>Account Settings</Link>
            </div>
            </div>

      <div className='no-notification'>
      <div className='no1'>
            <Link to='/Home'><img className='cancel' src={back} alt='jpg' /></Link>
            <h2>Profile Information</h2>
            </div>
      
            <div className='no2'>
            <div className='no3'>
              <h2 className='user'>Jaybouggie</h2>
              <img className='dp' src={dp} alt='User' />
            </div>
      
            <div className='no4'>
              <ul className='de'>
                <li>Joined:</li>
                <li>Profile views:</li>
                <li>From:</li>
                <li>Last Activity:</li>
              </ul>
              <ul className='de1'>
                <li>23 days on African Diaries</li>
                <li>113 times</li>
                <li>Earth</li>
                <li>Online</li>
              </ul>
            </div>
            </div>
            
      
            <div className='no6'>
              <ul className='to'>
                <Link className='tag' to='/LikedClips'>Liked Videos</Link>
                <Link className='tag1' to='/Notification'>Notifications</Link>
                <Link className='tag' to='/Setting'>Account Settings</Link>
              </ul>
            </div>




      <div className='no7'>
        <img className='tag22' src={frame20} alt='No videos' />
        <div className='no7'>
          <p className='tag33'>No Notifications</p>
          <p className='tag44'>Al comment replies and likes will be here!</p>
        </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default NoNotification