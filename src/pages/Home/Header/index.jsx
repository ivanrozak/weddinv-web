import React from 'react'
import './index.scss'

function Header() {
  return (
    <div class='header-3-2 poppins container-xxl mx-auto p-0 position-relative'>
      <div className='mx-auto d-flex flex-lg-row flex-column hero'>
        <div className='left-column flex-lg-grow-1 d-flex flex-column align-items-lg-start text-lg-start align-items-center text-center'>
          <h1 className='title-text-big'>
            <div style={{ color: '#FF7468' }}>Koendang.in</div> 
            
            Digital Invitation
          </h1>
          <p className='text-caption'>
            Sebarkan undangan pernikahan hanya dalam genggaman{' '} 
            <br className='d-sm-block d-none' />
            tanpa batas waktu dan ruang
          </p>
          <div className='d-flex flex-sm-row flex-column align-items-center mx-auto mx-lg-0 justify-content-center gap-3'>
            <button className='btn btn-get text-white d-inline-flex'>
              Order Now
            </button>
            <button className='btn btn-outline'>
              <div className='d-flex align-items-center'>
                <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                Chat Whatsapp
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
  
  )
}

export default Header
