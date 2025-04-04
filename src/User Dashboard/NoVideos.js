import React from 'react'
import { Link } from 'react-router-dom'
import dp from '../Assets/dp.png'
import back from '../Assets/cancel-01.png'
import frame20 from '../Assets/EmptyState.png'
import frame1 from '../Assets/Frame1.png'
import frame2 from '../Assets/Frame2.png'
import frame3 from '../Assets/Frame3.png'
import frame4 from '../Assets/Frame4.png'
import eye from '../Assets/eye.png'
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

      <div className='nov9'>
      <div className='nov8'>
        <span className='nov10'>More Videos</span>
      </div>
      
      <div className='his-2'>
                      <div className='image'>
                                    <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame2} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame3} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame2} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                  </div>
                                  <div className='image'>
                                    <Link to='/ViewVideos'><img src={frame3} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame4} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame4} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                  </div>
                                  <div className='image'>
                                    <Link to='/ViewVideos'><img src={frame3} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame4} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame2} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                  </div>
                                  <div className='image'>
                                    <Link to='/ViewVideos'><img src={frame3} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame2} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame3} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                  </div>
                                  <div className='image'>
                                    <Link to='/ViewVideos'><img src={frame4} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame4} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame4} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                    <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                                      <span>Banging Oga Soldier Wife</span>
                                      <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                                    </Link>
                                  </div>
                         </div>
      </div>
      <div className='desktop-footer'>
        <Footer />
        <Foot />
      </div>
      </div>
    </>
  )
}

export default NoVideos