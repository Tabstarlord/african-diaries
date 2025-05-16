import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet"
import { Link } from 'react-router-dom';
import '../Styles/Home.css';
import supabase from '../supabaseClient';
import eye from '../Assets/eye.png';
import Navbar from '../Components/Navbar';
import UserNavbar from '../Components/UserNavbar';
import { useAuth } from '../Components/AuthContext';
import Menu from '../Components/Menu';
import Footer from '../Components/Footer';
import Foot from '../Components/Foot';

function Home() {
  const { user } = useAuth(); // Supabase Auth
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const videosPerPage = 50;

  // Fetch videos once
  useEffect(() => {
    const fetchVideos = async () => {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('uploaded_at', { ascending: false });

      if (error) {
        console.error('Error fetching videos:', error.message);
      } else {
        setVideos(data);
      }
    };

    fetchVideos();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(videos.length / videosPerPage);
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>

    <Helmet>
        <title>African Diaries – Discover Stories and Culture</title>
        <meta name="description" content="Explore African culture, stories, and heritage through videos and articles." />
        <meta name="keywords" content="Africa, culture, stories, adult, pornography, heritage, videos" />
        <meta property="og:title" content="African Diaries" />
        <meta property="og:description" content="Explore African culture, stories, and heritage." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://african-diaries.com/" />
        <meta property="og:image" content="https://african-diaries.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* Conditionally render navbar based on login status */}
      {user ? <UserNavbar /> : <Navbar />}

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
                <Link to={`/ViewVideos/${video.id}`}>
                  <video
                    src={video.video_url}
                    muted
                    playsInline
                    preload="metadata"
                    className="video-thumb"
                    onMouseOver={async e => {
                      try {
                        await e.target.play();
                      } catch (err) {
                        console.error('Play interrupted:', err);
                      }
                    }}
                    onMouseOut={e => {
                      e.target.pause();
                    }}
                  ></video>
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
  );
}

export default Home;
