/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from 'react'
import {Container, Row, Col } from 'react-bootstrap';
import rightImage from '../../assets/images/pricing-right.png';
import styles from '../../assets/css/Price.module.css';

export default function Price() {
    return (
        <Fragment>
            <div className={styles.PriceMainContent}>
              <Container>
                <Row>

                <Col md={6}>
                    <div className={styles.PriceListLeft}>

                    <div className={styles.PriceMenuItem}>
                            <div className={styles.PriceMenuTitle}>
                              <h4><span>Beard / Shave</span></h4>
                            </div>

                            <div className={styles.MiddleDotted}>
                            -------
                            </div>

                            <div className={styles.MenuItemPrice}>
                            <span className={styles.Price}>£7</span>
                            </div>
                    </div>

                    <div className={styles.PriceMenuItem}>
                            <div className={styles.PriceMenuTitle}>
                              <h4><span>Beard / Shave</span></h4>
                            </div>

                            <div className={styles.MiddleDotted}>
                            -------
                            </div>

                            <div className={styles.MenuItemPrice}>
                            <span className={styles.Price}>£7</span>
                            </div>
                    </div>

                    <div className={styles.PriceMenuItem}>
                            <div className={styles.PriceMenuTitle}>
                              <h4><span>Beard / Shave</span></h4>
                            </div>

                            <div className={styles.MiddleDotted}>
                            -------
                            </div>

                            <div className={styles.MenuItemPrice}>
                            <span className={styles.Price}>£7</span>
                            </div>
                    </div>

                    <div className={styles.PriceMenuItem}>
                            <div className={styles.PriceMenuTitle}>
                              <h4><span>Beard / Shave</span></h4>
                            </div>

                            <div className={styles.MiddleDotted}>
                            -------
                            </div>

                            <div className={styles.MenuItemPrice}>
                            <span className={styles.Price}>£7</span>
                            </div>
                    </div>

                    <div className={styles.PriceMenuItem}>
                            <div className={styles.PriceMenuTitle}>
                              <h4><span>Beard / Shave</span></h4>
                            </div>

                            <div className={styles.MiddleDotted}>
                            -------
                            </div>

                            <div className={styles.MenuItemPrice}>
                            <span className={styles.Price}>£7</span>
                            </div>
                    </div>

                    <div className={styles.PriceMenuItem}>
                            <div className={styles.PriceMenuTitle}>
                              <h4><span>Beard / Shave</span></h4>
                            </div>

                            <div className={styles.MiddleDotted}>
                            -------
                            </div>

                            <div className={styles.MenuItemPrice}>
                            <span className={styles.Price}>£7555</span>
                            </div>
                    </div>

                    <div className={styles.PriceOnlineBooking}>
                        <div><a href="#">Online Booking</a></div>
                    </div>

                    </div>
                </Col>

                <Col md={6}>
                    <div className={styles.PricerRightImages}>
                        <img src={rightImage} alt="" />
                    </div>
                </Col>

                </Row>
            </Container>
            </div>
        </Fragment>
    )
}
