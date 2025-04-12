import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Menu.css'
import video from '../Assets/video-play.png'
import newest from '../Assets/Newest.png'
import flag from '../Assets/flag.png'
import like from '../Assets/like.png' 
import watch from '../Assets/watch.png'
import Gay from '../Assets/circle-flags_lgbt.png'
import Trans from '../Assets/circle-flags_lgbt-transgender.png'
import cat from '../Assets/categories.png'
import Straight from '../Assets/version.png'
import Arrow from '../Assets/arrow-down.png'
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
            <span className='nav-link'>
            <img src={Straight} alt='video' />
            <span className='nav-label'>Version:</span>
            <img src={Arrow} alt='ver' />
            </span>
          </li>

        <ul className='sub-menu'>
        <li className='nav-item'>
            <Link to='/Straight' className='nav-link'>
            <img src={Straight} alt='video' />
            <span className='nav-label'>Straight</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Gay' className='nav-link'>
            <img src={Gay} alt='video' />
            <span className='nav-label'>Gay</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Trans' className='nav-link'>
            <img src={Trans} alt='video' />
            <span className='nav-label'>Trans</span>
            </Link>
          </li>

        </ul>
        <li className='nav-item'>
          <Link to='/WatchHistory' className='nav-link'><img src={watch} alt='like' /> <span className='nav-label'>Watch History</span> </Link>
        </li>
        
        <li className='nav-item'>
          <Link to='/' className='nav-link'><img src={flag} alt='like' /> <span className='nav-label'>Country:&nbsp; Nigeria</span></Link>
        </li>

        <li className='nav-item'>
            <span className='nav-link'>
            <img src={cat} alt='video' />
            <span className='nav-label'>Categories:</span>
            <img src={Arrow} alt='ver' />
            </span>
          </li>

        <ul className='sub-menu'>
        <li className='nav-item'>
            <Link to='/Amatuer' className='nav-link'>
            <span className='nav-label'>Amatuer</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Anal' className='nav-link'>
            <span className='nav-label'>Anal</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/BDSM' className='nav-link'>
            <span className='nav-label'>BDSM</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Bi' className='nav-link'>
            <span className='nav-label'>Bi</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/BigAss' className='nav-link'>
            <span className='nav-label'>Big Ass</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/BigDick' className='nav-link'>
            <span className='nav-label'>Big Dick</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/BigTits' className='nav-link'>
            <span className='nav-label'>Big Tits</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Blonde' className='nav-link'>
            <span className='nav-label'>Blonde</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/BlowJob' className='nav-link'>
            <span className='nav-label'>Blow Job</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Bond' className='nav-link'>
            <span className='nav-label'>Bonde</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Cougar' className='nav-link'>
            <span className='nav-label'>Cougar</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Creampie' className='nav-link'>
            <span className='nav-label'>Creampie</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/Cumshot' className='nav-link'>
            <span className='nav-label'>Cumshot</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Gangbang' className='nav-link'>
            <span className='nav-label'>Gangbang</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Gay' className='nav-link'>
            <span className='nav-label'>Gay</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Hardcore' className='nav-link'>
            <span className='nav-label'>Hardcore</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Lesbian' className='nav-link'>
            <span className='nav-label'>Lesbian</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Milf' className='nav-link'>
            <span className='nav-label'>Milf</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/Solo' className='nav-link'>
            <span className='nav-label'>Solo</span>
            </Link>
          </li>

          <li className='nav-item'>
            <Link to='/Squirting' className='nav-link'>
            <span className='nav-label'>Squirting</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Straight' className='nav-link'>
            <span className='nav-label'>Straight</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Teacher' className='nav-link'>
            <span className='nav-label'>Teacher</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Trans' className='nav-link'>
            <span className='nav-label'>Trans</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/Wanking' className='nav-link'>
            <span className='nav-label'>Wanking</span>
            </Link>
          </li>
        </ul>
        </ul>
      </nav>
    </aside>
    </div>
   
    
    </>
  )
}

export default Menu;