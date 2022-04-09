import React from 'react';
import './Pricing.css';

const Pricing = () => {
  return (
    <>
        <section className='pricing' id='pricing'>
          <h5 className='team-text'>PRICING</h5>
          <div className='horizontal-line'></div>
          <p className='title'>Far far away, behind the word mountains, far from the countries <br></br> Vokalia and Consonantia, there live the blind texts.</p>

          <div className='price-row'>
            <div className='price-column'>
              <div>
              <h6 className='special'>STARTER</h6>
              <h3>$7 <small>/mo</small></h3>
              <p>Basic customer support for</p>
              <p>small business</p>
              </div>
              <div className='line'></div>
              <div>
              <p>10 Projects</p>
              <p>20 Pages</p>
              <p>20 Emails</p>
              <p>100 Images</p>
              </div>
              <button className='button-p'>GET STARTED</button>

            </div>
            <div className='price-column'>
              <div>
              <h6 className='special'>REGULAR</h6>
              <h3>$19 <small>/mo</small></h3>
              <p>Basic customer support for</p>
              <p>small business</p>
              </div>
              <div className='line'></div>
              <div>
              <p>15 Projects</p>
              <p>40 Pages</p>
              <p>40 Emails</p>
              <p>200 Images</p>
              </div>
              <button className='button-p'>GET STARTED</button>

            </div>
            <div className='price-column third'>
              <div>
              <h4 className='best'>Best value</h4>
              <h6 className='special'>PLUS</h6>
              <h3>$79 <small>/mo</small></h3>
              <p>Basic customer support for</p>
              <p>small business</p>
              </div>
              <div className='line'></div>
              <div>
              <p>Unlimitted Projects</p>
              <p>100 Pages</p>
              <p>100 Emails</p>
              <p>700 Images</p>
              </div>
              <button className='button-p r'>GET STARTED</button>

            </div>
            <div className='price-column'>
              <div>
              <h6 className='special'>ENTERPRISE</h6>
              <h3>$125 <small>/mo</small></h3>
              <p>Basic customer support for</p>
              <p>small business</p>
              </div>
              <div className='line'></div>
              <div>
              <p>10 Projects</p>
              <p>20 Pages</p>
              <p>20 Emails</p>
              <p>100 Images</p>
              </div>
              <button className='button-p'>GET STARTED</button>

            </div>

          </div>

        </section>
    </>
  )
}

export default Pricing