import React from 'react';
import './Footer.css';
import {Link} from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll';

const Footer = () => {
  const scrollToTop=()=>{
    scroll.scrollToTop();
  }
  return (
    <>
        <div className='footer'>
          <p>© 2015 Free <span className='copyrightss'><Link to='nav' smooth='true' duration={3000}>Crew</Link></span>. All Rights Reserved.</p>
          <p>Free HTML5 Template by <span className='copyrightss'><Link to='/'>FREEHTML5.co</Link></span> | Images by <span className='copyrightss'><Link to='/'>Pexels</Link></span> & <span className='copyrightss'><Link to='/'>Unsplash</Link></span></p>
        </div>
        <div className='footer-icon'>
        <i className="fa-brands fa-twitter"></i>
        <i className="fa-brands fa-facebook-f"></i>
        <i className="fa-brands fa-youtube"></i>
        <i className="fa-brands fa-pinterest"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-linkedin-in"></i>
        <i className="fa-brands fa-whatsapp"></i>
        </div>
        <div className='img-arrow'>
        <img src={require('../static/up.png')} onClick={scrollToTop} smooth='true' duration={2000} alt=''></img>
        </div>
    </>
  )
}

export default Footer