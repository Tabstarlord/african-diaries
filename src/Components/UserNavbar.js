import React, { useEffect, useRef, useState } from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import supabase from '../supabaseClient';
import Logo from '../Assets/logo.png';
import Search from '../Pages/Search';
import '../Styles/UserNavbar.css';
import defaultAvatar from '../Assets/ProfileImage.png';
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import searchbar from '../Assets/search.png'
import Menu from './Menu';

function UserNavbar() {
  const { user } = useAuth(); // From AuthContext
  const [avatarUrl, setAvatarUrl] = useState(defaultAvatar);
    const [search, setSearch] = useState(false);

    const searchRef = useRef(null);

    const searchIconRef = useRef(null);

    const Hamburger = <IoMenu className='HamburgerMenu' size='30px' color='black' onClick={() => setClick(!click)} />
      const Close = <IoClose className='HamburgerMenu' size='30px' color='black' onClick={() => setClick(!click)} />
      const [click, setClick] =useState(false);
  useEffect(() => {
    const fetchAvatar = async () => {
      if (!user?.avatar_url) return;

      const { data, error } = supabase
        .storage
        .from('avatars')
        .getPublicUrl(user.avatar_url);

      if (error) {
        console.error('Error getting avatar URL:', error.message);
      } else {
        setAvatarUrl(data.publicUrl || defaultAvatar);
      }
    };

    fetchAvatar();
  }, [user]);

  useEffect(() => {
    function handleClickOutside(event) {
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

    <div className='mobile-nav'>
    
    <div className='user-slide-search' ref={searchRef}>
    {search && (
      <Search />
    ) }
    </div>
    
    <div  className='user-header'>
      <div className='user-menu-btn'>
      { click ? Close : Hamburger}
      {click && <Menu setClick={setClick} />}
      </div>

      <div className='user-logo'>
        <Link to='/Home'><img className='logo' src={Logo} alt='/' /></Link>
      </div>

      
        <div className='user-search-bar' ref={searchIconRef} onClick={() => setSearch(prev => !prev)}>
        <img src={searchbar} alt='search' />
        </div>

         <div className='profile'>
        <Link to='/Notification' className='profile-link'>
          
          <img
            className='dp'
            src={avatarUrl}
            alt='profile'
          />
        </Link>
      </div>
    </div>
    </div>



    <div className='desktop-nav'>
<div className='dashboard'>
      <div className='logo'>
        <Link to='/Home'><img src={Logo} alt='Logo' /></Link>
      </div>

      <div className='searchbar'>
        <Search />
      </div>

      <div className='profile'>
        <Link to='/Notification' className='profile-link'>
          <span className='user'>
            {user?.username || 'Loading...'}
          </span>
          <img
            className='dp'
            src={avatarUrl}
            alt='profile'
          />
        </Link>
      </div>
    </div>
    </div>


    </>
    
  );
}

export default UserNavbar;
