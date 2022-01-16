import React, { Fragment } from 'react'
import TopMenu from './../components/common/TopMenu';
import Footer from './../components/common/Footer';
import MultiForm from '../components/MultiForm/MultiForm';

export default function MultiFormPage() {
    return (
        <div>
            <Fragment>
                <TopMenu />
                    <div style={{paddingTop: "100px", paddingBottom: "100px", padding: "100px"}}>
                        <MultiForm />
                    </div>
                <Footer />
            </Fragment>
        </div>
    )
}
