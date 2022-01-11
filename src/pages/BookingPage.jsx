import React, { Fragment } from 'react'
import TopMenu from './../components/common/TopMenu';
import Footer from './../components/common/Footer';
import BookinCalendar from './../components/booking/BookingCalendar';

export default function BookingPage() {
    return (
        <Fragment>
            <TopMenu />
              <BookinCalendar />
            <Footer />
        </Fragment>
    )
}
