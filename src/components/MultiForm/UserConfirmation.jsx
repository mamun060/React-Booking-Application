import React, { Component } from 'react'
import styles from '../../assets/css/MultiForm.module.css';

class UserConfirmation extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: {service, barber_id, date, time_slot, name, gmail, phone } } = this.props;

        return (
            <div className="form-container">
                <h4 className={styles.UserInfoTitle}>Personal Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">Location: {service}</li>
                    <li className="list-group-item">Service_id: {service}</li>
                    <li className="list-group-item">Barder_id: {barber_id}</li>
                    <li className="list-group-item">Price: {barber_id}</li>
                    <li className="list-group-item">Booking Date:</li>
                    <li className="list-group-item">Booking Time: {time_slot}</li>
                    <li className="list-group-item">Your Name: {name}</li>
                    <li className="list-group-item">Your Email: {gmail}</li>
                    <li className="list-group-item">Your Phone: {phone}</li>
                </ul>

                <br /><br />

                <div className="row">
                    <div className="col-6">
                        <button className="btn btn-danger" onClick={this.back}>Back</button>
                    </div>
                    <div style={{ textAlign: "right"}} className="col-6">
                        <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserConfirmation;