import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Home.css'
import supabase  from '../supabaseClient'
import { useAuth } from '../Components/AuthContext'
import eye from '../Assets/eye.png'
import Navbar from '../Components/Navbar'
import UserNavbar from '../Components/UserNavbar'

import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import Foot from '../Components/Foot'





function WatchHistory() {
   const [currentPage, setCurrentPage] = useState(1);
   const [history, setHistory] = useState([]);
   const { user } = useAuth();
     // Pagination config
    const videosPerPage = 50;
  

      // Fetch videos from Supabase
      useEffect(() => {
        const fetchWatchHistory = async () => {
          if (!user) return;
    
          const { data, error } = await supabase
            .from('watched_videos')
            .select('video_id, videos(title, thumbnail, duration, views)')
            .eq('user_id', user.id)
            .order('watched_at', { ascending: false });
    
          if (error) {
            console.error('Error fetching watch history:', error);
          } else {
            const videos = data.map(item => ({
              id: item.video_id,
              ...item.videos,
            }));
            setHistory(videos);
          }
        };
    
        fetchWatchHistory();
      }, [user]);


  const totalPages = Math.ceil(history.length / videosPerPage);
  // Calculate current page videos
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = history.slice(indexOfFirstVideo, indexOfLastVideo);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <>
     {user ? <UserNavbar /> : <Navbar />}

      <div className='home'>
        <div className='desk-menu'>
          <div className='desktop-side'>
            <Menu />
          </div>
        </div>

        
        <div className='page-wrapper'>
          <div className='home-container'>
            {history.length === 0 ? (
              <p>No watch history yet.</p>
            ) : (
              currentVideos.map((video, index) => (
                <div className='image' key={index}>
                  <Link to={`/ViewVideos/${video.id}`}>
                  <img src={video.thumbnail_url} alt={video.title} />
                  <span>{video.title}</span>
                  <p>{video.duration} &nbsp; - &nbsp;
                    <img className='eye' src={eye} alt='views' /> {video.views}
                  </p>
                  </Link>
                </div>
              ) )
            ) }
          
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

export default WatchHistory
