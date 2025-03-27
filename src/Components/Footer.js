import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles/Footer.css'
import Logo from '../Assets/logo.png'

function Footer() {
  return (
    <div className='footer'>
      <p className='foot'> <Link to='/'><img src={Logo} alt='Logo' /></Link> is a free website for porn videos.   Every video we upload, is shown on our indexes more or less three days after uploading. About 5 to 30 adult videos are uploaded each day (note that gay and Lesbian videos are filtered from this page, but shown in their respective categories). Our pages (everything that you see hosted on African Diaries) contain absolutely no spyware/adware/trojan/etc. There is no charge (no hidden charges either) for viewing our videos. Parents, you can easily block access to this site. </p>
      
      

    </div>
  )
}

export default Footer