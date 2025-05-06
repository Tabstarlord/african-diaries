import { useEffect, useState } from 'react';
import supabase from '../supabaseClient';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar'
import UserNavbar from '../Components/UserNavbar'
import { useAuth } from '../Components/AuthContext';
import eye from '../Assets/eye.png'
import Menu from '../Components/Menu'
import Footer from '../Components/Footer'
import Foot from '../Components/Foot'

function NewestVideos() {
  const [videos, setVideos] = useState([]);
  const { user } = useAuth();
        const [currentPage, setCurrentPage] = useState(1);
            // Pagination config
           const videosPerPage = 50;
  

  useEffect(() => {
    const fetchNewestVideos = async () => {
      const { data, error } = await supabase
        .from('videos')
        .select('*')
        .order('created_at', { ascending: false }) // newest first
        .limit(20); // optional: only get latest 20

      if (error) {
        console.error('Error fetching newest videos:', error);
      } else {
        setVideos(data);
      }
    };

    fetchNewestVideos();
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
   {user ? <UserNavbar /> : <Navbar />}

      <div className='home'>
        <div className='desk-menu'>
          <div className='desktop-side'>
            <Menu />
          </div>
        </div>

        <div className='page-wrapper'>
          <div className='home-container'>
          <h2 style={{textAlign: 'left', paddingLeft: '1rem'}} >Newest Videos</h2>
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
   </>
  );
}

export default NewestVideos;
