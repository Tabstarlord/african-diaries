import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import frame1 from '../Assets/Frame1.png'
import frame2 from '../Assets/Frame2.png'
import frame3 from '../Assets/Frame3.png'
import frame4 from '../Assets/Frame 213.png'
import frame5 from '../Assets/Frame 212.png'
import eye from '../Assets/eye.png'
import Navbar from '../Components/Navbar'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import Foot from '../Components/Foot'

const videos = [
  { id: 1, image: frame3, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 2, image: frame1, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 3, image: frame4, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 4, image: frame2, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 5, image: frame5, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 1, image: frame3, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 2, image: frame1, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 3, image: frame4, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 4, image: frame2, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 5, image: frame5, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 1, image: frame3, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 2, image: frame1, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 3, image: frame4, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 4, image: frame2, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 5, image: frame5, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 1, image: frame3, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 2, image: frame1, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 3, image: frame4, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 4, image: frame2, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 5, image: frame5, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 1, image: frame3, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 2, image: frame1, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 3, image: frame4, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 4, image: frame2, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 5, image: frame5, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 1, image: frame3, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 2, image: frame1, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 3, image: frame4, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 4, image: frame2, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 5, image: frame5, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 1, image: frame3, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 2, image: frame1, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 3, image: frame4, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 4, image: frame2, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 5, image: frame5, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 1, image: frame3, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 2, image: frame1, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 3, image: frame4, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 4, image: frame2, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 5, image: frame5, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 1, image: frame3, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 2, image: frame1, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 3, image: frame4, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 4, image: frame2, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 5, image: frame5, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 1, image: frame3, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 2, image: frame1, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 3, image: frame4, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 4, image: frame2, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 5, image: frame5, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 1, image: frame3, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 2, image: frame1, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 3, image: frame4, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 4, image: frame2, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 5, image: frame5, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 1, image: frame3, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 2, image: frame1, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 3, image: frame4, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 4, image: frame2, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  { id: 5, image: frame5, title: 'Banging Oga Soldier Wife', duration: '12mins', views: '12k' },
  // Add more video objects as needed
]
// Pagination config
const videosPerPage = 50;

function Lesbian() {

   const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(videos.length / videosPerPage);
  
    // Calculate current page videos
    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);
  
    const handlePageChange = (page) => {
      setCurrentPage(page);
      window.scrollTo(0, 0);
    };
  return (
    <>
     <Navbar />
      <div className='home'>
        <div className='desk-menu'>
          <div className='desktop-side'>
            <Menu />
          </div>
        </div>

        <div className='page-wrapper'>
          <div className='home-container'>
            {currentVideos.map((video, index) => (
              <div className='image' key={index}>
                <Link to='/ViewVideos'>
                  <img src={video.image} alt={video.title} />
                  <span>{video.title}</span>
                  <p>
                    {video.duration} &nbsp; - &nbsp;
                    <img className='eye' src={eye} alt='view count' />
                    {video.views}
                  </p>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination Buttons */}
          <div className='pagination'>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                onClick={() => handlePageChange(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
        <Footer />
      <Foot />
      </div>
    </>
  )
}

export default Lesbian
