import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Dashboard.css'
function Dashboard() {
  return (
   <>
   <div className='dash'>
   <Link to='/LikedCLips'>User Liked Videos</Link>
   <Link to='/Notification'>User Notification</Link>
   <Link to='/Setting'>User Settings</Link>
   </div>
   

   </>
  )
}

export default Dashboard