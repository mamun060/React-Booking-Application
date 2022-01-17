/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import midimages from '../../assets/images/inside-outside-nadeemhairdressers.png';
import styles from '../../assets/css/Home.module.css';
import { Container, Row, Col} from 'react-bootstrap';

export default function OpenTime() {

    
    return (
        <div>
             <div className={styles.MainContent}>
                <Container>
                    <Row>

                    <Col md={6}>
                        <div className={styles.TableContainer}>

                        <table className={styles.tableStyle}>

                            <tbody className={styles.TabelBody}>
                            <tr>
                                <th>
                                <div className={styles.tableTitle}>
                                    <h2>Opening Hour's</h2>
                                </div>
                                </th>
                                <th></th>
                            </tr>
                            <tr>
                                <td className={styles.tableDay}>Monday</td>
                                <td className={styles.tableTime}>7:00 AM - 9:00PM</td>
                            </tr>
                            <tr>
                                <td className={styles.tableDay}>Tuesday</td>
                                <td className={styles.tableTime}>7:00 AM - 9:00PM</td>
                            </tr>
                            <tr>
                                <td className={styles.tableDay}>Wednesday</td>
                                <td className={styles.tableTime}>7:00 AM - 9:00PM</td>
                            </tr>
                            <tr>
                                <td className={styles.tableDay}>Thursday</td>
                                <td className={styles.tableTime}>7:00 AM - 9:00PM</td>
                            </tr>
                            <tr>
                                <td className={styles.tableDay}>Friday</td>
                                <td className={styles.tableTime}>7:00 AM - 9:00PM</td>
                            </tr>
                            <tr>
                                <td className={styles.tableDay}>Saterday</td>
                                <td className={styles.tableTime}>7:00 AM - 9:00PM</td>
                            </tr>
                            <tr>
                                <td className={styles.tableDay}>Sunday</td>
                                <td className={styles.tableTime}>7:00 AM - 9:00PM</td>
                            </tr>
                            </tbody>
                      

                        </table>

                            {/* <div className={styles.buttonOnlineBooking}>
                                <div><a href="#">Online Booking</a></div>
                            </div>
                          */}
                          
                        </div>
                    </Col>

                    <Col>
                        <div className={styles.rightImages}>
                            <img src={midimages} alt="" />
                        </div>
                    </Col>

                    </Row>
                </Container>
            </div>
        
        </div>
    )
}
