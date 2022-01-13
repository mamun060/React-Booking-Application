import {React, Fragment} from 'react'
import { Container, Row, Col, Tab, Tabs} from 'react-bootstrap'
import Footer from '../components/common/Footer'
import TopMenu from '../components/common/TopMenu'
import GridService from '../components/services/GridService'
import ListingService from '../components/services/ListingService'
import styles from '../assets/css/Service.module.css';
import { BsFillGridFill, BsListUl} from 'react-icons/bs';

export default function ServicesPage() {
    return (
        <div> 
       
            <Fragment>
              <div className={styles.ServiceSectionContainer}>
                <TopMenu />
                  <Container >
                    <Row>
                        <Col>
                           <Tabs defaultActiveKey="gridservice" id="uncontrolled-tab-example" className="mb-3">
                                <Tab eventKey="gridservice" title={<BsFillGridFill />}>
                                    <GridService />
                                </Tab>
                                <Tab eventKey="listservice" title={<BsListUl />}>
                                    <ListingService />
                                </Tab>
                            </Tabs>
                        </Col>
                    </Row>
                </Container>
           </div>
       <Footer />
       </Fragment>
       
       </div>
    );
}
