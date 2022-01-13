import React from 'react'
import { Container, Row, Col, Form, Button, Table} from 'react-bootstrap'
import styles from '../../assets/css/BookingForm.module.css';

export default function BookingForm() {

    const handleClick = event => {
        event.preventDefault();
    }

    return (
        <div className={styles.BookingFormContainer}>
            <Container>
                <Row>

                    <Col md={6}>
                        <div className={styles.BookFormLetfWrapping}>

                            <div className={styles.FormLeftTitleSeciton}>
                                <h4 className={styles.FormleftMainTitle}> Personal Information </h4>
                                <p className={styles.FormleftMainSubTitle}> All Fields are required </p>
                            </div>

                            <div className={styles.FormLeftFormSection}>
                              <Form>

                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Control type="text" placeholder="Enter Your Name*" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Control type="email" placeholder="Enter Your Email*" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="">
                                        <Form.Control type="phone" placeholder='Enter Your Phone*'/>
                                    </Form.Group>

                                    <Button onClick={ handleClick } variant="primary" type="submit">
                                        Submit
                                    </Button>

                                </Form>
                            </div>

                        </div>
                    </Col>

                    <Col md={6}>
                        <div className={styles.BookFormRightWrapping}>

                            <div className={styles.FormRightTitleSeciton}>
                                <h4 className={styles.FormleftMainTitle}>Booking Overview</h4>
                            </div>

                            <div className={styles.FormRightTableSection}>
                              <Table striped bordered hover>
                                <tbody>

                                    <tr>
                                        <td>Location</td>
                                        <td>Dhaka</td>
                                    </tr>
                                    <tr>
                                        <td>Our Service</td>
                                        <td>Bread Shave clining face and convert women</td>
                                    </tr>
                                    <tr>
                                        <td>Selected Barber</td>
                                        <td>Md. Noor</td>
                                    </tr>
                                    <tr>
                                        <td>Price</td>
                                        <td>$ 50.00</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>$ 250.00</td>
                                    </tr>
                                    <tr>
                                        <td>Date and Time</td>
                                        <td>2022-01-02</td>
                                    </tr>

                                </tbody>
                              </Table>
                            </div>
                        </div>
                    </Col>

                </Row>

            </Container>
        </div>
    )
}
