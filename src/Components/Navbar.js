import React, { useState, useRef, useEffect } from 'react'
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

  const profileRef = useRef(null);
const searchRef = useRef(null);


  const profileIconRef = useRef(null);
const searchIconRef = useRef(null);

  const Hamburger = <IoMenu className='HamburgerMenu' size='30px' color='black' onClick={() => setClick(!click)} />
  const Close = <IoClose className='HamburgerMenu' size='30px' color='black' onClick={() => setClick(!click)} />
  const [click, setClick] =useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      // For Profile dropdown
      if (profileRef.current && !profileRef.current.contains(event.target) &&
          profileIconRef.current && !profileIconRef.current.contains(event.target)) {
        setOpen(false);
      }
      // For Search dropdown
      if (searchRef.current && !searchRef.current.contains(event.target) &&
          searchIconRef.current && !searchIconRef.current.contains(event.target)) {
        setSearch(false);
      }
    }
  
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  



  return (
    <>
    <div className='mobile-navbar'>
    
    <div className='slide-search' ref={searchRef}>
    {search && (
      <Search />
    ) }
    </div>
    
    <div  className='header'>
      <div className='menu-btn'>
      { click ? Close : Hamburger}
      {click && <Menu setClick={setClick} />}
      </div>

      <div className='logo'>
        <Link to='/Home'><img className='logo' src={Logo} alt='/' /></Link>
      </div>

      
        <div className='search-bar' ref={searchIconRef} onClick={() => setSearch(prev => !prev)}>
        <img src={searchbar} alt='search' />
        </div>
      

      <div className='user' ref={profileIconRef} onClick={() => setOpen(prev => !prev)}>
        <img src={user} alt='user' />
      </div>
    </div>

      <div className='slide-profile' ref={profileRef}>
      { open && (
    <div className='account' >
          <Profile />
        </div>
        )
      }
      </div>
        
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