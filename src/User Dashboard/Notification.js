import React from 'react'
import { Link } from 'react-router-dom'
import dp from '../Assets/dp.png'
import back from '../Assets/cancel-01.png'
import red from '../Assets/dot.png'
import avatar from '../Assets/Ellipse95.png'
import frame16 from '../Assets/Frame19.png'
import '../Styles/Notification.css'
import UserNavbar from './UserNavbar'

function Notification() {
  return (
    <>
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
        <h2 className='user'>Jaybouggie</h2>
        <img className='dp' src={dp} alt='User' />
    </div>
           
    <div className='not4'>
        <ul className='deta'>
          <li>Joined:</li>
          <li>Profile views:</li>
          <li>From:</li>
          <li>Last Activity:</li>
        </ul>
        <ul className='deta1'>
          <li>23 days on African Diaries</li>
          <li>113 times</li>
          <li>Earth</li>
          <li>Online</li>
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


     <div className='notification-contaioner'>
     <div className='notification-content'>
        <div className='noification-image'>
        <img className='red'  src={red} alt='jpg' />
        <img className='avatar' src={avatar} alt='jpg' />
        <span className='notify'>Jaybougie replied to your comment  <p className='time'>Just Now</p></span>
        <img className='display' src={frame16} alt='jpg' />
        </div>

        <div className='noification-image'>
        <img className='red'  src={red} alt='jpg' />
        <img className='avatar' src={avatar} alt='jpg' />
        <span className='notify'>Jaybougie replied to your comment  <p className='time'>Just Now</p></span>
        <img className='display' src={frame16} alt='jpg' />
        </div>

        <div className='noification-image'>
        <img className='red'  src={red} alt='jpg' />
        <img className='avatar' src={avatar} alt='jpg' />
        <span className='notify'>Jaybougie replied to your comment  <p className='time'>Just Now</p></span>
        <img className='display' src={frame16} alt='jpg' />
        </div>

      </div>
     </div>
      </div>
      </div>
    </>
  )
}

export default Notification