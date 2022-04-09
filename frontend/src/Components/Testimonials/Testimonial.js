import React from 'react';
import './Testimonials.css'

const Testimonial = () => {
  return (
    <>
      <section className='testimonials'>
        <h5 className='team-text' id='textss'>TESTIMONIALS</h5>
        <div className='horizontal-line'></div>
        <p className='test'>Far far away, behind the word mountains, far from the countries <br></br> Vokalia and Consonantia, there live the blind texts.</p>

        <div className='testmonials-row'>
          <div className='testimonials-column'>
            <img src={require('../static/quote.png')} alt=''></img>
            <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
            <img src={require('../static/arrow.png')} alt=''></img>
            <h2>John Doe, CEO <span>FREEHTML5.co</span></h2>
            <small>Creative Director</small>
          </div>
          <div className='testimonials-column'>
            <img src={require('../static/quote.png')} alt=''></img>
            <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
            <img src={require('../static/arrow.png')} alt=''></img>
            <h2>John Doe, CEO <span>FREEHTML5.co</span></h2>
            <small>Creative Director</small>
          </div>
          <div className='testimonials-column'>
            <img src={require('../static/quote.png')} alt=''></img>
            <p>“Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.”</p>
            <img src={require('../static/arrow.png')} alt=''></img>
            <h2>John Doe, CEO <span>FREEHTML5.co</span></h2>
            <small>Creative Director</small>
          </div>

        </div>


      </section>
      
    </>
  )
}

export default Testimonial