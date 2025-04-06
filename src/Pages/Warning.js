import React from 'react'
import { Link } from 'react-router-dom'

import '../Styles/Warning.css'


function Warning() {
 

  return (
    <>
      <div className='warn'>
      <div className='warn1'>
      <div className='warn2'>
        <div className='warn-1'>
        <div className='warn3'>
        <h1 className='go'>African diaries</h1>
        <h2 className='go2'>This is an adult only website!</h2>
        </div>

        <div className='warn4'>
          <p className='go3'>
          WARNING: EXPLICIT CONTENT AHEAD
          </p>
          <p className='go4'>This website contains adult-oriented content that is intended only for individuals who are 18 years of age or older (or the legal age of majority in your jurisdiction). By entering, you confirm that:</p>
        </div>

        <div className='warn5'>
          <form>
            <p>
            <input  type='checkbox'
             />
            You are at least 18 years old (or the legal age in your area).
            </p>
            
            <p><input type='checkbox' 
             />
            You will not share or distribute this content to minors.
            </p>
            <p><input type='checkbox' 
             />
            You voluntarily choose to access this website.
            </p>
            
          </form>
        </div>
        <div className='warn6'>
          <Link to='/Home'><button className='go5'>I am 18 or older - Enter</button></Link>

          <Link to=''><button className='go6'>I am under 18 - Exit</button></Link>
        </div>
        
      </div>
      </div>
      </div>

    </div>
    
    
    </>
    
  )
}

export default Warning