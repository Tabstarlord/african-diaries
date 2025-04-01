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
    <div className='not'>
     <div className='not1'>
                 <Link to='/Home'><img className='cancel' src={back} alt='jpg' /></Link>
                 <h2>Profile</h2>
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
                     <Link className='tag' to='/Settings'>Account Settings</Link>
                   </ul>
                 </div>



      <div className='dot-1'>
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
      </div>
      </div>
    </>
  )
}

export default Notification