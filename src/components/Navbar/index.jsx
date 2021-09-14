import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../assets/img/logo.png';

function OffCanvasComponent() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant='light'
        className='navbar-toggler border-0'
        onClick={handleShow}
      >
        <span className='navbar-toggler-icon'></span>
      </Button>
      <Offcanvas
        className='w-100'
        show={show}
        onHide={handleClose}
        placement='end'
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Some text as placeholder</Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

function Navbar() {
  const [selected, setSelected] = useState(1);

  return (
    <>
      <div className='header-3-2 container-xxl mx-auto p-0 position-relative poppins'>
        <nav className='navbar navbar-expand-lg navbar-light'>
          <Link
            className='d-flex align-items-center'
            style={{ textDecoration: 'none' }}
            to='#'
          >
            <img
              style={{ marginRight: '0.75rem', width: '45px' }}
              src={Logo}
              alt=''
            />
            <div style={{ color: '#ff7468', fontWeight: 'bold' }}>
              Koendang.in
            </div>
          </Link>

          <OffCanvasComponent />

          <div className='collapse navbar-collapse' id='navbarTogglerDemo'>
            <ul className='navbar-nav mx-auto mt-2 mt-lg-0'>
              <li
                className={
                  selected === 1
                    ? 'nav-item active position-relative'
                    : 'nav-item position-relative'
                }
                onClick={() => setSelected(1)}
              >
                <Link
                  className='nav-link'
                  style={{ textDecoration: 'none', color: '#243142' }}
                  to='/'
                >
                  Home
                </Link>
              </li>
              <li
                className={
                  selected === 2
                    ? 'nav-item active position-relative'
                    : 'nav-item position-relative'
                }
                onClick={() => setSelected(2)}
              >
                <Link
                  className='nav-link'
                  style={{ textDecoration: 'none', color: '#243142' }}
                  to='/order'
                >
                  How to order
                </Link>
              </li>
              <li
                className={
                  selected === 3
                    ? 'nav-item active position-relative'
                    : 'nav-item position-relative'
                }
                onClick={() => setSelected(3)}
              >
                <Link
                  className='nav-link'
                  style={{ textDecoration: 'none', color: '#243142' }}
                  to='/themes'
                >
                  Themes
                </Link>
              </li>
              <li
                className={
                  selected === 4
                    ? 'nav-item active position-relative'
                    : 'nav-item position-relative'
                }
                onClick={() => setSelected(4)}
              >
                <Link
                  className='nav-link'
                  style={{ textDecoration: 'none', color: '#243142' }}
                  to='/pricing'
                >
                  Pricing
                </Link>
              </li>
              <li
                className={
                  selected === 5
                    ? 'nav-item active position-relative'
                    : 'nav-item position-relative'
                }
                onClick={() => setSelected(5)}
              >
                <Link
                  className='nav-link'
                  style={{ textDecoration: 'none', color: '#243142' }}
                  to='/testimoni'
                >
                  Testimoni
                </Link>
              </li>
            </ul>
            {/* <button className='btn btn-default btn-no-fill'>Sign In</button> */}
            <button className='btn btn-fill text-white'>Register</button>
          </div>
        </nav>
        <div className='hr'>
          <hr
            style={{
              borderColor: '#F4F4F4',
              backgroundColor: '#F4F4F4',
              opacity: 1,
              margin: 0,
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
