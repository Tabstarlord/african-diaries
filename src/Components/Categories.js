import React from 'react'
import Category from '../Assets/categories.png'
import arrow from '../Assets/arrow-down.png'
import '../Styles/Categories.css'

function Categories(props) {
  return (
    <>
    <div className='cat' onClick={props.onClick}> <img src={Category} alt='jpg' />
      <span>Categories</span>
      <img src={arrow} alt='jpg' />
    </div>


    <div className='deskcat'><img src={Category} alt='jpg' />
      <span>Categories</span>
      <img className='arrow' src={arrow} alt='jpg' />
    </div>
    
    </>
    
  );
}

export default Categories