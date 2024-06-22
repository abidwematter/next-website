
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import InnerBanner from '../page-title/InnerBanner';
import CopyRightFour from '../footer/CopyRightFour';
import TopNavTwo from '../header/TopNavTwo';
import { useRouter } from 'next/router';

import { useParams } from 'next/navigation'
import { API_CONSTANTS } from '../../shared/constent/API.CONSTENT';
import HttpService from '../../services/http.service';
// import NewsComponent from './newsComponent';
// import FullWidthPage from './FullWidthPage';
// import Services from './Services';
// import Blog from './Blog';
import Testimonial from './Testimonial';
import CashStudies from './CashStudies';
// import EventVideo from './EventVideo'; 
// import Video from './Video';
// import EventPhoto from './EventPhoto';
// import Founder from './Founder';
// import Investors from './Investors';
// import Partners from './Partners';
// import Advisory from './Advisory';
// import TeamIndia from './TeamIndia';
// import TeamUSA from './TeamUSA';
// import Management from './Management';
// import FAQ from './FAQ';
// import AboutUs from './AboutUs';
// import Calculator from './Calculator';
// import Calendar from './Calendar';
// import PodCost from './PodCost';
import FooterTwo from '../footer/FooterTwo';
// import TestimonialVideo from './TestimonialVideo';
// import WinnersVideo from './WinnersVideo';
// import WinnerPhoto from './WinnerPhoto';
// import Registartion from './Registartion';
import { IMG_URL } from '../../shared/constent/img';
// import ContactUs from './ContactUs';
// import WinnerList from './WinnerList';
import Cookies from './Cookies';


const PageComponent = () => {


  let slug = useParams();
  console.log(slug.pageComponent, "abid slug")
  const [pageData, setPageData] = useState([]);
  let img = IMG_URL

  useEffect(() => {
    getPageSlugData();
  }, [slug.pageComponent]);

  const getPageSlugData = async () => {
    let url = API_CONSTANTS.page.replace(
      "abc",
      slug.pageComponent
    );

    const menuData = await HttpService().GET(url);
    setPageData(menuData?.data);

  }

  return (
    <div className="main-page-wrapper">
      <Head>
        <title>{pageData[0]?.meta_title}</title>

      </Head>

      <TopNavTwo />


      <div className='hero-banner-two'>
        <div className="theme-inner-banner">
          <InnerBanner intro={pageData[0]?.page_name} currpage={pageData[0]?.page_name} />
          {
            pageData[0]?.banner && pageData[0]?.banner !== "" ? <img src={`${img}${pageData[0]?.banner}`} alt="" className="shapes illustration-two" /> : ''
          }
          
        </div>
      </div>

      {/* <div className="theme-inner-banner">
      </div> */}

      {
        pageData && pageData[0]?.page_layout == 'Full Width Page Layout' ? <FullWidthPage data={pageData[0]} /> : ''
      }


      {
        pageData[0]?.page_layout == 'Testimonial' ? <Testimonial data={pageData[0]} /> : ''
      }


      {
        pageData[0]?.page_layout == 'Case Studies' ? <CashStudies data={pageData[0]} /> : ''
      }


      {/* ***************************************************************************** */}








      {/* {
        pageData && pageData[0]?.page_layout == 'Full Width Page Layout' ? <FullWidthPage data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Services' ? <Services data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Blog' ? <Blog data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Case Studies' ? <CashStudies data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'News' ? <NewsComponent data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'POD Cast' ? <PodCost data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Testimonial' ? <Testimonial data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Video' ? <Video data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Why We Video' ? <EventVideo data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Awards Video' ? <TestimonialVideo data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Company Video' ? <WinnersVideo data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Winner Photo' ? <WinnerPhoto data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Event Photo' ? <EventPhoto data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Founder' ? <Founder data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Investors' ? <Investors data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Partners' ? <Partners data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Advisory' ? <Advisory data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'India' ? <TeamIndia data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'USA' ? <TeamUSA data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Winners' ? <WinnerList data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Management' ? <Management data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'FAQ' ? <FAQ data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'About Us' ? <AboutUs data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Calculator' ? <Calculator data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Calendar' ? <Calendar data={pageData[0]} /> : ''
      }
      {
        pageData[0]?.page_layout == 'Registartion' ? <Registartion data={pageData[0]} /> : ''
      }

      {
        pageData[0]?.page_layout == 'Contact Us' ? <ContactUs data={pageData[0]} /> : ''
      }
 */}


      {/* {
        pageData == [] || pageData[0] == undefined ? <NotFound /> : ''
      } */}



      <Cookies />


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
  )
}

export default PageComponent