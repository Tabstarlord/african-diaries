import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Navbar.css'
import Logo from '../Assets/logo.png'
import Desktoplogo from '../Assets/desktop-logo.png'
import user from '../Assets/profile.png'
import searchbar from '../Assets/search.png'
import Menu from './Menu'
import Search from '../Pages/Search'
import Profile from '../Components/Profile'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";


function Navbar() {

  const [open, setOpen] = useState (false);
  const [search, setSearch] = useState(false);

  const Hamburger = <IoMenu className='HamburgerMenu' size='30px' color='black' onClick={() => setClick(!click)} />
  const Close = <IoClose className='HamburgerMenu' size='30px' color='black' onClick={() => setClick(!click)} />
  const [click, setClick] =useState(false);

  return (
    <>
    <div className='mobile-navbar'>

    {search && (
          <Search />
        )}
    <div  className='header'>
      <div className='menu-btn'>
        { click ? Close : Hamburger}
        {click && <Menu />}
      </div>

      <div className='logo'>
        <Link to='/Home'><img className='logo' src={Logo} alt='/' /></Link>
      </div>

        <div className='search-bar' onClick={() => setSearch(search => !search)}>
        <img src={searchbar} alt='search' />
        </div> 
      

      <div className='user' onClick={() => setOpen(open => !open)}>
        <img src={user} alt='user' />
      </div>
    </div>

      { open && (
    <div className='account'>
          <Profile />
        </div>
        )
        }
    </div>



    <div className='desktop-navbar'>
    <div className='logo'>
    <Link to='/Home'><img src={Desktoplogo} alt='/' /></Link>
      </div>

      <div className='searchbar'>
      <Search />
      </div>

      <div className='desktop-account'>
          <Link className='log' to='/Login'>Login</Link>
          <Link className='regis' to='/Register'>Register</Link>
        </div>

    </div>
    

  
    </>
  )
}

export default Navbar