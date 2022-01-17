import React,{ useState } from 'react'
import { Container, Button } from 'react-bootstrap';
import ModalComponent from './ModalComponent';

export default function ModalButton() {
  
    const [modalShow, setModalShow] = useState(false);

    return (
        <Container>
            <Button variant='outline-warning' onClick={() => setModalShow(true)}>
             Book Online
            </Button>
    
          <ModalComponent
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </Container>
      );
}
