/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../assets/css/Service.module.css';
import { BsClock, BsCurrencyPound } from "react-icons/bs";
import { GiOfficeChair } from "react-icons/gi";
import spa from '../../assets/images/service/spa.jpg';
import hairstyle from '../../assets/images/service/hair-design.jpg';
import haircut from '../../assets/images/service/haircut.jpg';

export default function GridService() {
    return (
        <div className={styles.GridServiceSection}>
          <Fragment>
            <Container>
                <Row>
                    <Col md={12}>
                        <div className={styles.ServiceHeading}>
                            <h2>Our Services </h2>
                            <p> You can book service from the cart view easily.</p>
                        </div>
                    </Col>
                </Row>

                <Row>

                    <Col md={4}>
                        <div className={styles.ServiceWrapping}>

                            <div className={styles.ServiceBannerImage}>
                                <img src={spa}  alt='images'/>
                            </div>

                            <div className={styles.ServiceTitle}>
                                <h2>SPA service we provide</h2>
                            </div>

                            <div className={styles.serviceIconWrapping}>
                                <ul>
                                    <li><BsClock /><p>2:30PM</p></li>
                                    <li><BsCurrencyPound /><p>50.0</p></li>
                                    <li><GiOfficeChair /> <p>5</p></li>
                                </ul>
                            </div>

                            <div className={styles.ServiceBookBtn}>
                                <a href="#">Booking Online</a>
                            </div>

                        </div>
                    </Col>

                    <Col md={4}>
                    <div className={styles.ServiceWrapping}>
                            <div className={styles.ServiceBannerImage}>
                                <img src={hairstyle}  alt='images'/>
                            </div>
                            <div className={styles.ServiceTitle}>
                                <h2>SPA service we provide</h2>
                            </div>
                            <div className={styles.serviceIconWrapping}>
                                <ul>
                                    <li><BsClock /><p>2:30PM</p></li>
                                    <li><BsCurrencyPound /><p>50.0</p></li>
                                    <li><GiOfficeChair /> <p>5</p></li>
                                </ul>
                            </div>

                            
                            <div className={styles.ServiceBookBtn}>
                                <a href="#">Booking Online</a>
                            </div>

                        </div>
                    </Col>

                    <Col md={4}>
                    <div className={styles.ServiceWrapping}>
                            <div className={styles.ServiceBannerImage}>
                                <img src={haircut}  alt='images'/>
                            </div>
                            <div className={styles.ServiceTitle}>
                                <h2>SPA service we provide</h2>
                            </div>
                            <div className={styles.serviceIconWrapping}>
                                <ul>
                                    <li><BsClock /><p>2:30PM</p></li>
                                    <li><BsCurrencyPound /><p>50.0</p></li>
                                    <li><GiOfficeChair /> <p>5</p></li>
                                </ul>
                            </div>

                            
                            <div className={styles.ServiceBookBtn}>
                                <a href="#">Booking Online</a>
                            </div>

                        </div>
                    </Col>

                </Row>

                <Row>

                    <Col md={4}>
                        <div className={styles.ServiceWrapping}>
                            <div className={styles.ServiceBannerImage}>
                                <img src={spa}  alt='images'/>
                            </div>
                            <div className={styles.ServiceTitle}>
                                <h2>SPA service we provide</h2>
                            </div>
                            <div className={styles.serviceIconWrapping}>
                                <ul>
                                    <li><BsClock /><p>2:30PM</p></li>
                                    <li><BsCurrencyPound /><p>50.0</p></li>
                                    <li><GiOfficeChair /> <p>5</p></li>
                                </ul>
                            </div>
                            
                            <div className={styles.ServiceBookBtn}>
                                <a href="#">Booking Online</a>
                            </div>

                        </div>
                    </Col>

                    <Col md={4}>
                    <div className={styles.ServiceWrapping}>
                            <div className={styles.ServiceBannerImage}>
                                <img src={hairstyle}  alt='images'/>
                            </div>
                            <div className={styles.ServiceTitle}>
                                <h2>SPA service we provide</h2>
                            </div>
                            <div className={styles.serviceIconWrapping}>
                                <ul>
                                    <li><BsClock /><p>2:30PM</p></li>
                                    <li><BsCurrencyPound /><p>50.0</p></li>
                                    <li><GiOfficeChair /> <p>5</p></li>
                                </ul>
                            </div>

                            
                            <div className={styles.ServiceBookBtn}>
                                <a href="#">Booking Online</a>
                            </div>

                        </div>
                    </Col>

                    <Col md={4}>
                    <div className={styles.ServiceWrapping}>
                            <div className={styles.ServiceBannerImage}>
                                <img src={haircut}  alt='images'/>
                            </div>
                            <div className={styles.ServiceTitle}>
                                <h2>SPA service we provide</h2>
                            </div>
                            <div className={styles.serviceIconWrapping}>
                                <ul>
                                    <li><BsClock /><p>2:30PM</p></li>
                                    <li><BsCurrencyPound /><p>50.0</p></li>
                                    <li><GiOfficeChair /> <p>5</p></li>
                                </ul>
                            </div>

                            
                            <div className={styles.ServiceBookBtn}>
                                <a href="#">Booking Online</a>
                            </div>
                            
                        </div>
                    </Col>

                </Row>
                
                <Row>

                    <Col md={4}>
                        <div className={styles.ServiceWrapping}>

                            <div className={styles.ServiceBannerImage}>
                                <img src={spa}  alt='images'/>
                            </div>

                            <div className={styles.ServiceTitle}>
                                <h2>SPA service we provide</h2>
                            </div>

                            <div className={styles.serviceIconWrapping}>
                                <ul>
                                    <li><BsClock /><p>2:30PM</p></li>
                                    <li><BsCurrencyPound /><p>50.0</p></li>
                                    <li><GiOfficeChair /> <p>5</p></li>
                                </ul>
                            </div>

                            <div className={styles.ServiceBookBtn}>
                                <a href="#">Booking Online</a>
                            </div>

                        </div>
                    </Col>

                    <Col md={4}>
                    <div className={styles.ServiceWrapping}>
                            <div className={styles.ServiceBannerImage}>
                                <img src={hairstyle}  alt='images'/>
                            </div>
                            <div className={styles.ServiceTitle}>
                                <h2>SPA service we provide</h2>
                            </div>
                            <div className={styles.serviceIconWrapping}>
                                <ul>
                                    <li><BsClock /><p>2:30PM</p></li>
                                    <li><BsCurrencyPound /><p>50.0</p></li>
                                    <li><GiOfficeChair /> <p>5</p></li>
                                </ul>
                            </div>

                            
                            <div className={styles.ServiceBookBtn}>
                                <a href="#">Booking Online</a>
                            </div>

                        </div>
                    </Col>

                    <Col md={4}>
                    <div className={styles.ServiceWrapping}>
                            <div className={styles.ServiceBannerImage}>
                                <img src={haircut}  alt='images'/>
                            </div>
                            <div className={styles.ServiceTitle}>
                                <h2>SPA service we provide</h2>
                            </div>
                            <div className={styles.serviceIconWrapping}>
                                <ul>
                                    <li><BsClock /><p>2:30PM</p></li>
                                    <li><BsCurrencyPound /><p>50.0</p></li>
                                    <li><GiOfficeChair /> <p>5</p></li>
                                </ul>
                            </div>

                            
                            <div className={styles.ServiceBookBtn}>
                                <a href="#">Booking Online</a>
                            </div>

                        </div>
                    </Col>

                </Row>

                <Row>

                    <Col md={4}>
                        <div className={styles.ServiceWrapping}>
                            <div className={styles.ServiceBannerImage}>
                                <img src={spa}  alt='images'/>
                            </div>
                            <div className={styles.ServiceTitle}>
                                <h2>SPA service we provide</h2>
                            </div>
                            <div className={styles.serviceIconWrapping}>
                                <ul>
                                    <li><BsClock /><p>2:30PM</p></li>
                                    <li><BsCurrencyPound /><p>50.0</p></li>
                                    <li><GiOfficeChair /> <p>5</p></li>
                                </ul>
                            </div>
                            
                            <div className={styles.ServiceBookBtn}>
                                <a href="#">Booking Online</a>
                            </div>

                        </div>
                    </Col>

                    <Col md={4}>
                    <div className={styles.ServiceWrapping}>
                            <div className={styles.ServiceBannerImage}>
                                <img src={hairstyle}  alt='images'/>
                            </div>
                            <div className={styles.ServiceTitle}>
                                <h2>SPA service we provide</h2>
                            </div>
                            <div className={styles.serviceIconWrapping}>
                                <ul>
                                    <li><BsClock /><p>2:30PM</p></li>
                                    <li><BsCurrencyPound /><p>50.0</p></li>
                                    <li><GiOfficeChair /> <p>5</p></li>
                                </ul>
                            </div>

                            
                            <div className={styles.ServiceBookBtn}>
                                <a href="#">Booking Online</a>
                            </div>

                        </div>
                    </Col>

                    <Col md={4}>
                    <div className={styles.ServiceWrapping}>
                            <div className={styles.ServiceBannerImage}>
                                <img src={haircut}  alt='images'/>
                            </div>
                            <div className={styles.ServiceTitle}>
                                <h2>SPA service we provide</h2>
                            </div>
                            <div className={styles.serviceIconWrapping}>
                                <ul>
                                    <li><BsClock /><p>2:30PM</p></li>
                                    <li><BsCurrencyPound /><p>50.0</p></li>
                                    <li><GiOfficeChair /> <p>5</p></li>
                                </ul>
                            </div>

                            
                            <div className={styles.ServiceBookBtn}>
                                <a href="#">Booking Online</a>
                            </div>
                            
                        </div>
                    </Col>

                </Row>

            </Container>
          </Fragment>
        </div>
    );
}
