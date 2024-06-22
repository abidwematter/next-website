
import React, { useEffect, useState } from 'react';
// import BannerFive from '../short-banner/BannerFive'
// import NewsLetterForm from '../form/NewsLetterForm'
// import PortfolioGalleryThree from '../../components/portfolio/PortfolioGalleryThree';

import Head from 'next/head';
import {  WinnerPhotoData } from '../../services/shared-service';

// import { EventPhotoData, WinnerPhotoData } from '../../services/shared-service';
import PortfolioGalleryFour from '../portfolio/PortfolioGalleryFour';
import PaginationComponent1 from './pagination';

const WinnerPhoto = (props) => {
  const [photoData, setPhotoData] = useState([]);
  const [totalRecords, setTotalRecords] = useState([]);
  let pageData = ''

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  })

  useEffect(() => {
      getPaginatedData('1');
  },[])

  const getPaginatedData =(page) => {
    pageData = page
    WinnerPhotoData(pageData).then((res) => {
      setPhotoData(res?.data)
      setTotalRecords(res?.total);
      })
  };
  return (
    <div>
      <Head>
          <title>{props?.data?.meta_title}</title>
          <meta name="description" content={props?.data?.meta_description} />
        </Head>
        <div className="fancy-feature-twentyFive position-relative mt-20">
          <div className="container">
            <div dangerouslySetInnerHTML={{ __html: (props?.data?.page_content) }} />
          </div>
        </div>
    <div className="portfolio-gallery-three mt-40 mb-150 lg-mt-20 lg-mb-100">
      <div className="container">
        <PortfolioGalleryFour data={photoData}/>
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

 
  </div>
  )
}

export default WinnerPhoto