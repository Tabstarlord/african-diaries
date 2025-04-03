import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/dropdown.css'

function Dropdown(props) {
  return (
    <div>

      {props.isVisible ? (
        <ul className='droplink'>
        <li><Link to='/Anal'>Anal</Link></li>
        <li><Link to='/Gay' >Gay</Link></li>
        <li><Link to='/Straight'>Straight</Link></li>
        <li><Link to='/Bi'>Bi</Link></li>
        <li><Link to='/Gangbang'>Gangbang</Link> </li>
        <li><Link to='/BigDick'>Big Dick</Link></li>
        <li><Link to='/'>BDSM</Link></li>
        <li><Link to='/'>Bond</Link> </li>
        <li><Link to='/'>Milf</Link> </li>
        <li><Link to='/'>Cougar</Link> </li>
        <li><Link to='/'>Amatuer</Link> </li>
        <li><Link to='/'>Big Ass</Link> </li>
        <li><Link to='/'>Big Tits</Link> </li>
        <li><Link to='/'>Blonde</Link> </li>
        <li><Link to='/'>Blow Job</Link> </li>
        <li><Link to='/'>Cumshot</Link> </li>
        <li><Link to='/'>Creampie</Link> </li>
        <li><Link to='/'>Hardcore</Link> </li>
        <li><Link to='/'>Orgy</Link> </li>
        <li><Link to='/'>Lesbian</Link> </li>
        <li><Link to='/'>Squirting</Link> </li>
        <li><Link to='/'>Student</Link> </li>
        <li><Link to='/'>Teacher</Link> </li>
        <li><Link to='/'>Solo</Link> </li>
        <li><Link to='/'>Wanking</Link> </li>
      </ul>
      ) :null }
    </div>
  );
}

export default Dropdown