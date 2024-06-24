import React from 'react'
import { Fragment } from 'react';
import Head from 'next/head';
import InnerBanner from '../page-title/InnerBanner';
// import BlogDetailsForm from '../form/BlogDetailsForm';
// import SearchInput from '../form/SearchInput';
// import Category from '../blog/Category';
// import Keyword from '../blog/Keyword';
// import BannerAdd from '../blog/BannerAdd';
// import NewsLetterForm from '../form/NewsLetterForm';
// import FooterFour from '../footer/FooterFour';
import CopyRightFour from '../footer/CopyRightFour';
import TopNavTwo from '../header/TopNavTwo';
import FooterTwo from '../footer/FooterTwo';
import Link from 'next/link';
import { useParams } from "next/navigation";

import { useEffect } from 'react';
import { API_CONSTANTS } from '../../shared/constent/API.CONSTENT';
import HttpService from '../../services/http.service';
import { useState } from 'react';
import { Service, ServiceCategory } from '../../services/shared-service';
// import NotFound from '../../views/NotFound';
// import { log } from 'react-modal/lib/helpers/ariaAppHider';
import Cookies from './Cookies';
// import { Imprima } from 'next/font/google';

const ServiceDetailComponent = () => {
    let slug = useParams();
    const [pageData, setPageData] = useState([]);
    const [category, setCategory] = useState([]);
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    })


    useEffect(() => {
        getPageSlugData();
    }, [slug.ServiceDetailComponent]);

    useEffect(() => {
        getServiceCategory();
    }, [])

    const getPageSlugData = async () => {
        let url = API_CONSTANTS.serviceDetails.replace(
            "dd",
            slug.ServiceDetailComponent
        );
        const menuData = await HttpService().GET(url);
        setPageData(menuData?.data);
    }

    const getServiceCategory = () => {
        Service().then((res) => {
            console.log("check res data", res);
            setCategory(res?.data)
        })
    }




    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Head>
                    <title>{pageData[0]?.meta_title}</title>
                </Head>
                <TopNavTwo />

                <div className='hero-banner-two'>
                    <div className="theme-inner-banner">
                        <InnerBanner intro={pageData[0]?.name} currpage={pageData[0]?.name} />
                        <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one" />
                        <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two" />
                    </div>
                </div>
                <div
                    className="service-details position-relative mt-160 lg-mt-100 lg-mb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-9 col-lg-8 order-lg-1">
                                <div className="service-details-meta ps-lg-5 ms-xxl-4">
                                    <div dangerouslySetInnerHTML={{ __html: (pageData[0]?.description) }} />
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
                                <div className="service-sidebar md-mt-60">
                                    <div className="service-category mb-40">

                                        <ul className="style-none">
                                            {category.map((val, i) => (
                                                <li key={i} className='category'>
                                                    <Link href={"/service/" + val?.slug}>{val.name} </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
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
        </Fragment>
    )
}

export default ServiceDetailComponent;
