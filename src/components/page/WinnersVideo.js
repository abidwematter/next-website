import React, { useEffect, useState } from 'react';
import Head from 'next/head';
// import BannerFive from '../short-banner/BannerFive'
// import NewsLetterForm from '../form/NewsLetterForm'
import PortfolioGalleryThree from '../../components/portfolio/PortfolioGalleryThree';
import { WinnerVideoData } from '../../services/shared-service';

// import { TestimonialVideoData, VideoData, WinnerVideoData } from '../../services/shared-service';
import PaginationComponent1 from './pagination';


const WinnersVideo = (props) => {
    const [videoData, setVideoData] = useState([]);
    const [totalRecords, setTotalRecords] = useState([]);

    let pageData = ''

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    })

    useEffect(() => {
        getPaginatedData('1');
    }, [])

    const getPaginatedData = (page) => {
        pageData = page
        WinnerVideoData(pageData).then((res) => {
            setVideoData(res?.data);
            setTotalRecords(res?.total);
        })
    };

    return (
        <div>
            <Head>
                <title>{props?.data?.meta_title}</title>
                <meta name="description" content={props?.data?.meta_description} />
            </Head>
            <div className="portfolio-gallery-three mt-40 mb-150 lg-mt-20 lg-mb-100">
                <div className="container">
                    <div dangerouslySetInnerHTML={{ __html: (props?.data?.page_content) }} />
                    <PortfolioGalleryThree data={videoData} />
                    <div className="page-pagination-one col-md-6 mx-auto">
                        
                        <ul className="d-flex align-items-center style-none">
                            <li >
                                {
                                    totalRecords > 12 && <PaginationComponent1
                                        getAllData={getPaginatedData}
                                        totalRecords={totalRecords}
                                        itemsCountPerPage='12' />
                                }
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
            {/* /.portfolio-gallery-three */}

            {/* /.fancy-short-banner-five */}


        </div>
    )
}

export default WinnersVideo