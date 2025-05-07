import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';
import { v4 as uuidv4 } from 'uuid'; 
import { useAuth } from '../Components/AuthContext';
import back from '../Assets/cancel-01.png';
import '../Styles/Setting.css';
import UserNavbar from '../Components/UserNavbar';
import logoutIcon from '../Assets/Login.png';
import defaultAvatar from '../Assets/ProfileImage.png';

function Setting() {
  const { user } = useAuth();
  const [profileImage, setProfileImage] = useState(defaultAvatar);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [joinedDays, setJoinedDays] = useState('');
  const [profileViews, setProfileViews] = useState(0);
  const [location, setLocation] = useState('');
  const [lastSeen, setLastSeen] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error) {
        console.error('Failed to load profile:', error.message);
      } else {
        setName(data.username);
        setProfileViews(data.profile_views || 0);
        setLocation(data.location || 'Unknown');
        setLastSeen(data.last_seen === 'online' ? 'Online' : 'Offline');
        setEmail(user.email);

        if (data.avatar_url) {
          const { data: avatar } = supabase
            .storage
            .from('avatars')
            .getPublicUrl(data.avatar_url);
          setProfileImage(avatar?.publicUrl || defaultAvatar);
        }

        if (user.created_at) {
          const createdDate = new Date(user.created_at);
          const now = new Date();
          const diffTime = Math.abs(now - createdDate);
          const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
          setJoinedDays(diffDays);
        }
      }
    };

    fetchProfile();
  }, [user]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleAvatarUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileExt = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExt}`;
    const filePath = `${user.id}/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (uploadError) {
      console.error('Avatar upload error:', uploadError.message);
      alert('Upload failed.');
      return;
    }

    const { error: dbError } = await supabase
      .from('profiles')
      .update({ avatar_url: filePath })
      .eq('id', user.id);

    if (dbError) {
      console.error('Avatar DB update error:', dbError.message);
      alert('Failed to save avatar to profile.');
      return;
    }

    const { data: avatar } = supabase
      .storage
      .from('avatars')
      .getPublicUrl(filePath);
    setProfileImage(avatar?.publicUrl || defaultAvatar);
    alert('Avatar uploaded successfully!');
  };

  const handleSave = async (e) => {
    e.preventDefault();
    if (!user) return;

    try {
      if (email || password) {
        const { error: authError } = await supabase.auth.updateUser({
          email: email || undefined,
          password: password || undefined,
        });

        if (authError) {
          console.error('Auth update error:', authError);
          return alert('Failed to update email or password.');
        }
      }

      const updates = {
        username: name,
        location,
        last_seen: 'online',
      };

      const { error: profileError } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', user.id);

      if (profileError) {
        console.error('Profile update error:', profileError);
        return alert('Failed to update profile.');
      }

      setAlert(true);
      setTimeout(() => setAlert(false), 3000);
    } catch (error) {
      console.error('Unexpected error:', error.message);
      alert('Something went wrong.');
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/Home');
  };

  return (
    <div className='acc'>
      <div className='set-navbar'>
        <UserNavbar />
      </div>

      <div className='settings'>
        <div className='desktop-settings-profile'>
          <div className='desktop-settings-profile-content'>
            <h2 className='desktop-settings-profile-info'>{name}</h2>
            <div className="desktop-settings-dp" onClick={handleImageClick}>
              <img src={profileImage} className='desktop-settings-dp' alt="Profile" />
              <div className="camera-icon">📷</div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleAvatarUpload}
                style={{ display: 'none' }}
              />
            </div>
            <div className='desktop-settings-user-details'>
              <li>Joined: <strong>{joinedDays} days on African Diaries</strong></li>
              <li>Profile views: <strong>{profileViews} times</strong></li>
              <li>From: <strong>{location}</strong></li>
              <li>Last Activity: <strong>{lastSeen}</strong></li>
            </div>
          </div>
          <div className='desktop-settings-topics'>
            <Link className='tag' to='/LikedClips'>Liked Videos</Link>
            <Link className='tag' to='/Notification'>Notifications</Link>
            <Link className='tag1' to='/Setting'>Account Settings</Link>
          </div>
        </div>

        <div className='set1'>
          <Link to='/Home'><img className='cancel' src={back} alt='back' /></Link>
          <h2>{name}</h2>
        </div>

        <div className='set2'>
          <div className='set3'>
            <h2 className='user'>{name}</h2>
            <img onClick={handleImageClick} className='dp' src={profileImage} alt='User dp' />
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleAvatarUpload}
              style={{ display: 'none' }}
            />
          </div>

          <div className='set4'>
            <ul className='det'>
              <li>Joined:</li>
              <li>Profile views:</li>
              <li>From:</li>
              <li>Last Activity:</li>
            </ul>
            <ul className='det1'>
              <li>{joinedDays} days on African Diaries</li>
              <li>{profileViews} times</li>
              <li>{location}</li>
              <li>{lastSeen}</li>
            </ul>
          </div>
        </div>

        <div className='set6'>
          <ul className='top'>
            <Link className='tag' to='/LikedClips'>Liked Videos</Link>
            <Link className='tag' to='/Notification'>Notifications</Link>
            <Link className='tag1' to='/Setting'>Account Settings</Link>
          </ul>
        </div>

        <div className='acc2'>
          <fieldset>
            <form onSubmit={handleSave}>
              <label htmlFor='username'>Username</label>
              <input
                className='get1'
                type="text"
                placeholder="Change Username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label htmlFor='email'>Email address</label>
              <input
                className='get1'
                type="email"
                placeholder="Update Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor='password'>Password</label>
              <input
                className='get1'
                type="password"
                placeholder="Change Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button className="get2" type="submit">
                Save changes
              </button>

              {alert && <div className="alert-success">Changes saved successfully!</div>}
            </form>
          </fieldset>
        </div>
      </div>

      <span className='logout' onClick={handleLogout}>
        Logout <img src={logoutIcon} alt='logout' style={{ cursor: "pointer" }} title='logout' />
      </span>
    </div>
  );
}

export default Setting;
