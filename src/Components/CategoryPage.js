import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import UserNavbar from '../Components/UserNavbar'
import eye from '../Assets/eye.png'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import Foot from '../Components/Foot'

function CategoryPage() {
  const { category, tag } = useParams();
  const [videos, setVideos] = useState([]);
     const [isLoggedIn, setIsLoggedIn] = useState(false);
      const [currentPage, setCurrentPage] = useState(1);
          // Pagination config
         const videosPerPage = 50;

          useEffect(() => {
               const authStatus = localStorage.getItem('isLoggedIn');
               setIsLoggedIn(authStatus === 'true');
             }, []);


             useEffect(() => {
              const fetchVideos = async () => {
                let data, error;
            
                if (tag) {
                  ({ data, error } = await supabase
                    .from('videos')
                    .select('*')
                    .contains('tags', [tag]));
                } else if (category) {
                  ({ data, error } = await supabase
                    .from('videos')
                    .select('*')
                    .eq('category', category)
                    .order('created_at', { ascending: false }));
                } else {
                  ({ data, error } = await supabase
                    .from('videos')
                    .select('*')
                    .order('uploaded_at', { ascending: false }));
                }
            
                if (error) {
                  console.error('Error fetching videos:', error.message);
                  setVideos([]); // prevent null
                } else {
                  setVideos(data || []);
                }
              };
            
              fetchVideos();
            }, [tag, category]);
            

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

          {/*<div className='home-container'>
          <h2>{tag}</h2>
         {currentVideos.map((videos, index) => (
          <div className='image' key={index}>
            <Link to={`/ViewVideos/${videos.id}`}>
              <video
                src={videos.thumbnail_url}
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
        
          </div>*/}

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

export default CategoryPage;
