import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import ModalVideos from "../../../../components/ModalVideo/ModalVideos";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

import TopNavFour from "../../../../components/header/TopNavFour";
import FancyFeatureTwentyThree from "../../../../components/feature/FancyFeatureTwentyThree";
import CommonCounter from "../../../../components/counter/CommonCounter";
import TestimonialOne from "../../../../components/testimonial/TestimonialOne";
import ContactTwo from "../../../../components/contact/ContactTwo";
import BrandTwo from "../../../../components/brand/BrandTwo";
import FooterFour from "../../../../components/footer/FooterFour";
import CopyRightFour from "../../../../components/footer/CopyRightFour";
import NewsFormTwo from "../../../../components/form/NewsFormTwo";
import {
  AboutUs,
  HomeSucessStory,
  PartnerHomeData,
} from "../../../../services/shared-service";
import TestimonialTwo from "../../../../components/testimonial/TestimonialTwo";
import ImageList from "../../../../components/page/testimonial2";

const AboutUsTwo = () => {
  const [open, setOpen] = useState(false);
  const [aboutData, setAboutData] = useState([]);
  const [homeSucessStory, setHomeSucessStory] = useState([]);
  const [partnerData, setPartnerData] = useState([]);
  const imgUrl = "https://api.we-matter.com/assets/admin/uploads/";

  const OpenModal = () => {
    setOpen(!open);
  };

  useEffect(() => {
    AboutUs().then((res) => {
      setAboutData(res);
    });
    getHomeSucessStory();
    getPartnetData();
  }, []);

  const getHomeSucessStory = async () => {
    HomeSucessStory().then((res) => {
      setHomeSucessStory(res);
    });
  };

  const getPartnetData = async () => {
    PartnerHomeData().then((res) => {
      setPartnerData(res?.data);
    });
  };

  return (
    <Fragment>
      <div className="main-page-wrapper AboutCusPch">
        <ModalVideos isOpen={open} onClick={OpenModal} />

        {/* helmet end */}

        {/* <TopNavFour /> */}
        {aboutData &&
          aboutData.map((val, i) => (
            <div className="viir1" key={i}>
              <div className="viir2">
                <div className="theme-inner-banner space-fix-one">
                  <div className="container">
                    <h2 className="intro-title">{val?.sec1}</h2>
                    <ul className="page-breadcrumb style-none d-flex">
                      <li>
                        <Link href="/">Home</Link>
                      </li>
                      <li className="current-page">About us</li>
                    </ul>
                  </div>
                  <img
                    src={`${imgUrl}${val?.secimg1}`}
                    alt=""
                    className="shapes illustration-one"
                  />
                </div>

                {/* <div className="fancy-short-banner-four">
                                <div className="container"> */}
                {/* <div
                                        className="bg-wrapper d-flex align-items-center justify-content-center"
                                        style={{
                                            backgroundImage: `url(images/media/img_12.jpg)`
                                        }}>
                                        <a
                                            className="fancybox video-icon tran3s d-flex align-items-center justify-content-center"
                                            data-fancybox onClick={OpenModal}><i className="fas fa-play" /></a>
                                    </div> */}
                {/* </div>
                            </div> */}

                <div className="fancy-feature-twentyThree mt-30 mt--85">
                  <div className="container">
                    <FancyFeatureTwentyThree data={val} />
                  </div>
                </div>
              </div>

              {/* <div className="fancy-feature-twelve mt-130 pb-50 lg-mt-80">
                                <div className="container">
                                    <div className="row align-items-center align-items-xl-start">
                                        <div className="col-xl-5 col-md-6 order-md-last">
                                            <div className="block-style-nine color-two">
                                                <div className="title-style-three pb-10" data-aos="fade-up">
                                                    <div className="sc-title">{val?.sec3_1}</div>
                                                    <h2 className="main-title"></h2>{/* {val?.sec3_2} */}
              {/* </div>
                                                <ul className="style-none list-item">
                                                    <li data-aos="fade-up">{val?.sec3_3}</li>
                                                    <li data-aos="fade-up" data-aos-delay={100}>{val?.sec3_4}</li>
                                                    <li data-aos="fade-up" data-aos-delay={200}>{val?.sec3_5}</li>
                                                </ul>
                                            </div>
                                        </div> */}
              {/* //     <div className="col-xl-7 col-md-6 order-md-first" data-aos="fade-right">
                                    //         <div */}
              {/* //             className="illustration-holder position-relative d-inline-block pe-md-5 me-xxl-5 sm-mt-60">
                                    //             <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                                    //                 <img src={`${imgUrl}${val?.secimg3}`} alt="" className="transform-img-meta" />
                                    //             </Tilt>
                                    //         </div> 
                                        </div>
                                    // </div>
                                </div> */}
              {/* <img src={`${imgUrl}${val?.secimg3}`} alt="" className="shapes bg-shape" /> */}
              {/* </div> */}

              {/* <div className="counter-section-one mt-100">
                                <div className="container">
                                    <div className="inner-container bg-color">
                                        <CommonCounter />
                                    </div>
                                </div>
                            </div> */}

              <div className="feedback-section-four position-relative pb-75 lg-mt-110 sm-pb-20">
                <div className="container">
                  {/* <div className="title-style-three text-center" data-aos="fade-up">
                                        <div className="sc-title">{val?.sec5_1}</div>
                                        <h2 className="main-title">{val?.sec5_2}
                                        </h2>
                                    </div> */}
                  {/* /.title-style-three */}
                </div>
                {/* /.container */}
                {/* <div className="inner-content mt-90 lg-mt-60">
                                    <div className="slider-wrapper">
                                        <TestimonialTwo data={homeSucessStory} /> */}
                {/* /.feedback_slider_one */}
                {/* </div> */}
                {/* /.slider-wrapper */}
                {/* </div> */}
                {/* /.inner-content */}
                <div className="mt-100 lg-mt-70">
                  <div className="container">
                    <ContactTwo data={val} />
                  </div>
                </div>
                <img
                  src="images/shape/shape_46.svg"
                  alt=""
                  className="shapes bg-shape"
                />
              </div>

              {/* <div className="partner-section-two mb-130 lg-mb-80">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 m-auto">
                                            <div className='imageData'>
                                                <ImageList data={partnerData} />
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
              {/* /.container */}
              {/* </div> */}
            </div>
          ))}
      </div>
    </Fragment>
  );
};

export default AboutUsTwo;
