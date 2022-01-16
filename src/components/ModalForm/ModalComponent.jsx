import React from 'react'
import { Container, Modal, Button} from 'react-bootstrap';
import MultiForm from '../MultiForm/MultiForm';

export default function ModalComponent(props) {
    return (
       <div>
        <Container>
         <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton style={{textAlign: "center"}}>
             Book Your Appointment
          </Modal.Header>
          <Modal.Body>
              <MultiForm />
          </Modal.Body>

          {/* <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer> */}
          
         </Modal>
        </Container>
       </div>
      );
}
