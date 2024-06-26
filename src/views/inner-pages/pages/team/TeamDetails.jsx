import React, {Fragment} from 'react';
import Head from 'next/head';
import TopNavFour from '../../../../components/header/TopNavFour';
import InnerBanner from '../../../../components/page-title/InnerBanner';
import TeamDetailsOne from '../../../../components/team/TeamDetailsOne'
import BannerFive from '../../../../components/short-banner/BannerFive';
import FooterFour from '../../../../components/footer/FooterFour';
import CopyRightFour from '../../../../components/footer/CopyRightFour';

const TeamDetails = () => {
    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Head>
                    <title>Team Details V1 || Sinco - Data Science & Analytics React Template</title>
                </Head>
                {/* helmet end */}

                <TopNavFour/> {/* theme-menu-four */}

                <div className="theme-inner-banner">
                    <InnerBanner intro="Team Details" currpage="Team"/>
                    <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one"/>
                    <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two"/>
                </div>
                {/* /.theme-inner-banner */}

                <div className="team-details mt-110 mb-160 lg-mt-60 lg-mb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-10 col-lg-12 col-md-10 m-auto">
                                <TeamDetailsOne />
                                {/* /.main-bg */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* /.team-details */}

                <div className="fancy-short-banner-five">
                    <div className="container">
                        <div className="bg-wrapper">
                            <BannerFive/>
                        </div>
                        {/* /.bg-wrapper */}
                    </div>
                    {/* /.container */}
                </div>
                {/* /.fancy-short-banner-five */}

                <div className="footer-style-four space-fix-one theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                            <div className="subscribe-area">
                                <div className="row align-items-center">
                                    <div className="col-md-6">
                                        <div className="title-style-four sm-pb-20">
                                            <h4 className="main-title">Join Our <span>Newsletter</span> &amp; Get updated.</h4>
                                        </div>
                                        {/* /.title-style-four */}
                                    </div>
                                    <div className="col-md-6">
                                        <div className="subscribe-form">
                                            <form action="#">
                                                <input type="email" placeholder="Enter your email"/>
                                                <button className="ripple-btn tran3s">Subscribe</button>
                                            </form>
                                            <p>We only send interesting and relevant emails.</p>
                                        </div>
                                        {/* /.subscribe-form */}
                                    </div>
                                </div>
                            </div>
                            {/* /.subscribe-area */}
                            <FooterFour/>
                            <div className="bottom-footer">
                                <CopyRightFour/>
                            </div>
                        </div>
                        {/* /.inner-wrapper */}
                    </div>
                </div>
                {/* /.footer-style-four */}

            </div>
        </Fragment>
    )
}

export default TeamDetails