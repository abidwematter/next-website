


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

// import { useSearchParams } from 'next/navigation';



import { useEffect } from 'react';
import { API_CONSTANTS } from '../../shared/constent/API.CONSTENT';
import HttpService from '../../services/http.service';
import { useState } from 'react';
import { IMG_URL } from '../../shared/constent/img';
import NotFound from '../../views/NotFound';
import BlogMasonryOne from '../blog/BlogMasonryOne';
import Cookies from './Cookies';

const SearchComponent = () => {
    const state = null;
    // const [data, setData] = useState([])
    const data = []

    console.log("check state ", state);

    // useEffect(() => {
    //     getSerachData()
    // }, [state])

    // const getSerachData = async () => {
    //     let url = API_CONSTANTS.serach.replace(
    //         "xyz",
    //         state
    //     )
    //     const menuData = await HttpService().GET(url);
    //     console.log("check menu", menuData?.data);
    //     setData(menuData?.data)
    // }

    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Head>
                    <title>Search</title>
                </Head>
                <TopNavTwo />
                <div className='hero-banner-two'>
                    <div className="theme-inner-banner">
                        <InnerBanner intro="Serach" currpage="Serach" />
                        <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one" />
                        <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two" />
                    </div>
                </div>

                <>
                    <div className="blog-details ">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-11 m-auto">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="page-pagination-one col-md-6 mx-auto">
                                            <BlogMasonryOne data={data?.data}/>
                                            </div>

                                            {/* <div className="page-pagination-one col-md-6 mx-auto">
             
              </div> */}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Cookies />
                    <div className="footer-style-four space-fix-one theme-basic-footer">
                        <div className="container">
                            <div className="inner-wrapper">

                                <div className="footer-style-four theme-basic-footer">
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
                    </div>
                </>



            </div>
        </Fragment>
    )
}

export default SearchComponent;
