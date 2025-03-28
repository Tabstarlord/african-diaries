import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import Logo from '../Assets/logo.png'
import user from '../Assets/profile.png'
import hamburger from '../Assets/hamburger.png'
import searchbar from '../Assets/search.png'
import Menu from './Menu'
import Search from '../Pages/Search'


function Navbar() {

  const [open, setOpen] = useState (false);

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

      <div className='search-bar'>
        <img src={searchbar} alt='search' />
      </div> 

     {/* <div className='search-bar' onClick={() => openSearch(open => !open)}>
        <img src={searchbar} alt='search' />
      </div> */}
      

      <div className='user' onClick={() => setOpen(open => !open)}>
        <Link to='/'><img src={user} alt='user' /></Link>
      </div>
    </div>

    
        <Search />

      { open && (
    <div className='account'>
          <Link className='log' to='Login'>Login</Link>
          <Link to='Register'>Register</Link>
        </div>
        )
        }

  
    </>
  )
}

export default Navbar