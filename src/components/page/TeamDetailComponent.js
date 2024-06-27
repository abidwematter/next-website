'use client';

import React, { useEffect, useState } from 'react'
import TeamDetailsOne from '../team/TeamDetailsOne'
import { API_CONSTANTS } from '../../shared/constent/API.CONSTENT';
import Head from 'next/head';
import { useParams } from "next/navigation";
import HttpService from '../../services/http.service';
import CopyRightFour from '../footer/CopyRightFour';
import FooterTwo from '../footer/FooterTwo';
import NewsLetterForm from '../form/NewsLetterForm';
import TopNavTwo from '../header/TopNavTwo';
import InnerBanner from '../page-title/InnerBanner';
import Cookies from './Cookies';


const TeamDetailComponent = (props) => {
    let slug = useParams();
    const [pageData, setPageData] = useState([]);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    })


    useEffect(() => {
        getPageSlugData();
    }, [slug.ServiceDetailComponent]);

    const getPageSlugData = async () => {
        let url = API_CONSTANTS.teamDetails.replace(
            "abhinandan-singh",
            slug.ServiceDetailComponent
        );
        const menuData = await HttpService().GET(url);
        setPageData(menuData?.data);

    }

    return (
        <div>
            <div className="main-page-wrapper">
                <Head>
                    <title>{props?.data?.meta_title}</title>
                    <meta name="description" content={props?.data?.meta_description} />
                </Head>
                <TopNavTwo />
                <div className='hero-banner-two'>
                    <div className="theme-inner-banner">
                        <InnerBanner intro={pageData[0]?.name} currpage={pageData[0]?.name} />
                        <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one" />
                        <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two" />
                    </div>
                </div>

                <div className="team-details mt-110 mb-160 lg-mt-60 lg-mb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-10 col-lg-12 col-md-10 m-auto">
                                <TeamDetailsOne data={pageData} />
                                {/* /.main-bg */}
                            </div>
                        </div>
                    </div>
                </div>
                <Cookies />
                <div className="footer-style-two theme-basic-footer">
                      
                            <div className="container">
                                <div className="inner-wrapper">
                                    <FooterTwo />
                                    <div className="bottom-footer">
                                        <CopyRightFour />
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default TeamDetailComponent