import React, { Component } from 'react'
import {Container, Form, Row, Col} from 'react-bootstrap';
import Calendar from 'react-calendar';
import styles from '../../assets/css/MultiForm.module.css';
import BookTimeSlot from '../booking/BookTimeSlot';

export class MultiBookingForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange } = this.props;

        return (
           <Container>
                <div className="form-container">
                    <Row>
                        <Col md={7}>

                            <Row>
                                <Col md={6}>
                                    <Form.Select className={styles.SerivceTitle} name='service' onChange={inputChange('service')} value={values.service} aria-label="Default select example">
                                        <option>Choose Your Service</option>
                                        <option value="Hair">Hair </option>
                                        <option value="SPA">SPA </option>
                                        <option value="Haircut"> Haircut </option>
                                    </Form.Select>
                                </Col>
                                <Col md={6}>
                                    <Form.Select className={styles.SelectBarber} name='barber_id' onChange={inputChange('barber_id')} value={values.barber_id} aria-label="Default select example">
                                        <option>Choose Barber</option>
                                        <option value="Mamun">Mamun</option>
                                        <option value="Noor">Noor</option>
                                        <option value="Dalim">Dalim</option>
                                    </Form.Select>
                                </Col>
                            </Row>
                            <Calendar 
                            />

                            {/* <p>Normal input date input field</p> */}
                            {/* <div className={styles.ServiceDateSelect}>
                            <input type="date" className="form-control" name="date" onChange={inputChange('date')} value={values.date} />
                            </div> */}

                        </Col>

                        <Col md={5}>
                            <BookTimeSlot />
                           {/* <Form.Select className={styles.BookingTimeSlot} name='time_slot' onChange={inputChange('time_slot')} value={values.time_slot} aria-label="Default select example">
                                <option>Choose Time slot</option>
                                <option value="10:15">10:15</option>
                                <option value="12:00">12:00</option>
                                <option value="15:00">15:00</option>
                            </Form.Select> */}
                        </Col>

                    </Row>

                        {/* <Calendar
                        value={values.date}        
                        onClickDay={choughtOnDate}
                        /> */}

                    <br />

                    <div style={{ textAlign: "right"}}>
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
           </Container>
        );
    }
}

export default MultiBookingForm;