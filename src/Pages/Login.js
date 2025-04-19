import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import x from '../Assets/x.png';
import google from '../Assets/google.png';
import divider from '../Assets/Divider.png';
import cancel from '../Assets/close.png';
import '../Styles/Login.css';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userName, password, checkBox);
  };

  return (
    <div className='login-wrapper'>
    <div className='login-wrapper-2'>
      <div className='login'>
        <Link to='/Home'>
          <img className='back-3' src={cancel} alt='back' />
        </Link>
        <h1 className='log-in'>Log In</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='username'>Username</label>
          <input
            className='log-1'
            type='text'
            name='username'
            id='username'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder='Enter Username'
            required
          />

          <label htmlFor='password'>Password</label>
          <input
            className='log-1'
            type='password'
            id='password'
            name='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter Password'
            required
          />

          <div className='remfor'>
            <label className='remember-wrapper'>
              <input
                type='checkbox'
                checked={checkBox}
                onChange={() => setCheckBox(!checkBox)}
              />
              <span className='remember1'>Remember Me</span>
            </label>
            <Link to=''>
              <p className='forget'>Forget password?</p>
            </Link>
          </div>

          <button className='btn-3' type='submit'>
            Login
          </button>
        </form>

        <div className='or-log'>
          <h1 className='or'>
            <img src={divider} alt='line' />
            &nbsp; OR &nbsp;
            <img src={divider} alt='line' />
          </h1>
          <div className='login-social'>
            <img src={x} alt='twitter' />
            <img src={google} alt='google' />
          </div>
        </div>

        <p className='btn-2'>
          Don't have an account? <Link to='/Register'>Sign Up</Link>
        </p>
      </div>
      </div>
    </div>
  );
}

export default Login;
