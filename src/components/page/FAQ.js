import Head from "next/head";
import React, { Fragment, useEffect, useState } from "react";
import NewsLetterForm from "../form/NewsLetterForm";
import FaqTwo from "../faq/FaqTwo";
import { FaqCategory, FaqData } from "../../services/shared-service";
import { API_CONSTANTS } from "../../shared/constent/API.CONSTENT";
import HttpService from "../../services/http.service";

const FAQ = (props) => {
  const [faqValue, setFaqValue] = useState([]);
  const [faqCategory, setFaqCategory] = useState([]);
  const [homePage, setHomePage] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });

  useEffect(() => {
    getFaqCategory();
    FaqData().then((res) => {
      setFaqValue(res);
    });
    getHomePageData();
  }, []);

  const getFaqCategory = () => {
    FaqCategory().then((res) => { });
  };

  const getHomePageData = async () => {
    let url = API_CONSTANTS.homepage;
    const menuData = await HttpService().GET(url);
    setHomePage(menuData?.data);
  };

  return (
    <Fragment>
      <Head>
        <title>{props?.data?.meta_title}</title>
        <meta name="description" content={props?.data?.meta_description} />
      </Head>
      <div className="fancy-feature-twentyFive position-relative mt-20">
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: props?.data?.page_content }} />
        </div>
      </div>
      <div className="faq-section-one mt-130 mb-150 lg-mt-80 lg-mb-80">
        <div className="container">
          <div className="row">
            <div className="col-xxl-10 col-xl-11 m-auto">
              <div className="row">
                <div className="col-xl-4 col-lg-5">
                  {homePage &&
                    homePage.map((val, i) => (
                      <div
                        className="block-style-five md-pb-50"
                        data-aos="fade-right"
                        key={i} // Add key prop here
                      >
                        <div className="title-style-one">
                          <div className="sc-title-three">{val?.sec8_1}</div>
                          <h2 className="main-title">{val?.sec8_2}</h2>
                        </div>
                        {/* /.title-style-one */}
                        <p className="pt-10 pb-15">{val?.sec8_3}</p>
                        <a href={val?.sec8_5} className="btn-five ripple-btn">
                          {val?.sec8_4}
                        </a>
                      </div>
                    ))}
                </div>
                <div className="col-xl-8 col-lg-9" data-aos="fade-left">
                  <h3 className="faq-title">{props?.data?.page_name}</h3>
                  <FaqTwo data={faqValue} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.container */}
    </Fragment>
  );
}

export default FAQ;
