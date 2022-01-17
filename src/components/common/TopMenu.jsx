import {React} from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import styles from '../../assets/css/Common.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo/Nadeem-Hair-Dressers-logo.png';
import ModalButton from '../ModalForm/ModalButton';

export default function TopMenu() {
    return (
        <div>
            <Navbar className={styles.TopMenuStyle} collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Container className={styles.TopMenuContainer}>
                <Navbar.Brand className={styles.SalonAppLogo}><Link to="/"> <img src={logo} alt="salon-app"/> </Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"> </Nav>
                    <Nav>
                    <Link to="/">Home</Link>
                    <Link to="/services">Service</Link>
                    <Link to="/price">Price</Link>
                    <Link to="/gallery">Gallery</Link>
                    <><ModalButton /></>
                     
                    {/* <Link to="/booking" className={styles.BtnOnlineBooking} eventKey={2} href="#memes">
                       Book Online
                    </Link> */}
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    )
}
