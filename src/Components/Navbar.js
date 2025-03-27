import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import Logo from '../Assets/logo.png'
import user from '../Assets/profile.png'
import hamburger from '../Assets/hamburger.png'
import Search  from '../Pages/Search'
import Menu from './Menu'


function Navbar() {

  const [ showMenu, setShowMenu] = useState(false)
  return (
    <>
    {showMenu && (
      <Menu />
    )

    }
    <div className='header'>
      <div className='menu-btn' onClick={() => setShowMenu(showMenu => !showMenu)}><img src={hamburger} alt='hamburger' /></div>

      <div className='logo'>
        <Link to='/'><img src={Logo} alt='/' /></Link>
      </div>

     {/* <div className='search'>
        <img src={search} alt='search' />
      </div> */} 

      <div className='user'>
        <Link to='/'><img src={user} alt='user' /></Link>
      </div>
    </div>

  <div className='search-bar'>
    <Search />
  </div>
    </>
  )
}

export default Navbar