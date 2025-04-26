import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/DropVersion.css'
import version from '../Assets/version.png'
import gay from '../Assets/circle-flags_lgbt.png'
import trans from '../Assets/circle-flags_lgbt-transgender.png'

function DropVersion({ isOpen, onLinkClick }) {
  return (
    <>
      <div>
        {isOpen ? (
          <ul className='dropdown-menu'>
            <li><Link to='/Straight' onClick={onLinkClick}><img src={version} alt='version' /> Straight</Link></li>
            <li><Link to='/Gay' onClick={onLinkClick}><img src={gay} alt='gay' /> Gay</Link></li>
            <li><Link to='/Trans' onClick={onLinkClick}><img src={trans} alt='trans' /> Trans</Link></li>
          </ul>
        ) : null}
      </div>

      <div className='deskdrop'>
        <ul className='dropdown-menu'>
          <li><Link to='/'><img src={version} alt='version' /> Straight</Link></li>
          <li><Link to='/'><img src={gay} alt='gay' /> Gay</Link></li>
          <li><Link to='/'><img src={trans} alt='trans' /> Trans</Link></li>
        </ul>
      </div>
    </>
  );
}

export default DropVersion
