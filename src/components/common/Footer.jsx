import {React, Fragment} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import styles from '../../assets/css/Common.module.css';

export default function Footer() {
    return (
        <Fragment>
            <div className={styles.FooterSection}>
                <Container>
                    <Row>

                        <Col md={6}>
                        <div className={styles.footerLeftContent}>
                            <p>© Nadeem Hair Dressers | All rights reserved</p>
                        </div>
                        </Col>

                        <Col md={6}>
                        <div className={styles.footerRightContent}>
                            <h4>Design & Developed by <span>YAARA DIGITAL</span></h4>
                        </div>
                        </Col>

                    </Row>
                </Container>
            </div>
        </Fragment>
    )
}
