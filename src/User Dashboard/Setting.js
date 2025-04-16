import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dp from '../Assets/dp.png'
import back from '../Assets/cancel-01.png'
import '../Styles/Setting.css'
import UserNavbar from './UserNavbar'

function Setting() {

  const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [userName, setUserName] = useState(localStorage.getItem("udername") || "");
    const [password, setPassword] = useState(localStorage.getItem("password")|| "");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem("username", userName);
      localStorage.setItem("email", email);
      localStorage.setItem("password", password);
      alert("Changes saved!")
      
    };

  return (
    <>
    
    <div className='acc'>
      <div className='set-navbar'>
      < UserNavbar />
      </div>
      <div className='settings'>

   <div className='set1'>
         <Link to='/Home'><img className='cancel' src={back} alt='jpg' /></Link>
         <h2>Profile Information</h2>
         </div>
   
         <div className='set2'>
         <div className='set3'>
           <h2 className='user'>Jaybouggie</h2>
           <img className='dp' src={dp} alt='User' />
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
          <form action='#' method='get' onSubmit={handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input 
          className='get1'
          type='text'
          name='username'
          id='username'
          value={userName} onChange={ (e) =>
            setUserName(e.target.value)
           }
           placeholder='Change Username' />

<label htmlFor='email'>
            Email address
          </label>
          <input 
          className='get1'
          type='text'
          name='email'
          id='email'
          value={email}
          onChange={ (e) =>
            setEmail(e.target.value)
          }
          placeholder='Update Email Address' />

<label htmlFor='password'>Password</label>
           <input 
           className='get1'
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           type='password' placeholder='Change Password'
           id='password' 
           name='password' />

<button className='get2'
           type='submit'
           >Save Changes</button>
          </form>
        </fieldset>
      </div>

      </div>
    </div>
    
    </>
  )
}

export default Setting