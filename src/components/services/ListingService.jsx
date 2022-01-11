/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Fragment} from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../assets/css/Service.module.css';
import { BsClock, BsCurrencyPound } from "react-icons/bs";
import { GiOfficeChair } from "react-icons/gi";
import spa from '../../assets/images/service/spa.jpg';
import hairstyle from '../../assets/images/service/hair-design.jpg';
import haircut from '../../assets/images/service/haircut.jpg';


export default function ListingService() {
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

                  <Col md={12}>
                      <div className={styles.ServiceWrapping}>
                          <Row>
                              <Col md={3} sm={5}>
                                <div className={styles.ListServiceBannerImage}>
                                    <img src={spa}  alt='images'/>
                                </div>
                              </Col>

                              <Col md={8} sm={7}>
                                <div className={styles.ListServiceTitle}>
                                    <h2>SPA service we provide</h2>
                                </div>

                                <div className={styles.ListserviceIconWrapping}>
                                    <ul>
                                        <li><BsClock /><p>2:30PM</p></li>
                                        <li><BsCurrencyPound /><p>50.0</p></li>
                                        <li><GiOfficeChair /> <p>5</p></li>
                                    </ul>
                                </div>

                                <div className={styles.ListServiceBookBtn}>
                                    <a href="#">Booking Online</a>
                                </div>
                              </Col>
                          </Row>

                      </div>
                  </Col>
                  <Col md={12}>
                      <div className={styles.ServiceWrapping}>
                          <Row>
                              <Col md={3} sm={5}>
                                <div className={styles.ListServiceBannerImage}>
                                    <img src={hairstyle}  alt='images'/>
                                </div>
                              </Col>

                              <Col md={8} sm={7}>
                                <div className={styles.ListServiceTitle}>
                                    <h2>SPA service we provide</h2>
                                </div>

                                <div className={styles.ListserviceIconWrapping}>
                                    <ul>
                                        <li><BsClock /><p>2:30PM</p></li>
                                        <li><BsCurrencyPound /><p>50.0</p></li>
                                        <li><GiOfficeChair /> <p>5</p></li>
                                    </ul>
                                </div>

                                <div className={styles.ListServiceBookBtn}>
                                    <a href="#">Booking Online</a>
                                </div>
                              </Col>
                          </Row>

                      </div>
                  </Col>
                  <Col md={12}>
                      <div className={styles.ServiceWrapping}>
                          <Row>
                              <Col md={3} sm={5}>
                                <div className={styles.ListServiceBannerImage}>
                                    <img src={haircut}  alt='images'/>
                                </div>
                              </Col>

                              <Col md={8} sm={7}>
                                <div className={styles.ListServiceTitle}>
                                    <h2>SPA service we provide</h2>
                                </div>

                                <div className={styles.ListserviceIconWrapping}>
                                    <ul>
                                        <li><BsClock /><p>2:30PM</p></li>
                                        <li><BsCurrencyPound /><p>50.0</p></li>
                                        <li><GiOfficeChair /> <p>5</p></li>
                                    </ul>
                                </div>

                                <div className={styles.ListServiceBookBtn}>
                                    <a href="#">Booking Online</a>
                                </div>
                              </Col>
                          </Row>

                      </div>
                  </Col>

              </Row>
              <Row>

                  <Col md={12}>
                      <div className={styles.ServiceWrapping}>
                          <Row>
                              <Col md={3} sm={5}>
                                <div className={styles.ListServiceBannerImage}>
                                    <img src={spa}  alt='images'/>
                                </div>
                              </Col>

                              <Col md={8} sm={7}>
                                <div className={styles.ListServiceTitle}>
                                    <h2>SPA service we provide</h2>
                                </div>

                                <div className={styles.ListserviceIconWrapping}>
                                    <ul>
                                        <li><BsClock /><p>2:30PM</p></li>
                                        <li><BsCurrencyPound /><p>50.0</p></li>
                                        <li><GiOfficeChair /> <p>5</p></li>
                                    </ul>
                                </div>

                                <div className={styles.ListServiceBookBtn}>
                                    <a href="#">Booking Online</a>
                                </div>
                              </Col>
                          </Row>

                      </div>
                  </Col>
                  <Col md={12}>
                      <div className={styles.ServiceWrapping}>
                          <Row>
                              <Col md={3} sm={5}>
                                <div className={styles.ListServiceBannerImage}>
                                    <img src={hairstyle}  alt='images'/>
                                </div>
                              </Col>

                              <Col md={8} sm={7}>
                                <div className={styles.ListServiceTitle}>
                                    <h2>SPA service we provide</h2>
                                </div>

                                <div className={styles.ListserviceIconWrapping}>
                                    <ul>
                                        <li><BsClock /><p>2:30PM</p></li>
                                        <li><BsCurrencyPound /><p>50.0</p></li>
                                        <li><GiOfficeChair /> <p>5</p></li>
                                    </ul>
                                </div>

                                <div className={styles.ListServiceBookBtn}>
                                    <a href="#">Booking Online</a>
                                </div>
                              </Col>
                          </Row>

                      </div>
                  </Col>
                  <Col md={12}>
                      <div className={styles.ServiceWrapping}>
                          <Row>
                              <Col md={3} sm={5}>
                                <div className={styles.ListServiceBannerImage}>
                                    <img src={haircut}  alt='images'/>
                                </div>
                              </Col>

                              <Col md={8} sm={7}>
                                <div className={styles.ListServiceTitle}>
                                    <h2>SPA service we provide</h2>
                                </div>

                                <div className={styles.ListserviceIconWrapping}>
                                    <ul>
                                        <li><BsClock /><p>2:30PM</p></li>
                                        <li><BsCurrencyPound /><p>50.0</p></li>
                                        <li><GiOfficeChair /> <p>5</p></li>
                                    </ul>
                                </div>

                                <div className={styles.ListServiceBookBtn}>
                                    <a href="#">Booking Online</a>
                                </div>
                              </Col>
                          </Row>

                      </div>
                  </Col>

              </Row>
              <Row>

                  <Col md={12}>
                      <div className={styles.ServiceWrapping}>
                          <Row>
                              <Col md={3} sm={5}>
                                <div className={styles.ListServiceBannerImage}>
                                    <img src={spa}  alt='images'/>
                                </div>
                              </Col>

                              <Col md={8} sm={7}>
                                <div className={styles.ListServiceTitle}>
                                    <h2>SPA service we provide</h2>
                                </div>

                                <div className={styles.ListserviceIconWrapping}>
                                    <ul>
                                        <li><BsClock /><p>2:30PM</p></li>
                                        <li><BsCurrencyPound /><p>50.0</p></li>
                                        <li><GiOfficeChair /> <p>5</p></li>
                                    </ul>
                                </div>

                                <div className={styles.ListServiceBookBtn}>
                                    <a href="#">Booking Online</a>
                                </div>
                              </Col>
                          </Row>

                      </div>
                  </Col>
                  <Col md={12}>
                      <div className={styles.ServiceWrapping}>
                          <Row>
                              <Col md={3} sm={5}>
                                <div className={styles.ListServiceBannerImage}>
                                    <img src={hairstyle}  alt='images'/>
                                </div>
                              </Col>

                              <Col md={8} sm={7}>
                                <div className={styles.ListServiceTitle}>
                                    <h2>SPA service we provide</h2>
                                </div>

                                <div className={styles.ListserviceIconWrapping}>
                                    <ul>
                                        <li><BsClock /><p>2:30PM</p></li>
                                        <li><BsCurrencyPound /><p>50.0</p></li>
                                        <li><GiOfficeChair /> <p>5</p></li>
                                    </ul>
                                </div>

                                <div className={styles.ListServiceBookBtn}>
                                    <a href="#">Booking Online</a>
                                </div>
                              </Col>
                          </Row>

                      </div>
                  </Col>
                  <Col md={12}>
                      <div className={styles.ServiceWrapping}>
                          <Row>
                              <Col md={3} sm={5}>
                                <div className={styles.ListServiceBannerImage}>
                                    <img src={haircut}  alt='images'/>
                                </div>
                              </Col>

                              <Col md={8} sm={7}>
                                <div className={styles.ListServiceTitle}>
                                    <h2>SPA service we provide</h2>
                                </div>

                                <div className={styles.ListserviceIconWrapping}>
                                    <ul>
                                        <li><BsClock /><p>2:30PM</p></li>
                                        <li><BsCurrencyPound /><p>50.0</p></li>
                                        <li><GiOfficeChair /> <p>5</p></li>
                                    </ul>
                                </div>

                                <div className={styles.ListServiceBookBtn}>
                                    <a href="#">Booking Online</a>
                                </div>
                              </Col>
                          </Row>

                      </div>
                  </Col>

              </Row>

          </Container>
        </Fragment>
      </div>
    )
}
