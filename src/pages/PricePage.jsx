import React, { Fragment } from 'react'
import Footer from '../components/common/Footer';
import TopMenu from '../components/common/TopMenu'
import Price from './../components/others/Price';

export default function PricePage() {
    return (
        <Fragment>
            <TopMenu />
            <Price />
            <Footer />
         </Fragment>
    )
}
