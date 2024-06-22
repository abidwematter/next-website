import React, { useEffect, useState } from 'react';
// import BannerFive from '../short-banner/BannerFive'
// import NewsLetterForm from '../form/NewsLetterForm'
// import PortfolioGalleryThree from '../../components/portfolio/PortfolioGalleryThree';
import Head from 'next/head';
import { EventPhotoData, eventPhotocat } from '../../services/shared-service';
import PortfolioGalleryFour from '../portfolio/PortfolioGalleryFour';
import PaginationComponent1 from './pagination';
import { API_CONSTANTS } from '../../shared/constent/API.CONSTENT';

const EventPhoto = (props) => {
  const [photoData, setPhotoData] = useState([]);
  const [totalRecords, setTotalRecords] = useState([]);
  const [eventphotoCat, setEventPhotoCat] = useState()
  let pageData = '';
  let api = API_CONSTANTS.newEventPhoto

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  })

  useEffect(() => {
    getPaginatedData('1');
    getCategory()
  }, [])

  const getPaginatedData = (page) => {
    pageData = page
    EventPhotoData(pageData).then((res) => {
      setPhotoData(res?.data);
      setTotalRecords(res?.total);
    })
  };

  const getCategory = () => {
    eventPhotocat(pageData).then((res) => {
      setEventPhotoCat(res)
    })
  }

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
          <PortfolioGalleryFour api={api} eventphotoCat={eventphotoCat}/>
        </div>
      </div>

    </div>
  )
}

export default EventPhoto