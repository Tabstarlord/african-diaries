import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Profile.css'

function Profile() {
  return (
    <>
    <div className='user-account'>
    <Link className='log' to='/Login'>Login</Link>
    <Link to='/Login'>Register</Link>
    </div>
    </>
  )
}

export default Profile