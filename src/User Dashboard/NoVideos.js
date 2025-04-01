import React from 'react'
import { Link } from 'react-router-dom'
import dp from '../Assets/dp.png'
import back from '../Assets/cancel-01.png'
import frame20 from '../Assets/EmptyState.png'
import '../Styles/NoVideos.css'

function NoVideos() {
  return (
    <>
    <div className='nov'>
      <div className='nov1'>
            <Link to='/Home'><img className='cancel' src={back} alt='jpg' /></Link>
            <h2>Profile</h2>
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
                <Link className='tag' to='/Settings'>Account Settings</Link>
              </ul>
            </div>




      <div className='nov7'>
        <img className='tag2' src={frame20} alt='No videos' />
        <div className='nov7'>
          <p className='tag3'>No Liked Videos</p>
          <p className='tag4'>All the videos you like can be seen here!</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default NoVideos