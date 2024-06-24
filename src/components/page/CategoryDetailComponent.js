import React from 'react'
import { Fragment } from 'react';
import Head  from 'next/head';
import InnerBanner from '../page-title/InnerBanner';
import Category from '../blog/Category';
import CopyRightFour from '../footer/CopyRightFour';
import TopNavTwo from '../header/TopNavTwo';
import FooterTwo from '../footer/FooterTwo';
import { useParams } from 'next/navigation'
import { useEffect } from 'react';
import { API_CONSTANTS } from '../../shared/constent/API.CONSTENT';
import HttpService from '../../services/http.service';
import { useState } from 'react';
import { IMG_URL } from '../../shared/constent/img';
import BlogMasonryOne from '../blog/BlogMasonryOne';
import Cookies from './Cookies';

const CategoryDetailComponent = () => {
    let slug = useParams();
    let img = IMG_URL
    const [pageData, setPageData] = useState([])

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        getPageSlugData();
    }, [slug.CategoryDetailComponent
    ]);

    const getPageSlugData = async () => {
        let url = API_CONSTANTS.blog_Category.replace(
            "abc",
            slug.CategoryDetailComponent

        );
        const menuData = await HttpService().GET(url);
        setPageData(menuData?.data);
    }

    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Head>
                    <title>{pageData.sub_cat_name}</title>
                </Head>
                <TopNavTwo />
                <div className='hero-banner-two'>
                    <div className="theme-inner-banner">
                        <InnerBanner intro={pageData.sub_cat_name} currpage={pageData.sub_cat_name} />
                        <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one" />
                        <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two" />
                    </div>
                </div>

                <>
                    <div className="blog-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-11 m-auto">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <BlogMasonryOne data={pageData?.data} />
                                            <div className="">

                                            </div>

                                            {/* <div className=" pt-90">
             
              </div> */}
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <div className="blog-sidebar ps-xl-5 ps-lg-3 me-xxl-5 mt-45 md-mt-70">

                                                <div className="sidebar-category mb-50">
                                                    <h5 className="sidebar-title">Category</h5>
                                                    {pageData?.data && pageData?.data.length > 0 ? <Category data={pageData?.data[0].category_id} /> : ''}

                                                </div>

                                            </div>
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
                </>



            </div>
        </Fragment>
    )
}

export default CategoryDetailComponent;
