import React, { Fragment } from "react";
// import { Link, useParams } from 'react-router-dom';

import TopNavFour from "../../../../components/header/TopNavFour";
import CircularProgress from "../../../../components/skill/CircularProgress";
import BlockStyle15 from "../../../../components/blockStyle/BlockStyle15";
import BannerFive from "../../../../components/short-banner/BannerFive";
import NewsLetterForm from "../../../../components/form/NewsLetterForm";
import FooterFour from "../../../../components/footer/FooterFour";
import CopyRightFour from "../../../../components/footer/CopyRightFour";
import TopNavTwo from "../../../../components/header/TopNavTwo";
import { useState } from "react";
import { useEffect } from "react";
import { API_CONSTANTS } from "../../../../shared/constent/API.CONSTENT";
import HttpService from "../../../../services/http.service";
import FooterTwo from "../../../../components/footer/FooterTwo";
import Category from "../../../../components/blog/Category";
import { BlogData } from "../../../../services/shared-service";
import Cookies from "../../../../components/page/Cookies";
import { useParams } from "next/navigation";

const ServicesDetails = (props) => {
  console.log("check prosp", props);
  const [homePage, setHomePage] = useState([]);
  const [category, setCategory] = useState([]);

  let slug = useParams();
  let pageData = "";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getHomePageData();
  }, []);
  const getHomePageData = async () => {
    let url = API_CONSTANTS.homepage;
    const menuData = await HttpService().GET(url);
    setHomePage(menuData?.data);
  };

  useEffect(() => {
    getPaginatedData("1");
  }, []);

  const getPaginatedData = (page) => {
    pageData = page;
    BlogData(pageData).then((res) => {
      setCategory(res?.data);
    });
  };

  return (
    <Fragment>
      <div>
        <div className="service-details position-relative mt-160 mb-150 lg-mt-100 lg-mb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 order-lg-1">
                <div className="service-details-meta ps-lg-5 ms-xxl-4">
                  <div dangerouslySetInnerHTML={{ __html: props.content }} />
                </div>
              </div>
              {/* 
                            <div className="col-xl-3 col-lg-4 col-md-8 order-lg-0">
                                <div className="service-sidebar md-mt-60">
                                    <div className="service-category mb-40">
                                    {category && category.length > 0 ? <Category data={props?.data} /> : ''}

                                    </div>

                                    {
                                        homePage && homePage.map((val, i) => (
                                            <>
                                                {
                                                    val?.sec13_1 || val?.sec13_2 ? <div className="sidebar-quote mb-50">

                                                        <p>{val?.sec13_1}</p>
                                                        <div className='sidebar-quote-name' dangerouslySetInnerHTML={{ __html: (val?.sec13_2) }} />
                                                    
                                                    </div> : ''
                                                }
                                            </>


                                        ))
                                    }

                                </div>
                            </div>
                            */}
            </div>
          </div>
          <img
            src="images/shape/shape_48.svg"
            alt=""
            className="shapes bg-shape"
          />
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
      </div>
    </Fragment>
  );
};

export default ServicesDetails;
