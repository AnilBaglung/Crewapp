import React from 'react';
import './Press.css';

const Press = () => {
  return (
    <>
        <section className='press-release' id='press'>
          <h5 className='team-text'>PRESS RELEASE</h5>
          <div className='horizontal-line'></div>
          <p className='title'>Far far away, behind the word mountains, far from the countries <br></br> Vokalia and Consonantia, there live the blind texts.</p>
          <div className='press-row'>

            <div className='press-column'>
              <div className='press-text'>
                <h4>Simplicity</h4>
                <div className='press-horizontal'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eius quos similique suscipit dolorem cumque vitae qui molestias illo accusantium...</p>
                <button className='button-p r' id='btnn'>LEARN MORE</button>
              </div>
              <img src={require('../static/girl.jpg')} alt=''></img>
            </div>

            <div className='press-column'>
              <div className='press-text'>
                <h4>Versatile</h4>
                <div className='press-horizontal'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eius quos similique suscipit dolorem cumque vitae qui molestias illo accusantium...</p>
                <button className='button-p r' id='btnn'>LEARN MORE</button>
              </div>
              <img src={require('../static/img_8.jpg')} alt=''></img>
            </div>

            <div className='press-column'>
              <div className='press-text'>
                <h4>Aesthetic</h4>
                <div className='press-horizontal'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eius quos similique suscipit dolorem cumque vitae qui molestias illo accusantium...</p>
                <button className='button-p r' id='btnn'>LEARN MORE</button>
              </div>
              <img src={require('../static/img_9.jpg')} alt=''></img>
            </div>

            <div className='press-column'>
              <div className='press-text'>
                <h4>Creative</h4>
                <div className='press-horizontal'></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis eius quos similique suscipit dolorem cumque vitae qui molestias illo accusantium...</p>
                <button className='button-p r' id='btnn'>LEARN MORE</button>
              </div>
              <img src={require('../static/img_10.jpg')} alt=''></img>
            </div>

          </div>
        
        
        </section>
    </>
  )
}

export default Press