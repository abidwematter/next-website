import React, { useEffect } from "react";
import TeamMemberTwo from "../team/TeamMemberTwo";
import BannerFive from "../short-banner/BannerFive";
import NewsLetterForm from "../form/NewsLetterForm";
// import { Helmet } from "react-helmet";
import Head from "next/head";
import { useState } from "react";
import PaginationComponent1 from "./pagination";
import { ManagementData } from "../../services/shared-service";

const Management = (props) => {
  const [blogValue, setBlogValue] = useState([]);
  const [totalRecords, setTotalRecords] = useState([]);
  let pageData = "";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getPaginatedData("1");
  }, []);

  const getPaginatedData = (page) => {
    pageData = page;
    ManagementData(pageData).then((res) => {
      setBlogValue(res?.data);
      setTotalRecords(res?.total);
    });
  };

  return (
    <div>
      <Head>
        <title>{props?.data?.meta_title}</title>
        <meta name="description" content={props?.data?.meta_description} />
      </Head>
      <div className="fancy-feature-twentyFive position-relative mt-20">
        <div className="container">
          <div
            dangerouslySetInnerHTML={{ __html: props?.data?.page_content }}
          />
        </div>
      </div>
      <div className="team-section-two mt-110 mb-160 lg-mt-60 lg-mb-100">
        <div className="container">
          <TeamMemberTwo data={blogValue} />
          <div className="page-pagination-one col-md-6 mx-auto">
            <ul className="d-flex align-items-center style-none">
              <li>
                {totalRecords > 12 && (
                  <PaginationComponent1
                    getAllData={getPaginatedData}
                    totalRecords={totalRecords}
                    itemsCountPerPage="12"
                  />
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /.team-section-two */}
    </div>
  );
};

export default Management;
