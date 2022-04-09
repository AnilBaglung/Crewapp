import React from 'react';
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import About from './About/About';
import Team from './Team/Team';
import Service from './Service/Service';
import Features from './Features/Features';
import Testimonial from './Testimonials/Testimonial';
import Pricing from './Pricing/Pricing';
import Press from './Press/Press';
import Contact from './Contact/Contactpage';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <>
        <Navbar/><br/>
        <Main/><br/>
        <About/><br/>
        <Team/><br/>
        <Service/><br/>
        <Features/><br/>
        <Testimonial/><br/>
        <Pricing/><br/>
        <Press/><br/>
        <Footer/><br/>
    </>
  )
}

export default Home