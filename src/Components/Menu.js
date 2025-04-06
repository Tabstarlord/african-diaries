import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Menu.css'
import video from '../Assets/video-play.png'
import newest from '../Assets/Newest.png'
import flag from '../Assets/flag.png'
import like from '../Assets/like.png' 
import watch from '../Assets/watch.png'
import Categories from './Categories'
import Dropdown from './Dropdown'
import Version from './Version'
import DropVersion from './DropVersion'



function Menu() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>  
    <div className='mobile-menu'>
    <aside className='sidebar'>
      {/* Sidebar Header*/}

      <nav className='sidebar-nav'>
        {/*Primary Top Nav*/}
        <ul className='nav-list primary-nav'>
          <li className='nav-item'>
            <Link to='/BestVideos' className='nav-link'>
            <img src={video} alt='video' />
            <span className='nav-label'>Best Videos</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/NewestVideos' className='nav-link'>
            <img src={newest} alt='video' />
            <span className='nav-label'>Newest Videos</span>
            </Link>
            </li>

            <li className='nav-item'>
              <span className='nav-label'>
                <Categories onClick={toggleVisibility} />
              </span>
              <Dropdown isVisible={isVisible} />
            </li>
            
        <li className='nav-item'>
          <Link to='/LikedVideos' className='nav-link'><img src={like} alt='like' /> <span className='nav-label'>Liked Videos</span> </Link>
        </li>
        <li className='nav-item'>
          <Link to='/WatchHistory' className='nav-link'><img src={watch} alt='like' /> <span className='nav-label'>Watch History</span> </Link>
        </li>

        <li className='nav-item'>
              <span className='nav-label'>
                <Version onClick={toggleOpen} />
              </span>
              <DropVersion isOpen={isOpen} />
            </li>
        
        <li className='nav-item'>
          <Link to='/' className='nav-link'><img src={flag} alt='like' /> <span className='nav-label'>Country:&nbsp; Nigeria</span></Link>
        </li>

        </ul>
      </nav>
    </aside>
    </div>


        {/*For Desktop*/}
    <div className='desktop-menu'>
    <aside className='sidebar'>
      {/* Sidebar Header*/}

      <nav className='sidebar-nav'>
        {/*Primary Top Nav*/}
        <ul className='nav-list primary-nav'>
          <li className='nav-item'>
            <Link to='/BestVideos' className='nav-link'>
            <img src={video} alt='video' />
            <span className='nav-label'>Best Videos</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/NewestVideos' className='nav-link'>
            <img src={newest} alt='video' />
            <span className='nav-label'>Newest Videos</span>
            </Link>
            </li>
            <li className='nav-item'>
          <Link to='/LikedVideos' className='nav-link'><img src={like} alt='like' /> <span className='nav-label'>Liked Videos</span> </Link>
        </li>
        <li className='nav-item'>
          <Link to='/WatchHistory' className='nav-link'><img src={watch} alt='like' /> <span className='nav-label'>Watch History</span> </Link>
        </li>
        <li className='nav-item'>
              <span className='nav-label'>
                <Version />
              </span>
              <DropVersion />
            </li>
        
        <li className='nav-item'>
          <Link to='/' className='nav-link'><img src={flag} alt='like' /> <span className='nav-label'>Country:&nbsp; Nigeria</span></Link>
        </li>

            <li className='nav-item'>
              <span className='nav-label'>
                <Categories />
              </span>
              <Dropdown />
            </li>
            
        

        

        </ul>
      </nav>
    </aside>
    </div>
   
    
    </>
  )
}

export default Menu;