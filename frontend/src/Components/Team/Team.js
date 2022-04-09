import React from 'react';
import './Team.css';

const Team = () => {
  return (
    <>
      <section className='Team' id='team'>
        <h1 className='team-text'>TEAM</h1>
        <div className='horizontal-line'></div>
        <div className='team-row'>
          <div className='team-column'>
            <img src={require('../static/person.jpg')} alt='' />
            <h4>John Doe</h4>
            <h5>WEB DEVELOPER</h5>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
            <div className='icons'>
              <i  className="fa-brands fa-facebook-f"></i>
              <i  className="fa-brands fa-twitter"></i>
              <i  className="fa-brands fa-instagram"></i>
              <i  className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          <div className='team-column'>
            <img src={require('../static/person1.jpg')} alt='' />
            <h4>Rob Smith</h4>
            <h5>WEB DESIGNER</h5>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
            <div className='icons'>
              <i  className="fa-brands fa-facebook-f"></i>
              <i  className="fa-brands fa-twitter"></i>
              <i  className="fa-brands fa-instagram"></i>
              <i  className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
          <div className='team-column'>
            <img src={require('../static/person2.jpg')} alt='' />
            <h4>Frank Hehn</h4>
            <h5>PHOTOGRAPHER</h5>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.</p>
            <div className='icons'>
              <i  className="fa-brands fa-facebook-f"></i>
              <i  className="fa-brands fa-twitter"></i>
              <i  className="fa-brands fa-instagram"></i>
              <i  className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>


        </div>

      </section>
    </>
  )
}

export default Team