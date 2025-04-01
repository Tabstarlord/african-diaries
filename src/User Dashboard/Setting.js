import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import dp from '../Assets/dp.png'
import back from '../Assets/cancel-01.png'
import '../Styles/Setting.css'

function Setting() {

  const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(
        email,
        userName,
        password
      );
    };

  return (
    <>
    <div className='acc'>
   <div className='set1'>
         <Link to='/Home'><img className='cancel' src={back} alt='jpg' /></Link>
         <h2>Profile</h2>
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
          <form action='#' method='get'>
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
           value='Submit'
           onClick={(e) => handleSubmit(e)}>Save Changes</button>
          </form>
        </fieldset>
      </div>


    </div>
    
    </>
  )
}

export default Setting