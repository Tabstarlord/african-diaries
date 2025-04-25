import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Warning.css';

function Warning() {
  const [checkboxes, setCheckboxes] = useState({
    age: false,
    noMinors: false,
    voluntarily: false,
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes({ ...checkboxes, [name]: checked });
    setError('');
  };

  const handleEnter = (e) => {
    e.preventDefault();

    const allChecked = Object.values(checkboxes).every(Boolean);

    if (allChecked) {
      navigate('/Home');
    } else {
      setError('⚠️ Please check all the boxes before entering.');
    }
  };

  return (
    <div className="warn">
      <div className="warn-content">
        <div className="warn-1">
          <div className="warn3">
            <h1 className="go">African Diaries</h1>
            <h2 className="go2">This is an adult only website!</h2>
          </div>

          <div className="warn4">
            <p className="go3">WARNING: EXPLICIT CONTENT AHEAD</p>
            <p className="go4">
              This website contains adult-oriented content that is intended only for individuals who are 18 years of age or older (or the legal age of majority in your jurisdiction). By entering, you confirm that:
            </p>
          </div>

          <div className="warn5">
            <form>
              <p>
                <input
                  type="checkbox"
                  name="age"
                  checked={checkboxes.age}
                  onChange={handleChange}
                />{' '}
                You are at least 18 years old (or the legal age in your area).
              </p>
              <p>
                <input
                  type="checkbox"
                  name="noMinors"
                  checked={checkboxes.noMinors}
                  onChange={handleChange}
                />{' '}
                You will not share or distribute this content to minors.
              </p>
              <p>
                <input
                  type="checkbox"
                  name="voluntarily"
                  checked={checkboxes.voluntarily}
                  onChange={handleChange}
                />{' '}
                You voluntarily choose to access this website.
              </p>
            </form>
          </div>

          {error && <div className="warn-error" style={{color: 'red'}} >{error}</div>}

          <div className="warn6">
            <button className="go5" onClick={handleEnter}>
              I am 18 or older - Enter
            </button>
              <button className="go6">I am under 18 - Exit</button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Warning;
