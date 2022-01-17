import React, { Component } from 'react'
import styles from '../../assets/css/MultiForm.module.css';

 class UserSuccsessMsg extends Component {
    render() {
        return (
            <div className={styles.BookSuccessMessage}>
                <h2 className="text-black">Booked Successfully!</h2>
            </div>
        )
    }
}

export default UserSuccsessMsg;