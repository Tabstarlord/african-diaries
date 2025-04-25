import React, { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import UserNavbar from '../Components/UserNavbar'
import eye from '../Assets/eye.png'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import Foot from '../Components/Foot'

function CategoryPage({ category }) {
  const { tag } = useParams();
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
    const fetchCategoryVideos = async () => {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .eq('category', category)
        .order('created_at', { ascending: false });

      if (!error) setVideos(data);
    };

    fetchCategoryVideos();
  }, [category]);

  useEffect(() => {
    const fetchTaggedVideos = async () => {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .contains('tags', [tag]); // Works if `tags` is an array column

      if (error) {
        console.error('Error fetching videos by tag:', error);
      } else {
        setVideos(data);
      }
    };

    fetchTaggedVideos();
  }, [tag]);

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
          <h2 style={{textAlign: 'left', paddingLeft: '1rem'}}>{category}</h2>
        {currentVideos.map((video, index) => (
          <div className='image' key={index}>
            <Link to={`/ViewVideos/${video.id}`}>
              <img src={video.thumbnail_url} alt={video.title} />
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

          <div className='home-container'>
          <h2>{tag}</h2>
        {currentVideos.map((video, index) => (
          <div className='image' key={index}>
            <Link to={`/ViewVideos/${video.id}`}>
              <img src={video.thumbnail_url} alt={video.title} />
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






    {isLoggedIn ? <UserNavbar /> : <Navbar />}
        <div className='desk-menu'>
          <div className='desktop-side'>
            <Menu />
          </div>
        </div>
    </>
  )
}

export default CategoryPage;
