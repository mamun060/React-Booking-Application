import {React, Fragment} from 'react'
import Footer from '../components/common/Footer'
import TopMenu from '../components/common/TopMenu'
import GridService from '../components/services/GridService'
import ListingService from '../components/services/ListingService'
import NormalService from '../components/services/NormalService'


export default function ServicesPage() {
    return (
        <Fragment>
            <TopMenu />
            <GridService />
            {/* <ListingService /> */}
            {/* <NormalService /> */}
            <Footer />
        </Fragment>
    )
}
