import React from 'react'
import Category from '../Assets/categories.png'
import arrow from '../Assets/arrow-down.png'
import '../Styles/Categories.css'

function Categories({ onClick }) {
  return (
    <>
      <div className='categories-wrapper' onClick={onClick}>
      <img src={Category} alt='categories' />
      <span>Categories</span>
      <img src={arrow} alt='arrow' />
    </div>
    </>
    
  );
}

export default Categories