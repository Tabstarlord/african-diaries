import React from 'react'
import { useAuth } from './AuthContext'
import { Link } from 'react-router-dom'
import Logo from '../Assets/logo.png'
import Search from '../Pages/Search'
import dp from '../Assets/ProfileImage.png'
import '../Styles/UserNavbar.css'

function UserNavbar() {
  const { user } = useAuth();
  return (
    <>
    <div className='dashboard'>
    <div className='logo'>
        <Link to='/Home'><img src={Logo} alt='/' /></Link>
      </div>

      <div className='searchbar'>
      <Search />
      </div>

      <div className='profile'>
        <Link to='/Notification' className='profile-link'>
        <span className='user'>{user.email}</span>
        <img className='dp' src={dp} alt='profile' />
        </Link>
      </div>
      </div>
    </>
  )
}

export default UserNavbar