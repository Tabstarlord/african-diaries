import React from 'react'
import { Link } from 'react-router-dom'
import dp from '../Assets/dp.png'
import back from '../Assets/cancel-01.png'
import frame20 from '../Assets/Emptybox.png'
import '../Styles/NoNotification.css'

function NoNotification() {
  return (
    <>
    <div className='no'>
      <div className='no1'>
            <Link to='/Home'><img className='cancel' src={back} alt='jpg' /></Link>
            <h2>Profile</h2>
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
    </>
  )
}

export default NoNotification