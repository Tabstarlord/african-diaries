import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import supabase  from '../supabaseClient'
import eye from '../Assets/eye.png'
import Navbar from '../Components/Navbar'
import UserNavbar from '../Components/UserNavbar'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import Foot from '../Components/Foot'





function BestVideos() {
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [videos, setVideos] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
     // Pagination config
    const videosPerPage = 50;
  
    useEffect(() => {
      const authStatus = localStorage.getItem('isLoggedIn');
      setIsLoggedIn(authStatus === 'true');
    }, []);

      // Fetch videos from Supabase
  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('uploaded_at', { ascending: false }); // Order newest first

      if (error) {
        console.error('Error fetching videos:', error.message);
      } else {
        setVideos(data);
      }
    };

    fetchVideos();
  }, []);



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
      {isLoggedIn ? <UserNavbar /> : <Navbar />}
      <div className='home'>
        <div className='desk-menu'>
          <div className='desktop-side'>
            <Menu />
          </div>
        </div>

        <div className='page-wrapper'>
          <div className='home-container'>
         
          {currentVideos.map((videos, index) => (
  <div className='image' key={index}>
    <Link to={`/ViewVideos/${videos.id}`}>
      <video
        src={videos.video_url}
        muted
        playsInline
        preload="metadata"
        className="video-thumb"
        onMouseOver={e => e.target.play()}
        onMouseOut={e => e.target.pause()}
      ></video>
      <span>{videos.title}</span>
      <p>
        {videos.duration} &nbsp; - &nbsp;
        <img className='eye' src={eye} alt='view count' />
        {videos.views}
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

export default BestVideos
