import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Button } from 'react-bootstrap';

function OffCanvasExample({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow} className='me-2'>
        {name}
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
        <div>Halloo</div>
      </Offcanvas>
    </>
  );
}

function OffCanvas() {
  return (
    <>
      <div>Header</div>
      {['Halo'].map((placement, idx) => (
        <OffCanvasExample key={idx} name={placement} />
      ))}
    </>
  );
}

// render(<Example />);

export default OffCanvas;
