import React, { Component } from 'react'
import {Container, Form, Row, Col} from 'react-bootstrap';
import Calendar from 'react-calendar';
import Select from 'react-select';
import styles from '../../assets/css/MultiForm.module.css';
import BookTimeSlot from '../booking/BookTimeSlot';

export class MultiBookingForm extends Component {

    constructor(props){

        super(props)

        this.state = {
            selectedService: this.serviceLocal ?? null,
            selectedBarbar: this.selectedBarbar ?? null,
        };

        // call fetch or axios
        this.options = [
            { value: 'hair', label: 'Hair Cut' },
            { value: 'facial', label: 'Facial' },
            { value: 'spa', label: 'SPA' }
        ];

        this.options2 = [
            { value: 'noor', label: 'Noor' },
            { value: 'nadim', label: 'Nadim' },
            { value: 'dalim', label: 'Dalim' }
        ];
    }

    get serviceLocal() {
        let storageItem = localStorage.getItem('selected_service');
        return storageItem ? JSON.parse(storageItem) : null;
    }

    get selectedBarbar() {
        let storageItem = localStorage.getItem('selected_barbar');
        return storageItem ? JSON.parse(storageItem) : null;
    }

    setServiceLocal(serviceItem) {
        return localStorage.setItem('selected_service', JSON.stringify(serviceItem));
    }

    setBarbarLocal(serviceItem) {
        return localStorage.setItem('selected_barbar', JSON.stringify(serviceItem));
    }


    componentDidMount(){
        console.log(this.state);
    }

    handleService = (option)=>{
        this.setState({ selectedService: option});
        this.setServiceLocal(option);
    }

    handleBarbar = (option)=>{
        this.setState({ selectedBarbar: option});
        this.setBarbarLocal(option);
    }


    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, inputChange }   = this.props;
        this.props.values.service       = this.state.selectedService?.value;
        console.log(this.props.values);
        return (
           <Container>
                <div className="form-container">
                    <Row>
                        <Col md={7}>

                            <Row>
                                <Col md={6}>
                                    <Select className={styles.SelectServiceOption} name='service' options={this.options} onChange={this.handleService} value={this.state.selectedService} />
                                </Col>
                                <Col md={6}>
                                    <Select name='barber_id' options={this.options2} onChange={this.handleBarbar} value={this.state.selectedBarbar} />
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