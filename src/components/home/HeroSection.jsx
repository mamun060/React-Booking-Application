/* eslint-disable jsx-a11y/anchor-is-valid */
import {React, Fragment} from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import styles from '../../assets/css/Home.module.css';

export default function HeroSection() {

    return (
        <Fragment className={styles.HeroContainer}>
            <div className={styles.HeroBgImage}>
                <section className={styles.HeroSection}>
                <Container>
                    <Row>

                        <Col md={6}>
                            <div className={styles.HeroContentWrapping}>
                                <h2>Welcome to <span>Nadeem Hair Dressers</span></h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
                                    cumque? Quia a itaque tempora nostrum cupiditate exercitationem sit,
                                    eos ullam?
                                </p>
                            </div>
                            <div className={styles.HeroButtonWrapping}>
                            <div className={styles.CallPhone}><a href="tel:07595183489">075952 183489</a></div>
                            <div className={styles.BookOnlineBtn}><a href="#">Book Online</a></div>
                            </div>
                        </Col>

                       <Col md={6}></Col>
                    </Row>
                </Container>
                </section>
            </div>
        </Fragment>
    )
}
