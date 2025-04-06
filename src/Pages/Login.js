import React, { useState } from 'react'
import  { Link } from 'react-router-dom'
import x from '../Assets/x.png'
import google from '../Assets/google.png'
import divider from '../Assets/Divider.png'
import cancel from '../Assets/close.png'
import '../Styles/Login.css'



function Login() {

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      userName,
      password,
      checkBox
    );
  };


  return (
    <>
    <div className='login'>
      <div className='login-2'>
      <Link to='/Home'><img className='back-3' src={cancel} alt='back' /></Link>
        <div className='login-3'>
          <div className='login-4'>  
          
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

          <div className='remfor'>
          <input 
           className='remember'
           type='radio'
           id='remember'
           name='remember'
           value='remember'
           checked={checkBox === "remember"}
           onChange={(e) =>
            setCheckBox(e.target.value)
           }
           /><p className='remember1'>Remember Me</p>
           <Link to=''><p className='forget'>Forget your password?</p></Link>
          </div>
           
           <button className='btn-3'
           type='submit'
           value='Submit'
           onClick={(e) => handleSubmit(e)}>Login</button>
        </form>
      </fieldset>

      <div className='or-log'>
      <div className='orlog'>
        <h1 className='or'><img src={divider} alt='line' />&nbsp; OR&nbsp; <img src={divider} alt='line' /> </h1>
      </div>
      <div className='login-social'>
        <img src={x} alt='twitter' />
        <img src={google} alt='google' />
      </div>
      </div>
      <p className='btn-2'>Don't have an account? <Link to='/Register'>Sign Up</Link> </p>
      </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Login