import React from 'react'
import { Container, Modal, Button} from 'react-bootstrap';
import MultiForm from '../MultiForm/MultiForm';
import styles from "./../../assets/css/Modal.module.css";

export default function ModalComponent(props) {

    return (
       <div>
        <Container>
         <Modal
          {...props}
          size="xl"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          scrollable
        >
            <Modal.Header closeButton className={styles.modalHeader}>
              <><h2 style={{ fontWeight:"bold", textTransform:"uppercase", textAlign:"center", fontSize: "24px"}}>Book Your Appointment</h2></>
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
