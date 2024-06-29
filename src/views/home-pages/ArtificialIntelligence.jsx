import Head from "next/head";
import Link from "next/link";
import dynamic from "next/dynamic";

import {
  HomeSetting,
  HomeBlog,
  HomeService,
  HomeFaq,
  HomeSucessStory,
  PartnerHomeData,
  HomePage,
} from "../../services/shared-fetch-service.js";

//server components
// import TestimonialTwo from "../../components/testimonial/TestimonialTwo";

const TestimonialTwo = dynamic(
  () => import("../../components/testimonial/TestimonialTwo"),
  {
    ssr: false,
  }
);

import Faq from "../../components/faq/Faq";
import CounterTwo from "../../components/counter/CounterTwo";
import HeroBannerTwo from "../../components/hero-banner/HeroBannerTwo";
import FancyFeatureSix from "../../components/feature/FancyFeatureSix";
import CopyRightFour from "../../components/footer/CopyRightFour";

//client components
import TopNavTwo from "../../components/header/TopNavTwo";
import FooterTwo from "../../components/footer/FooterTwo";

import AboutTwo from "../../components/about/AboutTwo";
import BlogTwo from "../../components/blog/BlogTwo";
import CallToAction2 from "../../components/call-to-action/CallToAction2";
import Skill from "../../components/skill/Skill";

import ImageList from "../../components/page/testimonial2";

// import Portfolio from "../../components/portfolio/portfolio";
import PortfolioNew from "@/components/portfolio/PortfolioNew.jsx";
import Cookies from "../../components/page/Cookies";

// import { API_CONSTANTS } from '../../shared/constent/API.CONSTENT';
// import HttpService from '../../services/http.service';
// import HttpFetchService from "../../services/http-fetch-service";

// import {  HomeTestimonial,  } from '../../services/shared-service';
// import TestimonialData from '../../components/page/testimonialData';
// import TestimonialFive from '../../components/testimonial/TestimonialFive';

import Image from "next/image";
import shape06 from "@/assets/images/shape/shape_06.svg";
import shape07 from "@/assets/images/shape/shape_07.svg";
import shape08 from "@/assets/images/shape/shape_08.svg";
import shape09 from "@/assets/images/shape/shape_09.svg";
import shape10 from "@/assets/images/shape/shape_10.svg";
import shape11 from "@/assets/images/shape/shape_11.svg";
import shape12 from "@/assets/images/shape/shape_12.svg";
import shape13 from "@/assets/images/shape/shape_13.svg";
import shape14 from "@/assets/images/shape/shape_14.svg";
import shape15 from "@/assets/images/shape/shape_15.svg";
import shape16 from "@/assets/images/shape/shape_16.svg";
import shape17 from "@/assets/images/shape/shape_17.svg";


// export const metadata = {
//   title: {
//     template: "%s | W.E. Matter",
//     default: "W.E. Matter",
//   },
//   description: "The official Next.js Learn Dashboard built with App Router.",
// };



// import { Metadata } from 'next'
 
// either Static metadata
// export const metadata: Metadata = {
//   title: '...',
// }
 
// or Dynamic metadata


