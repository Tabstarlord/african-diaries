import React from 'react'
import '../Styles/Search.css'
import searchBar from '../Assets/search.png'



function Search () {
  return (
    <>
    <div className='mobile-search'>
    <div className='searchForm'>
      <form className='mobile-navbar-search' role='search'>
      <img className='mobile-search-btn' src={searchBar} alt='search' />
        <input className='mobile-navbar-input' type='search' placeholder='Search for...' aria-label='Search' />
        
      </form>
    </div>
    </div>

    <div className='desktop-search'>
    <div className='searchForm'>
      <form className='desktop-navbar-search' role='search'>
        <input className='desktop-navbar-input' type='search' placeholder='Search for....' aria-label='Search' />
        <img className='desktop-search-btn' src={searchBar} alt='search' />
      </form>
    </div>
    </div>
    </>
  )
}

export default Search