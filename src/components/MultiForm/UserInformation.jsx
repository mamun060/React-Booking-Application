import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import styles from '../../assets/css/MultiForm.module.css';
import { RiUser2Fill } from 'react-icons/ri';
import { MdEmail, MdPhoneLocked } from 'react-icons/md';
import {BiTime} from 'react-icons/bi';
import {AiOutlinePoundCircle} from 'react-icons/ai';

class UserInformation extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        
        const { values, inputChange } = this.props;

        return (
            <Fragment>
                <Container className="form-container">
                    <Row>
                        <Col md={6}>
                        <div >
                            <h4 className={styles.UserInfoTitle}>Personal Informaiton</h4>

                            <div className={styles.FormInputWrapingUser}>
                                 <RiUser2Fill />
                                 <input type="text" 
                                 className="" 
                                 name="name" 
                                 onChange={inputChange('name')} 
                                 value={values.name}
                                 placeholder="Your Name"
                                 />
                            </div>

                            <div className={styles.FormInputWrapingUser}>
                                <MdEmail /> 
                                <input type="email" 
                                className="" 
                                name="gmail" 
                                onChange={inputChange('gmail')} 
                                value={values.gmail} 
                                placeholder='Your Email'
                                />
                            </div>
                            <div className={styles.FormInputWrapingUser}>
                                <MdPhoneLocked />
                                <input type="number" 
                                className="" 
                                name="phone" 
                                onChange={inputChange('phone')} 
                                value={values.phone}
                                placeholder="Your Phone" 
                                />
                            </div>

                            <br />
                         </div>
                        </Col>

                        <Col md={6}>
                            <div className={styles.userInformaitonTable}>

                                <ul>
                                    <li>Haircut with appointment</li>
                                    <li>Alexa</li>
                                </ul>
                                <ul className={styles.UlLiPriceTimeSlot}>
                                    <li className={styles.ChildTimeSlot}><AiOutlinePoundCircle />20.00</li>
                                    <li><BiTime /> 10.00 - 10:15</li>
                                </ul>
                                <ul>
                                    <li>10-01-2022</li>
                                    <li>{values.name}</li>
                                    <li>{values.gmail}</li>
                                    <li>{values.phone}</li>
                                </ul>

                            </div>
                        </Col>


                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-danger" onClick={this.back}>Back</button>
                            </div>
                            <div style={{ textAlign: "right"}} className="col-6">
                                <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                            </div>
                        </div>

                    </Row>
                </Container>
            </Fragment>
            
        )
    }
}

export default UserInformation;