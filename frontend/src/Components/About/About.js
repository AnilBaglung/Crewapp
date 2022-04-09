import React from 'react';
import {Link } from 'react-scroll';
import './About.css'

const About = () => {
  return (
    <>
      <section className='About-page' id='about'>
        <div className='About'>
          <h1>ABOUT US</h1>
          <div className='horizontal-line'></div>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and<br/> Consonantia, there live the blind texts.</p>

        </div>
        <div className='row'> 
          <div className='column-1'>
            <img src={require('../static/1.jpg')} alt=''/>
          </div>
          <div className='column-2'>
            <h2>How we got started</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.<br></br>
              <br/>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day.</p>
            <button className='button btn'><Link to='team' duration={2000}>MEET THE TEAM</Link></button>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default About