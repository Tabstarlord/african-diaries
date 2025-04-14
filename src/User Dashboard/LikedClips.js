import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/LikedClips.css'
import back from '../Assets/cancel-01.png'
import dp from '../Assets/dp.png'
import frame1 from '../Assets/Frame1.png'
import eye from '../Assets/eye.png'
import UserNavbar from './UserNavbar'

function LikedClips() {
  return (
    <>
    <div className='clip'>
      <div className='usernav'>
      <UserNavbar />
      </div>
      <div className='liked-clips'>
      <div className='clip-01'>
      <div className='clip1'>
      <Link to='/Home'><img className='cancel' src={back} alt='jpg' /></Link>
      <h2>Profile Information</h2>
      </div>

      <div className='clip2'>
      <div className='clip3'>
        <h2 className='user'>Jaybouggie</h2>
        <img className='dp' src={dp} alt='User' />
      </div>

      <div className='clip4'>
        <ul className='details'>
          <li>Joined:</li>
          <li>Profile views:</li>
          <li>From:</li>
          <li>Last Activity:</li>
        </ul>
        <ul className='details1'>
          <li>23 days on African Diaries</li>
          <li>113 times</li>
          <li>Earth</li>
          <li>Online</li>
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
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
        </div>
        <div className='clip-container'>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
        </div>
        <div className='clip-container'>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
        </div>
        <div className='clip-container'>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
              <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
              <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
              </Link>
              </div>
        </div> 
      </div>
      </div>
      
      
    </div>
    </>
  )
}

export default LikedClips