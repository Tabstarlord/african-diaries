import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home'
import ViewVideos from './Pages/ViewVideos '
import WatchHistory from './Pages/WatchHistory'
import Login from './Pages/Login';
import Register from './Pages/Register'
import NewestVideos from './Pages/NewestVideos'
import Warning from './Pages/Warning'
import LikedClips from './User Dashboard/LikedClips';
import Notification from './User Dashboard/Notification';
import Setting from './User Dashboard/Setting';
import ProtectedRoute from './Components/ProtectedRoute';
import Dashboard from './User Dashboard/Dashboard';
import { UserProvider } from './Components/UserContext';
import CategoryPage from './Components/CategoryPage';
import TrackUserLocation from './Components/TrackUserLocation';
import TrackUserDevice from './Components/TrackUserDevice';



function App() {
  return (

    <>
    <TrackUserLocation />
    <TrackUserDevice />
      <div className="App">

        <UserProvider>
        <Routes>
          <Route path='/' element={ <Warning /> } />
          <Route path='/Home' element={ <Home />} />
          <Route path='/ViewVideos/:id' element={ <ViewVideos /> } />
          <Route path='/category/LikedVideos' element={ <CategoryPage  /> } />
          <Route path='/WatchHistory' element={ <WatchHistory /> } />
          <Route path='/BestVideos' element={ <CategoryPage /> } />
          <Route path='/Login' element={ <Login /> } />
          <Route path='/Register' element={ <Register /> } />
          <Route path='/NewestVideos' 
          element={ <NewestVideos /> } />
          <Route path='/LikedClips' 
          element={ <LikedClips /> } />
          <Route path='/Notification' 
          element={ <Notification /> } />
          <Route path='/Setting' 
          element={ <Setting /> } />
 


          <Route path='/Amatuer' 
          element={ <CategoryPage /> } />
          <Route path='/Anal' 
          element={ <CategoryPage category='Anal' /> } />
          <Route path='/BDSM' 
          element={ <CategoryPage category='BDSM' /> } />
          <Route path='/Bi' 
          element={ <CategoryPage category='Bi' /> } />
          <Route path='/BigAss' 
          element={ <CategoryPage category='BigAss' /> } />
          <Route path='/BigDick' 
          element={ <CategoryPage category='BigDick' /> } />
          <Route path='/BigTits' 
          element={ <CategoryPage category='BigTits' /> } />
          <Route path='/Blonde' 
          element={ <CategoryPage category='Blonde' /> } />
          <Route path='/BlowJob' 
          element={ <CategoryPage category='BlowJob' /> } />
          <Route path='/Bond' 
          element={ <CategoryPage category='Bond' /> } />
          <Route path='/Cougar' 
          element={ <CategoryPage category='Cougar' /> } />
          <Route path='/Creampie' 
          element={ <CategoryPage category='Creampie' /> } />
          <Route path='/Cumshot' 
          element={ <CategoryPage category='Cumshot' /> } />
          <Route path='/Gangbang' 
          element={ <CategoryPage category='Gangbang' /> } />
          <Route path='/Gay' 
          element={ <CategoryPage category='Gay' /> } />
          <Route path='/Hardcore' 
          element={ <CategoryPage category='Hardcore' /> } />
          <Route path='/Lesbian' 
          element={ <CategoryPage category='Lesbian' /> } />
          <Route path='/Milf' 
          element={ <CategoryPage category='Milf' /> } />
          <Route path='/Orgy' 
          element={ <CategoryPage category='Orgy' /> } />
          <Route path='/Solo' 
          element={ <CategoryPage category='Solo' /> } />
          <Route path='/Squirting' 
          element={ <CategoryPage category='Squirting' /> } />
          <Route path='/Straight' 
          element={ <CategoryPage category='Straight' /> } />
          <Route path='/Student' 
          element={ <CategoryPage category='Student' /> } />
          <Route path='/Teacher' 
          element={ <CategoryPage category='Teacher' /> } />
          <Route path='/Wanking' 
          element={ <CategoryPage category='Wanking' /> } />
           <Route path='/Trans' 
          element={ <CategoryPage category='Trans' /> } />

        <Route path='/Dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
        />

        </Routes>
        </UserProvider>
      
      
    </div>
      
    </>
  );
}

export default App;
