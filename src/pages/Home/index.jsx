import React from 'react';
import './index.scss';
// import OffCanvas from '../../components/Navbar/Offcanvas';

function Home() {
  return (
    <div class='header-3-2 poppins container-xxl mx-auto p-0 position-relative'>
      <div className='mx-auto d-flex flex-lg-row flex-column hero'>
        <div className='left-column flex-lg-grow-1 d-flex flex-column align-items-lg-start text-lg-start align-items-center text-center'>
          <h1 className='title-text-big'>
            The New Way
            <br className='d-lg-block d-none' />
            <span style={{ color: '#FF7468' }}>Learn Skills</span> From
            <br className='d-lg-block d-none' />
            Our Best Mentor
          </h1>
          <p className='text-caption'>
            Hard to find a good mentor according to your wishes?
            <br className='d-sm-block d-none' />
            Don't worry because we are here to help you
          </p>
          <div className='d-flex flex-sm-row flex-column align-items-center mx-auto mx-lg-0 justify-content-center gap-3'>
            <button className='btn btn-get text-white d-inline-flex'>
              Get Started
            </button>
            <button className='btn btn-outline'>
              <div className='d-flex align-items-center'>
                <svg
                  className='me-2'
                  width='27'
                  height='27'
                  viewBox='0 0 27 27'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.1793 13.7935L11.9166 10.9515V16.6355L16.1793 13.7935ZM18.1673 14.0708L11.1013 18.7815C11.0511 18.8149 10.9928 18.834 10.9326 18.8369C10.8723 18.8398 10.8125 18.8263 10.7593 18.7978C10.7062 18.7694 10.6617 18.727 10.6307 18.6753C10.5997 18.6236 10.5833 18.5644 10.5833 18.5041V9.0828C10.5833 9.0225 10.5997 8.96334 10.6307 8.91162C10.6617 8.8599 10.7062 8.81756 10.7593 8.7891C10.8125 8.76064 10.8723 8.74713 10.9326 8.75001C10.9928 8.7529 11.0511 8.77206 11.1013 8.80546L18.1673 13.5161C18.213 13.5466 18.2504 13.5878 18.2763 13.6362C18.3022 13.6846 18.3157 13.7386 18.3157 13.7935C18.3157 13.8483 18.3022 13.9024 18.2763 13.9507C18.2504 13.9991 18.213 14.0404 18.1673 14.0708Z'
                    fill='#5D6E86'
                  />
                  <rect
                    x='0.75'
                    y='1.29346'
                    width='25'
                    height='25'
                    rx='12.5'
                    stroke='#5D6E86'
                  />
                </svg>
                Watch the video
              </div>
            </button>
          </div>
        </div>

        <div className='right-column d-flex justify-content-center justify-content-lg-start text-center pe-0'>
          <img
            className='position-absolute d-lg-block d-none hero-right'
            src='http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header3/Header-3-2.png'
            alt=''
          />
          <div className='d-flex align-items-end card-outer'>
            <div className='mx-auto d-flex flex-wrap align-items-center'>
              <div className='card border-0 position-relative d-flex flex-column'>
                <div
                  className='d-flex align-items-center'
                  style={{ marginBottom: '1.25rem' }}
                >
                  <div>
                    <img
                      style={{ marginRight: '1rem' }}
                      src='http://api.elements.buildwithangga.com/storage/files/2/assets/Header/Header3/Header-3-3.png'
                      alt=''
                    />
                  </div>
                  <div className='text-start'>
                    <p className='card-name'>Felix Potah</p>
                    <p className='card-job'>Pro Mentor</p>
                  </div>
                </div>
                <div
                  className='row text-start'
                  style={{ marginBottom: '1.25rem' }}
                >
                  <div className='col-6'>
                    <p className='card-price-left'>64,100</p>
                    <p className='card-caption'>Followers</p>
                  </div>
                  <div className='col-6 ps-0'>
                    <p className='card-price-right'>106</p>
                    <p className='card-caption'>Reviews</p>
                  </div>
                </div>
                <button className='btn btn-hire text-white'>
                  <div className='test d-none'>show</div>
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
