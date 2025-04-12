import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Assets/logo.png'
import Search from '../Pages/Search'
import dp from '../Assets/ProfileImage.png'
import '../Styles/UserNavbar.css'

function UserNavbar() {
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
        <Link to='/Notification'><span className='user'>Sexy Busty</span><img className='dp' src={dp} alt='dp' />
        </Link>
      </div>
      </div>
    </>
  )
}

export default UserNavbar