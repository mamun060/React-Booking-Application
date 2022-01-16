import React, { Fragment } from 'react'
import Footer from '../components/common/Footer'
import TopMenu from '../components/common/TopMenu'
import OpenTime from '../components/home/OpenTime';
import HeroSection from './../components/home/HeroSection';

export default function HomePage() {
    return (
        <Fragment>
            <TopMenu />
              <HeroSection />
                <OpenTime />
            <Footer />
        </Fragment>
    )
}
