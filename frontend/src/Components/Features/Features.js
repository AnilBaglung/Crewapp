import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <>
        <section className='feautures' id='features'>
          <h5 className='team-text'>FEATURES</h5>
          <div className='horizontal-line'></div>
          <p className='title'>Far far away, behind the word mountains, far from the countries <br></br> Vokalia and Consonantia, there live the blind texts.</p>
          <div className='sub-feature'>
          
          <div className='features-row'>
            <div className='features-column'>
              <div className='serv-icon'>
                <img src={require('../static/gift.png')} alt=''></img>
              </div>
              <div className='service-text'>
                <h5>100% Free</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className='features-column'>
              <div className='serv-icon'>
                <img src={require('../static/eye1.png')} alt=''></img>
              </div>
              <div className='service-text'>
                <h5>Ratina Ready</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className='features-column'>
              <div className='serv-icon'>
                <img src={require('../static/mobile.png')} alt=''></img>
              </div>
              <div className='service-text'>
                <h5>Fully Responsive</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className='features-column'>
              <div className='serv-icon'>
                <img src={require('../static/clock.jpg')} alt=''></img>
              </div>
              <div className='service-text'>
                <h5>Lightweight</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className='features-column'>
              <div className='serv-icon'>
                <img src={require('../static/love.jpg')} alt=''></img>
              </div>
              <div className='service-text'>
                <h5>Made with Love</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>
            <div className='features-column'>
              <div className='serv-icon'>
                <img src={require('../static/umbrella.jpg')} alt=''></img>
              </div>
              <div className='service-text'>
                <h5>Eco friendly</h5>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              </div>
            </div>

          </div>
          </div>
          <div className='learn'>
          <button className='button'>LEARN MORE</button>
          </div>
        </section>
    </>
  )
}

export default Features