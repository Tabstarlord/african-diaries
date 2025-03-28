import React from 'react'
import { Link } from 'react-router-dom'
import frame1 from '../Assets/Frame1.png'
import eye from '../Assets/eye.png'
import '../Styles/NewestVideos.css'
import Foot from '../Components/Foot'
import Navbar from '../Components/Navbar'

function NewestVideos() {
  return (
    <>
    <Navbar />
    <div className='liked'>
    
      <div className='liked-1'>
        <span>Newest Videos</span>
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

export default NewestVideos