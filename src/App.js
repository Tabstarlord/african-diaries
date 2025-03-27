import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import ViewVideos from './Pages/ViewVideos '
import Navbar from './Components/Navbar'
import LikedVideos from './Pages/LikedVideos'
import WatchHistory from './Pages/WatchHistory'
import BestVideos from './Pages/BestVideos';
function App() {
  return (

    <>
      <div className="App">
        <Navbar />


        <Routes>
          <Route path='/' element={ <Home />} />
          <Route path='/ViewVideos' element={ <ViewVideos /> } />
          <Route path='/LikedVideos' element={ <LikedVideos /> } />
          <Route path='/WatchHistory' element={ <WatchHistory /> } />
          <Route path='/BestVideos' element={ <BestVideos /> } />
        </Routes>
      
      
    </div>
      
    </>
  );
}

export default App;
