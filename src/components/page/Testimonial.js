import React, { useEffect, useState } from 'react'
import TestimonialThree from '../testimonial/TestimonialThree'
// import BannerFive from '../short-banner/BannerFive';
import Head from 'next/head';
import { HomeTestimonial } from '../../services/shared-service';

const Testimonial = (props) => {
  const[data, setData] = useState([]);

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  })
  
  useEffect(() => {
    HomeTestimonial().then((res) => {
      setData(res)
    })
  },[])

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
      <div
        className="feedback-section-three"
        data-aos="fade-up">
        <div className="container">
          <div className="slider-wrapper mt-100" >
            <TestimonialThree data={data}/> 
          </div>
          {/* /.slider-wrapper */}
        </div>
        {/* /.container */}
      </div>
      {/* /.feedback-section-three */}

      {/* /.feedback-section-four */}


 
    </div>
  )
}

export default Testimonial