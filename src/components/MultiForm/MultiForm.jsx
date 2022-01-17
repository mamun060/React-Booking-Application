/* eslint-disable default-case */
import React, { Component } from 'react';
import MultiBookingForm from './MultiBookingForm';
import UserInformation from './UserInformation';
import UserConfirmation from './UserConfirmation';
import UserSuccsessMsg from './UserSuccsessMsg';


class MultiForm extends Component {
    state = {
        step: 1,
        service: null,
        barber_id: null,
        date: new Date(),
        time_slot: null,
        name: '',
        email: '',
        phone: '',
    };

    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    };

    inputChange = input => e => {
        this.setState({
            [input]: e.target.value,
        });
    };

    // onChange = (date) => {
    //     this.setState({ selectedDate: date }); 
    //     console.log((date));
    // }


    render() {
        const { step } = this.state;
        const { service, barber_id, date, time_slot, name, gmail, phone } = this.state;
        const values = { service, barber_id, date, time_slot, name, gmail, phone };

        switch (step) {
            case 1:
                return (
                    <MultiBookingForm
                        nextStep={this.nextStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 2:
                return (
                    <UserInformation
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        inputChange={this.inputChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <UserSuccsessMsg />
                );
        }
    }
}

export default MultiForm;