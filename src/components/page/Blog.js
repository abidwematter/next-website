import React, { useEffect, useState } from "react";
import BlogMasonryOne from "../blog/BlogMasonryOne";
import SearchInput from "../form/SearchInput";
import Category from "../blog/Category";
import Keyword from "../blog/Keyword";
import BannerAdd from "../blog/BannerAdd";
import BannerFive from "../short-banner/BannerFive";
import NewsLetterForm from "../form/NewsLetterForm";
// import { Helmet } from 'react-helmet';
import Head from "next/head";
import { BlogData, CategoryData } from "../../services/shared-service";
import { API_CONSTANTS } from "../../shared/constent/API.CONSTENT";
import PaginationComponent1 from "./pagination";

const Blog = (props) => {
  const [blogValue, setBlogValue] = useState([]);
  const [totalRecords, setTotalRecords] = useState([]);
  let pageData = "";

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getPaginatedData("1");
  }, []);

  const getPaginatedData = (page) => {
    pageData = page;
    BlogData(pageData).then((res) => {
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
      <div className="blog-section-three">
        <div className="container">
          <div className="row gx-xxl-5">
            <div className="col-lg-12">
              <BlogMasonryOne data={blogValue} />
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

              {/* <div className="page-pagination-one col-md-6 mx-auto">
             
              </div> */}
            </div>
            {/* <div className="col-lg-4 col-md-6">
              <div className="blog-sidebar ps-xl-5 ps-lg-3 me-xxl-5 mt-45 md-mt-70">
              
                <div className="sidebar-category mb-50">
                  <h5 className="sidebar-title">Category</h5>
                  {blogValue && blogValue.length > 0 ? <Category data={blogValue[0].category_id} /> : ''}

                </div>

              </div>
            </div> */}
          </div>
        </div>
        {/* /.container */}
      </div>
      {/* /.blog-section-three */}
    </div>
  );
};

export default Blog;
