import React from 'react'
import { Link } from 'react-router-dom'
import dp from '../Assets/dp.png'
import back from '../Assets/cancel-01.png'
import frame20 from '../Assets/EmptyState.png'
import '../Styles/NoVideos.css'
import UserNavbar from './UserNavbar'
import Foot from '../Components/Foot'
import Footer from '../Components/Footer'

function NoVideos() {
  return (
    <>
    <div className='nov'>
      <div className='liked-navbar'>
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
                      <Link className='tag1' to='/LikedClips'>Liked Videos</Link>
                      <Link className='tag' to='/Notification'>Notifications</Link>
                      <Link className='tag' to='/Setting'>Account Settings</Link>
                  </div>
                  </div>
                  
      <div className='no-videos'>
      <div className='nov1'>
            <Link to='/Home'><img className='cancel' src={back} alt='jpg' /></Link>
            <h2>Profile Information</h2>
            </div>
      
            <div className='nov2'>
            <div className='nov3'>
              <h2 className='user'>Jaybouggie</h2>
              <img className='dp' src={dp} alt='User' />
            </div>
      
            <div className='nov4'>
              <ul className='detail'>
                <li>Joined:</li>
                <li>Profile views:</li>
                <li>From:</li>
                <li>Last Activity:</li>
              </ul>
              <ul className='detail1'>
                <li>23 days on African Diaries</li>
                <li>113 times</li>
                <li>Earth</li>
                <li>Online</li>
              </ul>
            </div>
            </div>
            
      
            <div className='nov6'>
              <ul className='topics'>
                <Link className='tag1' to='/LikedClips'>Liked Videos</Link>
                <Link className='tag' to='/Notification'>Notifications</Link>
                <Link className='tag' to='/Setting'>Account Settings</Link>
              </ul>
            </div>




      <div className='nov7'>
        <img className='tag2' src={frame20} alt='No videos' />
        <div className='nov7'>
          <p className='tag3'>No Liked Videos</p>
          <p className='tag4'>All the videos you like can be seen here!</p>
        </div>
      </div>
      <div className='desktop-footer'>
        <Footer />
        <Foot />
      </div>
      </div>
      </div>
    </>
  )
}

export default NoVideos