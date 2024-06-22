

import React, { useEffect, useState } from 'react';
// import BannerFive from '../short-banner/BannerFive'
// import NewsLetterForm from '../form/NewsLetterForm'
// import PortfolioGalleryThree from '../../components/portfolio/PortfolioGalleryThree';
import Head from 'next/head';

import { ClientData } from '../../services/shared-service';

// import { ClientData, EventPhotoData } from '../../services/shared-service';
// import PortfolioGalleryFour from '../portfolio/PortfolioGalleryFour';
import PaginationComponent1 from './pagination';
import PortfolioGalleryFive from '../portfolio/PortfolioGalleryFive';
import { Fragment } from 'react';
import InnerBanner from '../page-title/InnerBanner';
import TopNavTwo from '../header/TopNavTwo';
// import FooterFour from '../footer/FooterFour';
import CopyRightFour from '../footer/CopyRightFour';
import FooterTwo from '../footer/FooterTwo';
import Cookies from './Cookies';

const CompanyImage = (props) => {
  const [photoData, setPhotoData] = useState([]);
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
    ClientData(pageData).then((res) => {
      setPhotoData(res?.data);
      setTotalRecords(res?.total);
    })
  };
  return (
    <Fragment>
      <div className="main-page-wrapper">
        <div>
          <Head>
            <title>{props?.data?.meta_title}</title>
            <meta name="description" content={props?.data?.meta_description} />
          </Head>
          <TopNavTwo />
          <div className='hero-banner-two'>
          <div className="theme-inner-banner">
            <InnerBanner intro="Clients" currpage="Clients" />
            <img src="images/shape/shape_38.svg" alt="" className="shapes shape-one" />
            <img src="images/shape/shape_39.svg" alt="" className="shapes shape-two" />
          </div>
          </div>

          <div className="fancy-feature-twentyFive position-relative mt-20">
            <div className="container">
              <div dangerouslySetInnerHTML={{ __html: (props?.data?.page_content) }} />
            </div>
          </div>
          <div className="portfolio-gallery-three mt-40 mb-150 lg-mt-20 lg-mb-100">
            <div className="container">
              <PortfolioGalleryFive data={photoData} />

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
          <Cookies />
          <div className="footer-style-four space-fix-one theme-basic-footer">
                    <div className="container">
                        <div className="inner-wrapper">
                      
                            {/* /.subscribe-area */}
                            <FooterTwo />
                            <div className="bottom-footer">
                                <CopyRightFour />
                            </div>
                        </div>
                        {/* /.inner-wrapper */}
                    </div>
                </div>
          {/* /.portfolio-gallery-three */}
        </div>


      </div>
    </Fragment>




  )
}

export default CompanyImage