const ArtificialIntelligence = async () => 
  {
  const imgUrl = "https://api.we-matter.com/assets/admin/uploads/";
  const homePage = await HomePage();
  const homeSetting = await HomeSetting();
  const homeService = await HomeService();
  const homeSucessStory = await HomeSucessStory();
  const homeFaq = await HomeFaq();
  const homeBlog = await HomeBlog();
  const partnerData = await PartnerHomeData();

  // useEffect(() => {
  //   // Set the delay time in milliseconds (e.g., 3000ms = 3 seconds)
  //   const delay = 1000;

  //   const timeoutId = setTimeout(() => {
  //     setShowComponent(true);
  //   }, delay);

  //   // Clear the timeout if the component unmounts before the delay
  //   return () => clearTimeout(timeoutId);
  // }, []);

  //************************************************************************** */


  

  return (
    <div className="main-page-wrapper">

      <Head>
        <title>{homeSetting?.[0]?.meta_title_home}</title>

        
        <meta name="keywords" content={homeSetting[0]?.meta_keyword_home} />
        <meta
          name="description"
          content={homeSetting[0]?.meta_description_home}
        />
      </Head>

      <TopNavTwo />

      <HeroBannerTwo data={homePage} />

      {/* {showComponent ? <CounterTwo /> : <span></span>} */}
      <CounterTwo />
      {homePage.map((val, i) => (
        <div key={i}>
          <div className="partner-section-two mt-110">
            <div className="container">
              <div className="title-style-one text-center" data-aos="fade-up">
                <div className="sc-title-three">{val?.sec2_1}</div>
                <h2 className="main-title md">{val?.sec2_2}</h2>
              </div>
              <div className="imageData">
                <ImageList data={partnerData} />
              </div>
            </div>
          </div>
          <div
            className="feedback-section-two mt-10 xl-mt-8 md-mt-6"
            data-aos="fade-up"
          >
            <Image
              src={shape08}
              alt=""
              width={250}
              height={130}
              className="shapes shape-one"
            />
       
            <Image
              src={shape09}
              alt=""
              width={250}
              height={120}
              className="shapes shape-two"
            />
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-10 col-lg-8 col-md-8 col-sm-8">
                  <div className="title-style-one text-center text-sm-start xs-pb-20">
                    <h2 className="main-title">{val?.sec5_1} </h2>
                  </div>
                  {/* /.title-style-one */}
                </div>
              </div>
            </div>
            {/* /.container */}
            <div className="inner-content mt-30 md-mt-20">
              <div className="slider-wrapper">
                <TestimonialTwo data={homeSucessStory} />
              </div>
              {/* /.slider-wrapper */}
            </div>
            {/* /.inner-content */}
          </div>

          {/*  Fortue 30 New */}

          <AboutTwo data={val} />
          {/*  Fortue 30 New #ND */}

          {/* /.fancy-feature-four */}

          {/* /about-two */}
          <div className="fancy-feature-four position-relative mt-20">
            <div className="bg-wrapper">
              <div className="inner-container">
                <div className="container">
                  <div className="row gx-xxl-5">
                    <div
                      className="col-lg-12 mt-40"
                      data-aos="fade-up"
                      style={{ textAlign: "center" }}
                    >
                      <div className="d-flex justify-content-center flex-column">
                        <div className="title-style-one">
                          <div className="sc-title-three">{val?.sec11_1}</div>
                          <h2 className="main-title">{val?.sec11_2}</h2>
                        </div>
                        {/* <div>
                                                        <div className="btn-three rev mt-35 lg-mt-20">{val?.sec11_3} 
                                                        {
                                                            val?.sec11_4 ? <Link href={val?.sec11_5}>{val?.sec11_4}<i className="fas fa-chevron-right" /></Link> : ''
                                                        }
                                                        
                                                        </div>
                                                    </div> */}
                      </div>
                    </div>
                    {/* <FancyFeatureFour data={homeService} /> */}
                    {/* <Portfolio data={homeService} /> */}
                    <PortfolioNew data={homeService} />
                  </div>
                </div>
              </div>
              {/* /.inner-container */}
            </div>
            {/* /.bg-wrapper */}
            <Image
              src={shape06}
              alt=""
              width={150}
              height={150}
              className="shapes shape-one"
            />
            <Image
              src={shape07}
              alt=""
              width={150}
              height={150}
              className="shapes shape-two"
            />

            {/* <img src="images/shape/shape_06.svg" alt="" className="shapes shape-one" />
                            <img src="images/shape/shape_07.svg" alt="" className="shapes shape-two" /> */}
          </div>
          {/* fancy-feature-five position-relative mt-50 xs-mt-20 */}
          <div className="">
            <div className="container fffffff">
              <div className="row align-items-center">
                <div className="col-xxl-6 col-lg-7 col-md-8">
                  <div
                    className="block-style-five pt-60 md-pt-20"
                    data-aos="fade-right"
                  >
                    <div className="title-style-one">
                      <div className="sc-title-three">{val?.sec6_1}</div>
                      <h2 className="main-title">{val?.sec6_2}</h2>
                    </div>
                    {/* /.title-style-one */}
                    <p className="pt-10 pb-70">{val?.sec6_3}</p>
                    <Skill data={val} />
                    {/* /.skills-progress */}
                    <a
                      href={val?.sec6_7}
                      className="btn-five ripple-btn mt-60 lg-mt-50"
                    >
                      {val?.sec6_6}
                    </a>
                  </div>
                  {/* /.block-style-five */}
                </div>
                <div className="col-xxl-6 col-lg-5 col-md-4 text-end">
                  <div className="illustration-holder d-inline-block position-relative xs-mt-20">
                    <img
                      src={`${imgUrl}${val?.secimg6_1}`}
                      alt=""
                      className="main-illustration w-100"
                    />
                    <img
                      src={`${imgUrl}${val?.secimg6_2}`}
                      alt=""
                      className="shapes shape-one"
                    />
                    <img
                      src={`${imgUrl}${val?.secimg6_3}`}
                      alt=""
                      className="shapes shape-two"
                    />
                    <img
                      src={`${imgUrl}${val?.secimg6_4}`}
                      alt=""
                      className="shapes shape-three"
                      data-aos="fade-down"
                      data-aos-duration={1800}
                    />
                    <img
                      src={`${imgUrl}${val?.secimg6_5}`}
                      alt=""
                      className="shapes shape-four"
                      data-aos="fade-left"
                      data-aos-duration={1800}
                    />
                    <img
                      src={`${imgUrl}${val?.secimg6_6}`}
                      alt=""
                      className="shapes shape-five"
                    />
                  </div>
                  {/*  /.illustration-holder */}
                </div>
              </div>
            </div>
            {/* /.container */}
          </div>
          <div className="fancy-feature-six position-relative mt-80">
            <div className="container">
              <div className="bg-wrapper">
                <FancyFeatureSix data={val} />
              </div>
              {/* /.bg-wrapper */}
            </div>
            {/* /.container */}
            <Image
              src={shape10}
              alt=""
              width={150}
              height={150}
              className="shapes shape-one"
            />
            <Image
              src={shape11}
              alt=""
              width={150}
              height={150}
              className="shapes shape-two"
            />

            {/* <img src="images/shape/shape_10.svg" alt="" className="shapes shape-one" />
                            <img src="images/shape/shape_11.svg" alt="" className="shapes shape-two" /> */}
          </div>
          {/* <div
                            className="feedback-section-three position-relative mt-250 lg-mt-130"
                            data-aos="fade-up">
                            <div className="container">
                                <div className="slider-wrapper">
                                    <TestimonialThree data={homeTestimonial} />
                                </div>
                            </div>
                            <img src="images/shape/shape_12.svg" alt="" className="shapes shape-one" />
                        </div> */}
          <div className="fancy-feature-seven mt-30 lg-mt-50 sm-mt-20">
            <div className="container">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  <div
                    className="block-style-five md-pb-50"
                    data-aos="fade-right"
                  >
                    <div className="title-style-one">
                      <div className="sc-title-three">{val?.sec8_1} </div>
                      <h2 className="main-title">{val?.sec8_2}</h2>
                    </div>
                    {/* /.title-style-one */}
                    <p className="pt-10 pb-15">{val?.sec8_3}</p>
                    <a href={val?.sec8_5} className="btn-five ripple-btn">
                      {val?.sec8_4}
                    </a>
                  </div>
                  {/* /.block-style-five */}
                </div>
                <div className="col-lg-7 col-lg-6 ms-auto" data-aos="fade-left">
                  <Faq data={homeFaq} />
                  <Link className="btn-five ripple-btn" href="./faq">
                    know more
                  </Link>
                </div>
              </div>
            </div>

            <Image
              src={shape13}
              alt=""
              width={150}
              height={150}
              className="shapes shape-one"
            />
            <Image
              src={shape14}
              alt=""
              width={400}
              // height={150}
              className="shapes shape-two"
            />
            <Image
              src={shape15}
              alt=""
              width={400}
              // height={150}
              className="shapes shape-three"
            />

            {/* <img src="images/shape/shape_13.svg" alt="" className="shapes shape-one" />
                            <img src="images/shape/shape_14.svg" alt="" className="shapes shape-two" />
                            <img src="images/shape/shape_15.svg" alt="" className="shapes shape-three" /> */}
          </div>
          <div className="blog-section-two mt-110 lg-mt-50">
            <div className="container">
              <div
                className="title-style-one text-center mb-50 lg-mb-20"
                data-aos="fade-up"
              >
                <div className="sc-title-three">{val?.sec9_1}</div>
                <h2 className="main-title">{val?.sec9_2}</h2>
              </div>
              <BlogTwo data={homeBlog} />
            </div>
          </div>

          <div className="fancy-short-banner-one position-relative mt-160 lg-mt-100 md-mt-80">
            <div className="container">
              <div className="bg-wrapper">
                <CallToAction2 data={val} />
              </div>
            </div>
            <Image
              src={shape10}
              height={130}
              // width={170}
              alt=""
              className="shapes shape-one"
            />
            <Image
              src={shape11}
              height={130}
              // width={170}
              alt=""
              className="shapes shape-two"
            />
          </div>
          <Cookies />
          <div className="footer-style-two theme-basic-footer">
            <Image
              src={shape16}
              alt=""
              width={150}
              height={150}
              className="shapes shape-one"
            />
            <Image
              src={shape17}
              alt=""
              width={150}
              height={150}
              className="shapes shape-two"
            />

            {/* <img src="images/shape/shape_16.svg" alt="" className="shapes shape-one" />
                            <img src="images/shape/shape_17.svg" alt="" className="shapes shape-two" /> */}
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
      ))}
    </div>
  );
};

export default ArtificialIntelligence;
