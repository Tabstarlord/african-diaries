import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import ViewVideos from './Pages/ViewVideos '
import LikedVideos from './Pages/LikedVideos'
import WatchHistory from './Pages/WatchHistory'
import BestVideos from './Pages/BestVideos';
import Login from './Pages/Login';
import Register from './Pages/Register'
import NewestVideos from './Pages/NewestVideos'
import Warning from './Pages/Warning'
import LikedClips from './Pages/LikedClips';
import Notification from './Pages/Notification'





function App() {
  return (

    <>
      <div className="App">


        <Routes>
          <Route path='/' element={ <Warning /> } />
          <Route path='/Home' element={ <Home />} />
          <Route path='/ViewVideos' element={ <ViewVideos /> } />
          <Route path='/LikedVideos' element={ <LikedVideos /> } />
          <Route path='/WatchHistory' element={ <WatchHistory /> } />
          <Route path='/BestVideos' element={ <BestVideos /> } />
          <Route path='/Login' element={ <Login /> } />
          <Route path='/Register' element={ <Register /> } />
          <Route path='/NewestVideos' 
          element={ <NewestVideos /> } />
          <Route path='/LikedClips' 
          element={ <LikedClips /> } />
          <Route path='/Notification' 
          element={ <Notification /> } />
          



        </Routes>
      
      
    </div>
      
    </>
  );
}

export default App;
