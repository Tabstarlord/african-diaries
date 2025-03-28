import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Register.css'
import Fb from '../Assets/fb.png'
import x from '../Assets/x.png'
import google from '../Assets/google.png'
import divider from '../Assets/Divider.png'
import cancel from '../Assets/close.png'

function Register() {
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
    <div className='register'>
      <div className='reg'>
      <img className='back' src={cancel} alt='back' />
      <h1>Create an account</h1>
      <fieldset>
        <form action='#' method='get'>
          <label htmlFor='email'>
            Email address
          </label>
          <input 
          className='put'
          type='text'
          name='email'
          id='email'
          value={email}
          onChange={ (e) =>
            setEmail(e.target.value)
          }
          placeholder='Enter Email Address' required />
          <label htmlFor='username'>Username</label>
          <input 
          className='put'
          type='text'
          name='username'
          id='username'
          value={userName} onChange={ (e) =>
            setUserName(e.target.value)
           }
           placeholder='Enter Username' required />

           <label htmlFor='password'>Password</label>
           <input 
           className='put'
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           type='password' placeholder='Enter Password'
           id='password' 
           name='password' />
           <button className='btn'
           type='submit'
           value='Submit'
           onClick={(e) => handleSubmit(e)}>Register</button>
        </form>
      </fieldset>

      <div className='or-reg'>
      <div className='or'>
        <h1><img src={divider} alt='line' />&nbsp; OR&nbsp; <img src={divider} alt='line' /> </h1>
      </div>
      <div className='register-social'>
        <img src={Fb} alt='facebook' />
        <img src={x} alt='twitter' />
        <img src={google} alt='google' />
      </div>
      </div>


      <p className='btn-1'>Already have an account? <Link to='Login'>Login Now</Link> </p>

      </div>
    </div>
    </>
  )
}

export default Register