import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../supabaseClient';

import '../Styles/Register.css';
import x from '../Assets/x.png';
import google from '../Assets/google.png';
import divider from '../Assets/Divider.png';
import cancel from '../Assets/close.png';

function Register() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleOAuthLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({ provider });
    if (error) {
      console.error(`${provider} login error:`, error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password
    });

    if (error) {
      console.error('Signup error:', error.message);
      alert(error.message);
      return;
    }

    const user = data.user;

    if (user) {
      const { error: profileError } = await supabase.from('profiles').insert({
        id: user.id,
        username: userName,
        avatar_url: '',
        profile_views: 0,
        last_seen: 'online',
      });

      if (profileError) {
        console.error('Profile insert error:', profileError.message);
        alert('Profile creation failed: ' + profileError.message);
        return;
      }

      alert('Account created! Please check your email to confirm.');
      navigate('/Home');
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-wrapper-2">
        <div className="register-container">
          <Link to="/Home">
            <img className="back-4" src={cancel} alt="back" />
          </Link>
          <div className="register-form">
            <h1>Create an account</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email address</label>
              <input
                className="put"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email Address"
                required
              />

              <label htmlFor="username">Username</label>
              <input
                className="put"
                type="text"
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter Username"
                required
              />

              <label htmlFor="password">Password</label>
              <input
                className="put"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                required
              />

              <button className="btn" type="submit">Register</button>
            </form>

            <div className="or-reg">
              <div className="or">
                <h1 className="regor">
                  <img src={divider} alt="line" /> OR <img src={divider} alt="line" />
                </h1>
              </div>
              <div className="register-social">
                <img
                  src={x}
                  alt="twitter"
                  onClick={() => handleOAuthLogin('twitter')}
                  style={{ cursor: 'pointer' }}
                />
                <img
                  src={google}
                  alt="google"
                  onClick={() => handleOAuthLogin('google')}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </div>

            <p className="btn-1">
              Already have an account? <Link to="/Login">Login Now</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
