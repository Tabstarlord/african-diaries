import React from 'react'
import { Link } from 'react-router-dom'
import frame1 from '../Assets/Frame1.png'
import eye from '../Assets/eye.png'
import '../Styles/BestVideos.css'
import Foot from '../Components/Foot'

function BestVideos() {
  return (
    <>
    <div className='liked'>
      <div className='liked-1'>
        <span>Best Videos</span>
        <li className='filter'>
          <button>January 2025</button>
          <button>February 2025</button>
          <button>March 2025</button>
          <button>April 2025</button>
          <button>May 2025</button>
          <button>June 2025</button>
        </li>
      </div>

      <div className='image'>
        <Link to='ViewVideos'><img src={frame1} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame1} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame1} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='liked-1'>
        <span>Watch History</span>
        <p>See all your watched videos here!</p>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame1} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame1} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame1} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='liked-1'>
        <span>Watch History</span>
        <p>See all your watched videos here!</p>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame1} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame1} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame1} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
    </div>
    <Foot />
    </>
  )
}

export default BestVideos