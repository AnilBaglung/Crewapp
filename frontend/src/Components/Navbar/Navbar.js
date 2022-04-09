import React, { useState } from 'react'
import {Link} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleMenu =()=>setClick(!click);
  const closeMobileMenu =()=>setClick(false);
  return (
    <>
    <section id='nav'>
    <nav className='navbar'>
    <div className='header'>
      <div className='navlogo'>
      <Link to='nav'  smooth='true' duration={3000}><h1>Crew</h1></Link>
      </div>

      <div className='mobicon' onClick={handleMenu}>
      <i className={click? 'fa-solid fa-xmark': 'fa-solid fa-bars'}></i>
    </div>
    <ul className={click ? 'nav-menu active':'nav-menu'} >
      <li onClick={closeMobileMenu}><Link to='about'  smooth='true' duration={2000} onClick={closeMobileMenu}>About</Link></li>
      <li onClick={closeMobileMenu}><Link to='services'  smooth='true' duration={2000} onClick={closeMobileMenu}>Services</Link></li>
      <li onClick={closeMobileMenu}><Link to='features'  smooth='true' duration={2000} onClick={closeMobileMenu}>Features</Link></li>
      <li onClick={closeMobileMenu}><Link to='pricing'  smooth='true' duration={2000} onClick={closeMobileMenu}>Pricing</Link></li>
      <li onClick={closeMobileMenu}><Link to='press'  smooth='true' duration={2000} onClick={closeMobileMenu}>Press</Link></li>
      <li onClick={closeMobileMenu}><LinkR to='/contact'  smooth='true' duration={3000} onClick={closeMobileMenu} className='contact-nav'>Contact</LinkR></li>
    </ul>

      </div>

    </nav>
    </section>
    </>
  )
}

export default Navbar