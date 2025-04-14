import React from 'react'
import { Link } from 'react-router-dom'
import dp from '../Assets/dp.png'
import back from '../Assets/cancel-01.png'
import red from '../Assets/dot.png'
import frame3 from '../Assets/Ellipse95.png'
import frame16 from '../Assets/Frame19.png'
import '../Styles/Notification.css'
import UserNavbar from './UserNavbar'

function Notification() {
  return (
    <>
    <div className='not'>
    <div className='usernav'>
            <UserNavbar />
            </div>
            <div className='notification'>

           
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


      <div className='dot-1'>
        <div className='dot1'>
          <img  src={red} alt='jpg' />
        </div>
        <div className='dot2'>
          <img src={frame3} alt='jpg' />
          </div>
        <div className='dot3'>
          <span>Jaybougie replied to your comment</span>
          </div>
          <div className='dot4'>
          <img src={frame16} alt='jpg' />
          </div>
          <div className='dot5'>
          <p className='dot5'>Just Now</p>
          </div>
      </div>
      <div className='dot-1'>
        <div className='dot1'>
          <img  src={red} alt='jpg' />
        </div>
        <div className='dot2'>
          <img src={frame3} alt='jpg' />
          </div>
        <div className='dot3'>
          <span>Busty Princess liked your comment</span>
          </div>
          <div className='dot4'>
          <img src={frame16} alt='jpg' />
          </div>
          <div className='dot5'>
          <p className='dot5'>12 mins ago</p>
          </div>
      </div>
      <div className='dot-1'>
        <div className='dot1'>
          <img  src={red} alt='jpg' />
        </div>
        <div className='dot2'>
          <img src={frame3} alt='jpg' />
          </div>
        <div className='dot3'>
          <span>Jamial Red replied to your comment</span>
          </div>
          <div className='dot4'>
          <img src={frame16} alt='jpg' />
          </div>
          <div className='dot5'>
          <p className='dot5'>2 day ago</p>
          </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default Notification