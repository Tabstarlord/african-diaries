import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import supabase from '../supabaseClient'
import { v4 as uuidv4 } from 'uuid'; 
import { useUser } from '../Components/UserContext'
import back from '../Assets/cancel-01.png'
import '../Styles/Setting.css'
import UserNavbar from '../Components/UserNavbar'
import logout from '../Assets/Login.png'

function Setting() {

  const [profileImage, setProfileImage] = useState('https://randomuser.me/api/portraits/men/75.jpg');
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [alert, setAlert] = useState(false);
 
   const fileInputRef = useRef(null);
 
   const handleImageClick = () => {
     fileInputRef.current.click();
   };
 
   const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${uuidv4()}.${fileExt}`;
      const filePath = `${fileName}`;
  
      const { error } = await supabase
  .storage
  .from('avatars')
  .upload(filePath, file);

  
      if (error) {
        console.error('Error uploading image:', error);
        return;
      }
  
      // Get the public URL
      const { data: publicUrlData } = supabase
        .storage
        .from('avatars')
        .getPublicUrl(filePath);
  
      const publicUrl = publicUrlData.publicUrl;
  
      setProfileImage(publicUrl);
  
      // Save to user's profile in Supabase
      const {
        data: { user },
      } = await supabase.auth.getUser();
  
      if (user) {
        await supabase
          .from('profiles')
          .update({ avatar_url: publicUrl })
          .eq('id', user.id);
      }
    }
  };
  
 
   const { user } = useUser();

const handleSave = async (e) => {
  e.preventDefault();

  if (!user) return;

  try {
    // Update Auth info (email & password)
    if (email || password) {
      const { error: authError } = await supabase.auth.updateUser({
        email: email || undefined,
        password: password || undefined
      });

      if (authError) {
        console.error('Auth update error:', authError);
        return alert('Failed to update email or password.');
      }
    }

    // Update user profile info (username)
    const updates = {
      id: user.id,
      username: name || user.user_metadata?.username || '',
    };

    const { error: profileError } = await supabase
      .from('profiles')
      .update(updates)
      .eq('id', user.id);

    if (profileError) {
      console.error('Profile update error:', profileError);
      return alert('Failed to update username.');
    }

    setAlert(true);
    setTimeout(() => setAlert(false), 3000);
  } catch (error) {
    console.error('Unexpected error:', error.message);
    alert('Something went wrong.');
  }
};


   const navigate = useNavigate();

   const handleLogout = () => {
     // Optional: Clear authentication info from localStorage/sessionStorage
     localStorage.removeItem('isLoggedIn'); // if you're using this flag
     // Navigate to login page
     navigate('/Home');
   };

  return (
    <>
    
    <div className='acc'>
      <div className='set-navbar'>
      < UserNavbar />
      </div>
      <div className='settings'>

        <div className='desktop-settings-profile'>
                <div className='desktop-settings-profile-content'>
                    <h2 className='desktop-settings-profile-info'>Profile Information</h2>
                    <img className='desktop-settings-dp' src={profileImage} alt='User' />
                <div className='desktop-settings-user-details'>
                    <li>Joined: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong>23 days on African Diaries</strong></li>
                    <li>Profile views:  &nbsp; &nbsp;<strong>113 times</strong></li>
                    <li>From: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<strong>Earth</strong></li>
                    <li>Last Activity: &nbsp; <strong>Online</strong></li>
                </div>
                </div>
                <div className='desktop-settings-topics'>
                    <Link className='tag' to='/LikedClips'>Liked Videos</Link>
                    <Link className='tag' to='/Notification'>Notifications</Link>
                    <Link className='tag1' to='/Setting'>Account Settings</Link>
                </div>
                </div>

   <div className='set1'>
         <Link to='/Home'><img className='cancel' src={back} alt='jpg' /></Link>
         <h2>Profile Information</h2>
         </div>
   
         <div className='set2'>
         <div className='set3' >
           <h2 className='user'>Jaybouggie</h2>
           <img onClick={handleImageClick} className='dp' src={profileImage} alt='User dp' />
           <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleImageChange}
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
             <li>23 days on African Diaries</li>
             <li>113 times</li>
             <li>Earth</li>
             <li>Online</li>
           </ul>
         </div>
         </div>
         
   
         <div className='set6'>
           <ul className='top'>
             <Link className='tag' to='/LikedClips'>Liked Videos</Link>
             <Link className='tag' to='/Notification'>Notifications</Link>
             <Link className='tag1' to='/Settings'>Account Settings</Link>
           </ul>
         </div>


      <div className='acc2'>
        <fieldset>
          <form action='#' method='get'>
          <label htmlFor='username'>Username</label>
          <input
          className='get1'
          type="text"
          placeholder="Change Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

<label htmlFor='email'>
            Email address
          </label>
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

        <button className="get2" onClick={handleSave}>
          Save changes
        </button>

        {alert && <div className="alert-success">Changes saved successfully!</div>}
          </form>
        </fieldset>
      </div>

      </div>
      <span className='logout' onClick={handleLogout}>Logout<img src={logout} alt='logout' style={{cursor: "pointer"}} title='logout' /></span>
    </div>
    
    
    </>
  )
}

export default Setting