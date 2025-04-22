import React, { useState, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import back from '../Assets/cancel-01.png'
import '../Styles/Setting.css'
import UserNavbar from './UserNavbar'
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
 
   const handleImageChange = (e) => {
     const file = e.target.files[0];
     if (file && file.type.startsWith('image/')) {
       const reader = new FileReader();
       reader.onloadend = () => {
         setProfileImage(reader.result);
       };
       reader.readAsDataURL(file);
     }
   };
 
   const handleSave = () => {
     setAlert(true);
     setTimeout(() => setAlert(false), 3000); // Alert disappears after 3 seconds
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