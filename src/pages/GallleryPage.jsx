import {React, Fragment } from 'react'
import Footer from '../components/common/Footer'
import TopMenu from '../components/common/TopMenu'
import GallerySection from '../components/others/GallerySection'

export default function GallleryPage() {
    return (
        <Fragment>
            <TopMenu />
              <GallerySection />
            <Footer />
        </Fragment>
    )
}
