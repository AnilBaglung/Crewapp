import React from 'react';
import {Link} from 'react-scroll';
import './Main.css'

const Main = () => {
  return (
    <>
      <section className='Main'>
        <div className='submain'>

          <div className='Main-page'>
            <div className='Text'>
              <h1>CASE STUDY TITLE</h1>
              <p>100% Free Fully Responsive HTML5 Bootstrap Template. Crafted with love by the fine follks at <Link to='/'>FREEHTML5.co</Link></p>
              <button className='button'>VIEW CASE STUDY</button>
            </div>
            <div className='image'>
            <img src={require('../static/iphone-1.png')} alt=''></img>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Main