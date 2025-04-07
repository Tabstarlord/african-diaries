import React from 'react'
import Vers from '../Assets/version.png'
import arrow from '../Assets/arrow-down.png'
import '../Styles/Version.css'


function Version(props) {
  return (
    <>

    <div className='ver' onClick={props.onClick}> <img src={Vers} alt='jpg' />
      <span>Versions:</span>
      <img src={arrow} alt='jpg' />
    </div>
    

    <div className='deskver'> <img src={Vers} alt='jpg' />
      <span>Versions:</span>
      <img className='verarrow' src={arrow} alt='jpg' />
    </div>
    </>
    
  );
}

export default Version