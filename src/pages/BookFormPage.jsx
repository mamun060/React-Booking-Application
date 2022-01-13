import React, { Fragment } from 'react'
import BookingForm from '../components/booking/BookingForm'
import Footer from '../components/common/Footer'
import TopMenu from '../components/common/TopMenu'

export default function BookFormPage() {
    return (
        <Fragment>
            <TopMenu />
               <BookingForm />
            <Footer />
        </Fragment>
    )
}
