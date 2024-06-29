"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import InnerBanner from "../page-title/InnerBanner";
import CopyRightFour from "../footer/CopyRightFour";
import TopNavTwo from "../header/TopNavTwo";

import { useParams } from "next/navigation";
import { API_CONSTANTS } from "../../shared/constent/API.CONSTENT";
import HttpService from "../../services/http.service";
import FullWidthPage from "./FullWidthPage";

import FooterTwo from "../footer/FooterTwo";

import { IMG_URL } from "../../shared/constent/img";
// import WinnerList from './WinnerList';
import Cookies from "./Cookies";
import { Card, Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import CardGroup from "react-bootstrap/CardGroup";

const WinnerPhotoNew = () => {
  let slug = useParams();
  const [pageData, setPageData] = useState([]);
  let img = IMG_URL;

  useEffect(() => {
    getPageSlugData();
  }, [slug.pageComponent]);

  const getPageSlugData = async () => {
    let url = API_CONSTANTS.page.replace("abc", slug.pageComponent);

    const menuData = await HttpService().GET(url);
    setPageData(menuData?.data);
  };


  const mockData = {
    meta_title: 'Mock Meta Title',
    meta_description: 'This is a mock meta description.',
    page_content: '<p>This is mock page content data.</p>',
    banner: '/path/to/mock/banner.jpg',
    page_name: 'Mock Page Name',
  };


  return (
    <div className="main-page-wrapper">
      <Head>
        <title>{mockData.meta_title}</title>
        <meta name="description" content={mockData.meta_description} />
      </Head>

      <TopNavTwo />

      <div className="hero-banner-two">
        <div className="theme-inner-banner">
          <InnerBanner intro={mockData.page_name} currpage={mockData.page_name} />
          {mockData.banner && mockData.banner !== "" && (
            <img
              src={`${img}${mockData.banner}`}
              alt=""
              className="shapes illustration-two"
            />
          )}
        </div>
      </div>

      <div className="fancy-feature-twentyFive position-relative mt-20">
        <div className="container">
          <div dangerouslySetInnerHTML={{ __html: mockData.page_content }} />
        </div>
      </div>

      <div className="feedback-section-three" data-aos="fade-up">
        <div className="container">
          <div className="slider-wrapper mt-100">
            <Row xs={1} md={4} className="g-4">
              {Array.from({ length: 10 }).map((_, idx) => (
                <Col key={idx}>
                  <Card className="card text-center" style={{width: "18rem"}}>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>

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
  );
};

export default WinnerPhotoNew;
