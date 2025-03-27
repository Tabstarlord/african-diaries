import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Menu.css'
import video from '../Assets/video-play.png'
import newest from '../Assets/Newest.png'
import categories from '../Assets/categories.png'
import globe from '../Assets/globe.png'
import like from '../Assets/like.png'
import version from '../Assets/version.png' 
import watch from '../Assets/watch.png'
import arrow from '../Assets/arrow-down.png'
import gay from '../Assets/circle-flags_lgbt.png'
import trans from '../Assets/circle-flags_lgbt-transgender.png'


function Menu() {
  return (
    <>
    {/*<button className='sidebar-menu-button'>
      <img src={Hamburger} alt='menu-btn' />
    </button>*/}

    {/*<header className='sidebar-header'>
        <button className='sidebar-toggler'>
          <img src={Hamburger} alt='menu-btn' />
        </button>
      </header> */}
    <aside className='sidebar'>
      {/* Sidebar Header*/}

      <nav className='sidebar-nav'>
        {/*Primary Top Nav*/}
        <ul className='nav-list primary-nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
            <img src={video} alt='video' />
            <span className='nav-label'>Best Videos</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/' className='nav-link'>
            <img src={newest} alt='video' />
            <span className='nav-label'>Newest Videos</span>
            </Link>
            </li>

          {/* Dropdown */}
            <li className='nav-item dropdown-container'>
              <span className='nav-link'>
              <img src={categories} alt='categories' /><span className='nav-label'>Categories</span>
              <span className='dropdown-icon material-symbols-rounded'><img src={arrow} alt='arrow' /></span>
              </span>
              

          {/*Dropdown Menu*/}
        <ul className='dropdown-menu'>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Anal</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Gay</Link> </li><li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Straight</Link> </li><li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Bi</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Gangbang</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Big Dick</Link></li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>BDSM</Link></li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Bond</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Milf</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Cougar</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Amatuer</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Big Ass</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Big Tits</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Blonde</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Blow Job</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Cumshot</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Creampie</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Hardcore</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Orgy</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Lesbian</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Squirting</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Student</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Teacher</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Solo</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'>Wanking</Link> </li>
        </ul>
        </li>
        <li className='nav-item'>
          <Link to='LikedVideos' className='nav-link'><img src={like} alt='like' /> <span className='nav-label'>Liked Videos</span> </Link>
        </li>
        <li className='nav-item'>
          <Link to='WatchHistory' className='nav-link'><img src={watch} alt='like' /> <span className='nav-label'>Watch History</span> </Link>
        </li>

        {/* Dropdown */}
        <li className='nav-item dropdown-container'>
        <span className='nav-link'>
        <img src={version} alt='version' /><span className='nav-label'>Versions:</span>
        <span className='dropdown-icon material-symbols-rounded'><img src={arrow} alt='arrow' /></span>
        </span>
              

          {/*Dropdown Menu*/}
        <ul className='dropdown-menu'>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'><img src={version} alt='version' /> Straight</Link> </li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'><img src={gay} alt='gay' />Gay</Link></li>
          <li className='nav-item'><Link to='/' className='nav-link dropdown-link'><img src={trans} alt='trans' />Trans</Link></li>
        </ul>
        </li>

        <li className='nav-item'>
          <Link to='/' className='nav-link'><img src={globe} alt='like' /> <span className='nav-label'>Country</span></Link>
        </li>

        </ul>
      </nav>
    </aside>
    
    </>
  )
}

export default Menu;