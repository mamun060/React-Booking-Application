import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import styles from '../../assets/css/MultiForm.module.css';
import { RiUser2Fill } from 'react-icons/ri';
import { MdEmail, MdPhoneLocked } from 'react-icons/md';

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
                      
                            <Table striped bordered hover>
                                <thead>
    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Location</td>
                                        <td>Dhaka Nikunjo</td>
                                    </tr>
                                    <tr>
                                        <td>Service</td>
                                        <td>{values.service}</td>
                                    </tr>
                                    <tr>
                                        <td>Barber</td>
                                        <td>{values.barber_id}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td> $10.00 </td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                        <td>10/12/2022</td>
                                    </tr>
                                    <tr>
                                        <td>Time</td>
                                        <td>{values.time_slot}</td>
                                    </tr>
                                    <tr>
                                        <td>Name</td>
                                        <td>{values.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{values.gmail}</td>
                                    </tr>
                                    <tr>
                                        <td>Phone</td>
                                        <td>{values.phone}</td>
                                    </tr>
                                </tbody>
                            </Table>
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