import React, { useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import supabase from '../supabaseClient';
import Logo from '../Assets/logo.png';
import Search from '../Pages/Search';
import '../Styles/UserNavbar.css';
import defaultAvatar from '../Assets/ProfileImage.png';

function UserNavbar() {
  const { user } = useAuth(); // From AuthContext
  const [avatarUrl, setAvatarUrl] = useState(defaultAvatar);

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

  return (
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
  );
}

export default UserNavbar;
