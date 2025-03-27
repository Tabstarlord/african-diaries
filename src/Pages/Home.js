import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import frame1 from '../Assets/Frame1.png'
import frame3 from '../Assets/Frame3.png'
import frame2 from '../Assets/Frame2.png'
import frame4 from '../Assets/Frame4.png'
import eye from '../Assets/eye.png'
import arrow from '../Assets/arrow-right.png'
import Footer from '../Components/Footer'
import Foot from '../Components/Foot'

function Home() {
  return (
    <>
    <div className='home'>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame1} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame2} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame3} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame2} alt='Bang' />
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
        <Link to='ViewVideos'><img src={frame3} alt='Bang' />
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
        <Link to='ViewVideos'><img src={frame4} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame4} alt='Bang' />
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
        <Link to='ViewVideos'><img src={frame3} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
      <div className='image'>
        <Link to='ViewVideos'><img src={frame4} alt='Bang' />
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
        <Link to='ViewVideos'><img src={frame2} alt='Bang' />
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
        <Link to='ViewVideos'><img src={frame3} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
      </div>
 <div className='image'>
        <Link to='ViewVideos'><img src={frame4} alt='Bang' />
        <span>Banging Oga Soldier Wife</span>
        <p>12mins &nbsp; - &nbsp; <img className='eye' src={eye} alt='view' />12k </p>
        </Link>
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
    <Footer />
    <Foot />

    </>
    
  )
}

export default Home