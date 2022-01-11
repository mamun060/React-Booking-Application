import React, { useState } from 'react';
import Calendar from 'react-calendar';
import styles from '../../assets/css/booking.module.css';

export default function BookingCalendar() {
    var dates =  new Date();

    const [date, setDate] = useState(dates);

    const onChange = date => {
        setDate(date);
    }
    
    return (
        <div className={styles.BookingCalendarContainer}>
      <Calendar
        onChange={onChange}
        value={date}
        
      />
     
      {console.log(date)}
     
    </div>
    )
}
