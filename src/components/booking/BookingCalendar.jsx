import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from '../../assets/css/booking.module.css';
import { Container, Row, Col, Form, Card } from 'react-bootstrap';
import BookTimeSlot from './BookTimeSlot';
import {Link} from 'react-router-dom';

export default function BookingCalendar() {
    var dates =  new Date();

    const [date, setDate] = useState(dates);

    const onChange = date => {
        setDate(date);
    }
    
    return (
        <div className={styles.BookingCalendarContainer}>
          <Container>
            <div className={styles.BookingCalendarRight}>
            
          <Row>
            <Col md={7}>
               <Card>
                  <div className={styles.SelectButtonStyle}>
                    <Row>
                      <Col md={6}>
                        <div className={styles.serviceSelectOptionWrapping}>
                          <Form.Select aria-label="Default select example">
                              <option>Select Service</option>
                              <option value="1">SPA</option>
                              <option value="2">Servicing</option>
                              <option value="3">Hair Treetment</option>
                              <option value="3">Hair Servicing</option>
                            </Form.Select>  
                        </div>
                      </Col>
                      <Col md={6}>
                          <div className={styles.serviceSelectOptionWrapping}>
                              <Form.Select aria-label="Default select example">
                                <option>Select Barbar</option>
                                <option value="1">Alauddin</option>
                                <option value="2">Raju</option>
                                <option value="3">Noor</option>
                              </Form.Select>
                          </div>
                      </Col>
                    </Row>
                  </div>
                    <Calendar
                      onChange={onChange}
                      value={date}
                      
                    />
                  
                    {console.log(date)}
               </Card>
            </Col>

            <Col md={5}>
               <Card className={styles.TimeSlotContainer}>
                <div>
                    <BookTimeSlot />
                </div>
               </Card>
            </Col>
          </Row>

           <Row>
              <Col md={12}>
                  <div className={styles.TimeSlotButtonSection}>
                      <Link to="/bookform">Continue</Link>
                  </div>
              </Col>
          </Row>

        </div>
      </Container>
     
    </div>
    )
}
