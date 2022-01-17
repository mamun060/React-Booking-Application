/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../assets/css/booking.module.css';

export default function BookTimeSlot() {

    let 
    colLg = 4,
    colMd = 6;
   
    const getTimes = ()=>{
        const String = "10:00AM";
        const newSt = String.split("-");
        const stCount = newSt.length;
        if(stCount === 2){
            colLg = 6;
            return `${newSt[0]} - ${newSt[1]}`;
        }

        return String;
    }
    

    return (
        <>
            <Row>
                <Col md={12}>
                    <div className='cardx px-2'>
                        <div className="card-body px-0">
                            <Row className={styles.TimeSlotTitle}>
                                <h5 style={{ textAlign: "center", fontWeight: "bold" }}>Available Time Slot</h5>
                            </Row>

                            <Row>
                                <Col md={12}>
                                    <Row className={styles.AllTimeSlotStyling}>

                                        <Col md={colMd} lg={colLg} className='px-1 my-1'>
                                            <span className={styles.btnOutlineWarn + ' py-2 w-100 btn btn-sm btn-outline-warn d-block text-center'}>{getTimes()}</span>
                                        </Col>
                                        <Col md={colMd} lg={colLg} className='px-1 my-1'>
                                            <span className={styles.btnOutlineWarn + ' py-2 w-100 btn btn-sm btn-outline-warn d-block text-center'}>{getTimes()}</span>
                                        </Col>
                                        <Col md={colMd} lg={colLg} className='px-1 my-1'>
                                            <span className={styles.btnOutlineWarn + ' py-2 w-100 btn btn-sm btn-outline-warn d-block text-center'}>{getTimes()}</span>
                                        </Col>
                                        <Col md={colMd} lg={colLg} className='px-1 my-1'>
                                            <span className={styles.btnOutlineWarn + ' py-2 w-100 btn btn-sm btn-outline-warn d-block text-center'}>{getTimes()}</span>
                                        </Col>

                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
