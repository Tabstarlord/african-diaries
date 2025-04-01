import React from 'react'
import { Link } from 'react-router-dom'
import frame1 from '../Assets/Frame1.png'
import arrow from '../Assets/arrow-right.png'
import eye from '../Assets/eye.png'
import '../Styles/NewestVideos.css'
import Foot from '../Components/Foot'
import Navbar from '../Components/Navbar'

function NewestVideos() {
  return (
    <>
    <Navbar />
    <div className='new'>
          <div className='new-1'>
            <span>Newest Videos</span>  
          </div>
          <div className='like-2'>
            <div className='image'>
              <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
              <span>Banging Oga Soldier Wife</span>
                        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                        </Link>
                      </div>
                      <div className='image'>
                        <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                        <span>Banging Oga Soldier Wife</span>
                        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                        </Link>
                      </div>
                      <div className='image'>
                        <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                        <span>Banging Oga Soldier Wife</span>
                        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                        </Link>
                      </div>
                      <div className='image'>
                        <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                        <span>Banging Oga Soldier Wife</span>
                        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                        </Link>
                      </div>
                      <div className='image'>
                        <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                        <span>Banging Oga Soldier Wife</span>
                        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                        </Link>
                      </div>
                      <div className='image'>
                        <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                        <span>Banging Oga Soldier Wife</span>
                        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                        </Link>
                      </div>
                      <div className='image'>
                        <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                        <span>Banging Oga Soldier Wife</span>
                        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                        </Link>
                      </div>
                      <div className='image'>
                        <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                        <span>Banging Oga Soldier Wife</span>
                        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                        </Link>
                      </div>
                      <div className='image'>
                        <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                        <span>Banging Oga Soldier Wife</span>
                        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                        </Link>
                      </div>
                      <div className='image'>
                        <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                        <span>Banging Oga Soldier Wife</span>
                        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                        </Link>
                      </div>
                      <div className='image'>
                        <Link to='/ViewVideos'><img src={frame1} alt='Bang' />
                        <span>Banging Oga Soldier Wife</span>
                        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
                        </Link>
                      </div>
               </div>
               <ul className='pages'>
        <li>
          <Link to='/'>1</Link>
        </li>
        <li>
          <Link to='/'>2</Link>
        </li>
        <li>
          <Link to='/'>3</Link>
        </li>
        <li>
          <Link to='/'>4</Link>
        </li>
        <li>
          <Link to='/'>5</Link>
        </li>
        <li>
          <Link to='/'>6</Link>
        </li>
        <li>
          <Link to='/'>7</Link>
        </li>
        <li>
          <Link to='/'>8</Link>
        </li>
        <li>
          <Link to='/'>9</Link>
        </li>
        <li>
          <Link to='/'>10</Link>
        </li>
        <li>
          <Link to='/'>11</Link>
        </li>
        <li>
          <Link to='/'>12</Link>
        </li>
        <li>
          <Link to='/'>Next<img src={arrow} alt='next' /> </Link>
        </li>
      </ul>
        </div>
    <Foot />
    </>
  )
}

export default NewestVideos