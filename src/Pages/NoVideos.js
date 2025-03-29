import React from 'react'
import { Link } from 'react-router-dom'
import dp from '../Assets/dp.png'
import back from '../Assets/cancel-01.png'
import frame20 from '../Assets/EmptyState.png'
import '../Styles/NoVideos.css'

function NoVideos() {
  return (
    <>
    <div className='clip'>
      <div className='clip1'>
      <img className='cancel' src={back} alt='jpg' />
      <h2>Profile</h2>
      </div>

      <div className='clip2'>
        <h2 className='user'>Jaybouggie</h2>
        <img className='dp' src={dp} alt='User' />
      </div>

      <div className='clip3'>
        <ul className='details'>
          <li>Joined:</li>
          <li>Profile views:</li>
          <li>From:</li>
          <li>Last Activity:</li>
        </ul>
      </div>
      <div className='clip4'>
        <ul className='details1'>
          <li>23 days on African Diaries</li>
          <li>113 times</li>
          <li>Earth</li>
          <li>Online</li>
        </ul>
      </div>

      <div className='clip5'>
        <ul className='topic'>
          <Link className='tag' to='/LikedClips'>Liked Videos</Link>
          <Link className='tag' to='/Notification'>Notifications</Link>
          <Link className='tag1' to='/Settings'>Account Settings</Link>
        </ul>
      </div>

      <div className='clip6'>
        <img className='tag2' src={frame20} alt='No videos' />
        <div className='clip7'>
          <p className='tag3'>No Liked Videos</p>
          <p className='tag4'>All the videos you like can be seen here!</p>
        </div>
      </div>
      </div>
    </>
  )
}

export default NoVideos