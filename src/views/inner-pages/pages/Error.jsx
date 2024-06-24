import React from 'react';
import Head from 'next/head';
import Link from 'next/link'

import TopNavFour from '../../../components/header/TopNavFour';

const Error = () => {
    return (
        <div className="main-page-wrapper">
            <Head>
                <title>Error || Sinco - Data Science & Analytics React Template</title>
            </Head>
            {/* helmet end */}

            <TopNavFour/> 
            {/* theme-menu-four */}

            <div
                className="error-page-content d-flex align-items-center justify-content-center">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-lg-7 m-auto">
                            <h2>Opps! you’r on the wrong place.</h2>
                            <p className="me-xxl-5 ms-xxl-5">Can not find what you need? Take a moment and
                                do a search below or start from our Homepage.</p>
                            <Link href="/" className="btn-eight">Back to home</Link>
                        </div>
                    </div>
                    <img src="images/assets/ils_21.svg" alt="" className="m-auto"/>
                </div>
                <img src="images/shape/shape_49.svg" alt="" className="shapes shape-one w-100"/>
            </div>
            {/* /.error-page-content */}

        </div>
    )
}

export default Error