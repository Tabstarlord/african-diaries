import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/dropdown.css'

function Dropdown({ isVisible, onLinkClick }) {
  const isDesktop = window.innerWidth > 1024;

  const categories = [
    'Anal', 'Gay', 'Straight', 'Bi', 'Gangbang', 'BigDick', 'BDSM', 'Bond', 'Milf',
    'Cougar', 'Amatuer', 'BigAss', 'BigTits', 'Blonde', 'BlowJob', 'Cumshot',
    'Creampie', 'Hardcore', 'Orgy', 'Lesbian', 'Squirting', 'Student', 'Teacher',
    'Solo', 'Wanking'
  ];

  return (
    <div>
      {(isDesktop || isVisible) ? (
        <ul className='droplink'>
          {categories.map((cat) => (
            <li key={cat}>
              <Link to={`/${cat}`} onClick={onLinkClick}>{cat.replace(/([A-Z])/g, ' $1').trim()}</Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Dropdown
