import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import fb from '../Assets/fb.png'
import x from '../Assets/x.png'
import google from '../Assets/google.png'
import divider from '../Assets/Divider.png'
import '../Styles/Login.css'



function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      userName,
      password
    );
  };


  return (
    <>
    <div className='login'>
      <div className='login-2'>
        <img className='back' src={divider} alt='back' />
      <h1>Log In</h1>
      <fieldset>
        <form action='#' method='get'>
          <label htmlFor='username'>Username</label>
          <input 
          className='log-1'
          type='text'
          name='username'
          id='username'
          value={userName} onChange={ (e) =>
            setUserName(e.target.value)
           }
           placeholder='Enter Username' required />

           <label htmlFor='password'>Password</label>
           <input 
           className='log-1'
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           type='password' placeholder='Enter Password'
           id='password' 
           name='password' />
           <button className='btn-3'
           type='submit'
           value='Submit'
           onClick={(e) => handleSubmit(e)}>Login</button>
        </form>
      </fieldset>

      <div className='or-log'>
      <div className='orlog'>
        <h1><img src={divider} alt='line' />&nbsp; OR&nbsp; <img src={divider} alt='line' /> </h1>
      </div>
      <div className='login-social'>
        <img src={fb} alt='facebook' />
        <img src={x} alt='twitter' />
        <img src={google} alt='google' />
      </div>
      </div>
      <p className='btn-2'>Don't have an account? <Link to='Login'>Sign Up</Link> </p>

      </div>
    </div>
    </>
  )
}

export default Login