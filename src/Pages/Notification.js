import React from 'react'
import { Link } from 'react-router-dom'
import dp from '../Assets/dp.png'
import back from '../Assets/cancel-01.png'
import red from '../Assets/dot.png'
import frame3 from '../Assets/Ellipse95.png'
import frame16 from '../Assets/Frame19.png'
import '../Styles/Notification.css'

function Notification() {
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
          <Link className='tag'>Liked Videos</Link>
          <Link className='tag1'>Notifications</Link>
          <Link className='tag'>Account Settings</Link>
        </ul>
      </div>

      <div className='not'>
        <ul className='dot'>
          <li className='dot1'><img src={red} alt='jpg' /></li>
          <li className='dot2'><img className='dot2' src={frame3} alt='jpg' /></li>
          <li className='dot3'><span>Jaybougie replied to your comment</span></li>
          <li className='dot4'><img src={frame16} alt='jpg' /></li>
        </ul>
        <p className='dot5'>Just Now</p>

        <ul className='dot'>
          <li className='dot1'><img src={red} alt='jpg' /></li>
          <li className='dot2'><img className='dot2' src={frame3} alt='jpg' /></li>
          <li className='dot3'><span>Busty Princess liked your comment</span></li>
          <li className='dot4'><img src={frame16} alt='jpg' /></li>
        </ul>
        <p className='dot5'>12 mins ago</p>

        <ul className='dot'>
          <li className='dot1'><img src={red} alt='jpg' /></li>
          <li className='dot2'><img className='dot2' src={frame3} alt='jpg' /></li>
          <li className='dot3'><span>Jamial Red replied to your comment</span></li>
          <li className='dot4'><img src={frame16} alt='jpg' /></li>
        </ul>
        <p className='dot5'>2 day ago</p>

        <ul className='dot'>
          <li className='dot1'><img src={red} alt='jpg' /></li>
          <li className='dot2'><img className='dot2' src={frame3} alt='jpg' /></li>
          <li className='dot3'><span>Jamial replied to your comment</span></li>
          <li className='dot6'><img src={frame16} alt='jpg' /></li>
        </ul>
        <p className='dot5'>3 days ago</p>
      </div>

      {/*<div className='not'>
        <div className='dot'>
          <img className='dot1' src={red} alt='jpg' />
          <img className='dot2' src={frame3} alt='jpg' />
          <span className='dot3'>Jaybougie replied to your comment</span>
          <img className='dot4' src={frame16} alt='jpg' />
        </div>
        <p className='dot5'>Just Now</p>
      </div>
      <div className='not'>
        <div className='dot'>
          <img className='dot1' src={red} alt='jpg' />
          <img className='dot2' src={frame3} alt='jpg' />
          <span className='dot3'>Busty Princess liked your comment</span>
          <img className='dot4' src={frame16} alt='jpg' />
        </div>
        <p className='dot5'>12 mins ago</p>
      </div>
      <div className='not'>
        <div className='dot'>
          <img className='dot1' src={red} alt='jpg' />
          <img className='dot2' src={frame3} alt='jpg' />
          <span className='dot3'>Jamial Red replied to your comment</span>
          <img className='dot4' src={frame16} alt='jpg' />
        </div>
        <p className='dot5'>2 days ago</p>
      </div>
      <div className='not'>
        <div className='dot'>
          <img className='dot1' src={red} alt='jpg' />
          <img className='dot2' src={frame3} alt='jpg' />
          <span className='dot3'>Jaybougie replied to your comment</span>
          <img className='dot4' src={frame16} alt='jpg' />
        </div>
        <p className='dot5'>Just Now</p>
      </div>*/}
      
      
    </div>
    </>
  )
}

export default Notification