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
import LikedClips from './User Dashboard/LikedClips';
import Notification from './User Dashboard/Notification';
import NoVideos from './User Dashboard/NoVideos';
import Setting from './User Dashboard/Setting';
import NoNotification from './User Dashboard/NoNotification';
import UserNavbar from './User Dashboard/UserNavbar';
import Amatuer from './Categories/Amatuer'
import Anal from './Categories/Anal'
import BDSM from './Categories/BDSM'
import Bi from './Categories/Bi'
import BigAss from './Categories/BigAss'
import BigDick from './Categories/BigDick'
import BigTits from './Categories/BigTits'
import Blonde from './Categories/Blonde'
import BlowJob from './Categories/BlowJob'
import Bond from './Categories/Bond'
import Cougar from './Categories/Cougar'
import Creampie from './Categories/Creampie'
import Cumshot from './Categories/Cumshot'
import Gangbang from './Categories/Gangbang'
import Gay from './Categories/Gay'
import Hardcore from './Categories/Hardcore'
import Lesbian from './Categories/Lesbian'
import Milf from './Categories/Milf'
import Orgy from './Categories/Orgy'
import Solo from './Categories/Solo'
import Squirting from './Categories/Squirting'
import Straight from './Categories/Straight'
import Student from './Categories/Student'
import Teacher from './Categories/Teacher'
import Wanking from './Categories/Wanking';
import Trans from './Categories/Trans';


import Dashboard from './User Dashboard/Dashboard';



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
          <Route path='/Novideos' 
          element={ <NoVideos /> } />
          <Route path='/Setting' 
          element={ <Setting /> } />
          <Route path='/NoNotification' 
          element={ <NoNotification /> } />
          <Route path='/UserNavbar' 
          element={ <UserNavbar /> } />

          <Route path='/Amatuer' 
          element={ <Amatuer /> } />
          <Route path='/Anal' 
          element={ <Anal /> } />
          <Route path='/BDSM' 
          element={ <BDSM /> } />
          <Route path='/Bi' 
          element={ <Bi /> } />
          <Route path='/BigAss' 
          element={ <BigAss /> } />
          <Route path='/BigDick' 
          element={ <BigDick /> } />
          <Route path='/BigTits' 
          element={ <BigTits /> } />
          <Route path='/Blonde' 
          element={ <Blonde /> } />
          <Route path='/BlowJob' 
          element={ <BlowJob /> } />
          <Route path='/Bond' 
          element={ <Bond /> } />
          <Route path='/Cougar' 
          element={ <Cougar /> } />
          <Route path='/Creampie' 
          element={ <Creampie /> } />
          <Route path='/Cumshot' 
          element={ <Cumshot /> } />
          <Route path='/Gangbang' 
          element={ <Gangbang /> } />
          <Route path='/Gay' 
          element={ <Gay /> } />
          <Route path='/Hardcore' 
          element={ <Hardcore /> } />
          <Route path='/Lesbian' 
          element={ <Lesbian /> } />
          <Route path='/Milf' 
          element={ <Milf /> } />
          <Route path='/Orgy' 
          element={ <Orgy /> } />
          <Route path='/Solo' 
          element={ <Solo /> } />
          <Route path='/Squirting' 
          element={ <Squirting /> } />
          <Route path='/Straight' 
          element={ <Straight /> } />
          <Route path='/Student' 
          element={ <Student /> } />
          <Route path='/Teacher' 
          element={ <Teacher /> } />
          <Route path='/Wanking' 
          element={ <Wanking /> } />
           <Route path='/Trans' 
          element={ <Trans /> } />

          
<Route path='/Dashboard' 
          element={ <Dashboard /> } />



        </Routes>
      
      
    </div>
      
    </>
  );
}

export default App;
