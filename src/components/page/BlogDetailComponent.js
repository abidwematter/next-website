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
// import CopyRightFour from '../footer/CopyRightFour';
import TopNavTwo from '../header/TopNavTwo';
// import FooterTwo from '../footer/FooterTwo';

import { useParams } from 'next/navigation'

import { useEffect } from 'react';
import { API_CONSTANTS } from '../../shared/constent/API.CONSTENT';
import HttpService from '../../services/http.service';
import { useState } from 'react';
import { IMG_URL } from '../../shared/constent/img';
// import NotFound from '../../views/NotFound';
import ServicesDetails from '../../views/inner-pages/pages/services/ServicesDetails';

const BlogDetailComponent = () => {
    let slug = useParams();
    // const location = useLocation()
    // const propsData = location.state;
    // let img = IMG_URL
    const [pageData, setPageData] = useState([]);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        getPageSlugData();
    }, [slug.
        BlogDetailComponent]);

    const getPageSlugData = async () => {
        let url = API_CONSTANTS.details.replace(
            "abc",
            slug.BlogDetailComponent
        );
        const menuData = await HttpService().GET(url);
        setPageData(menuData?.data);
    }

 
    // const getCategoryData = async (id) => {
    //     let url = API_CONSTANTS.category.replace(
    //         "category_id",
    //         id
    //     );
    //     const menuData = await HttpService().GET(url);
    //     setCategory(menuData?.data)
    // }

    return (
        <Fragment>
            <div className="main-page-wrapper">
                <Head>
                    <title>{pageData[0]?.meta_title}</title>
                </Head>
                <TopNavTwo />

                <div className='hero-banner-two'>
                    <div className="theme-inner-banner">
                        <InnerBanner intro={pageData[0]?.news_title} currpage={pageData[0]?.news_title} />
                        <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one" />
                        <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two" />
                    </div>
                </div>               
                <ServicesDetails content={pageData[0]?.news_content} data={pageData[0]?.category_id}/>
            </div>
        </Fragment>
      
    )
}

export default BlogDetailComponent;
