import React, { useState } from 'react';
import supabase from '../supabaseClient';
import { Link, useNavigate } from 'react-router-dom';
import x from '../Assets/x.png';
import google from '../Assets/google.png';
import divider from '../Assets/Divider.png';
import cancel from '../Assets/close.png';
import '../Styles/Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
const [resetEmail, setResetEmail] = useState('');
const [resetMessage, setResetMessage] = useState('');


const handleLogin = async (e) => {
  e.preventDefault();

  const { data: signInData, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error('Login error:', error.message);
    return;
  }

  if (rememberMe) {
    localStorage.setItem('rememberMe', 'true');
  } else {
    sessionStorage.setItem('rememberMe', 'false');
  }

  if (signInData?.user) {
    console.log('Logged in user:', signInData.user);
    navigate('/home');
  }
};


  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setResetMessage('');
  
    const { data, error } = await supabase.auth.resetPasswordForEmail(resetEmail, {
      redirectTo: 'http://localhost:3000/update-password', // or your hosted site's update URL
    });
  
    if (error) {
      setResetMessage('❌ ' + error.message);
    } else {
      setResetMessage('✅ A reset email has been sent if this email is registered.', data);
      setResetEmail('');
    }
  };
  

  return (
    
    <div className='login-wrapper'>
      <div className='login-wrapper-2'>
        <div className='login'>
          <Link to='/Home'>
            <img className='back-3' src={cancel} alt='back' />
          </Link>
          <h1 className='log-in'>Log In</h1>

          <form onSubmit={handleLogin}>
            <label htmlFor='email'>Email</label>
            <input
              className='log-1'
              type='text'
              name='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Email'
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
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className='remember1'>Remember Me</span>
              </label>
              <Link to=''>
              <p
  className='forget'
  onClick={() => setShowModal(true)}
  style={{ cursor: 'pointer' }}
>
  Forget password?
</p>

              </Link>
            </div>

            <button className='btn-3' type='submit'>
              Login
            </button>
          </form>

          {showModal && (
  <div className='modal-overlay'>
    <div className='modal-content'>
      <span className='close-modal' onClick={() => setShowModal(false)}>
        &times;
      </span>
      <h2>Reset Password</h2>
      <form onSubmit={handlePasswordReset}>
        <input
          type='email'
          placeholder='Enter your email'
          value={resetEmail}
          onChange={(e) => setResetEmail(e.target.value)}
          required
        />
        <button className='btn-3' type='submit'>Send Reset Link</button>
      </form>
      {resetMessage && <p className='reset-message'>{resetMessage}</p>}
    </div>
  </div>
)}



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
