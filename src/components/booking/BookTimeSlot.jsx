/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../assets/css/booking.module.css';

export default function BookTimeSlot() {
   
    const getTimes = ()=>{
        const String = "10:00AM";
        const newSt = String.split("-");
        const stCount = newSt.length;
        if(stCount === 2){
            return `${newSt[0]} - ${newSt[1]}`;
        }

        return String;
    }
    

    return (
        <div>
            <Container>
                <Row>
                    <Col md={12}>
                       <div>

                           <div className={styles.TimeSlotTitle}>
                               <h2>Available Time Slot</h2>
                           </div>

                           <div className={styles.TimeSlotSectionArea}>
                               <Row>
                                   <Col md={12}>
                                        <div className={styles.AllTimeSlotStyling}>

                                            <div md={3} className={styles.TimeSlotArea}>
                                                <h4><a href="#">{getTimes()}</a></h4>
                                            </div>
                                            
                                            <div md={3} className={styles.TimeSlotArea}>
                                                <h4><a href="#">{getTimes()}</a></h4>
                                            </div>
                                            <div className={styles.TimeSlotArea}>
                                                <h4><a href="#">{getTimes()}</a></h4>
                                            </div>
                                             
                                        </div>
                                   </Col>
                               </Row>
                                
                           </div>

                
                       </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
