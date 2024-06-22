import React from 'react';
// import BlogMasonryOne from '../blog/BlogMasonryOne'
// import SearchInput from '../form/SearchInput'
// import Category from '../blog/Category'
// import Keyword from '../blog/Keyword'
// import BannerAdd from '../blog/BannerAdd'
// import BannerFive from '../short-banner/BannerFive'
// import NewsLetterForm from '../form/NewsLetterForm';
// import { Helmet } from 'react-helmet';
import Head from 'next/head';
import { CaseCategory, CaseStudyData } from '../../services/shared-service';
import { useEffect } from 'react';
import { useState } from 'react';
import PaginationComponent1 from './pagination';

const CashStudies = (props) => {

  const[data, setData] = useState([]);
  const[category, setCategory] = useState([])
  const [totalRecords, setTotalRecords] = useState([]);
  let pageData = ''


  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  })
  
  useEffect(() => {   
    getPaginatedData('1')
    getCaseCategory()
  },[]);

  const getPaginatedData =(page) =>  {
    pageData = page;
    CaseStudyData(pageData).then((res) => {
      setData(res?.data);
      setTotalRecords(res?.total);
    })
  }

  const getCaseCategory =() => {
    CaseCategory().then((res) => {
      setCategory(res)
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
    <div className="blog-section-three mb-150 lg-pt-40 lg-mb-100">
      <div className="container">
        <div className="row gx-xxl-5">
          <div className="col-lg-12">
            {/* <BlogMasonryOne data={data}/> */}
            <div className="page-pagination-one col-md-6 mx-auto">
            <ul className="d-flex align-items-center style-none">
              <li >
                {
                  totalRecords > 12 && <PaginationComponent1
                    getAllData={getPaginatedData}
                    totalRecords={totalRecords}
                    itemsCountPerPage='12' />
                }
              </li>

            </ul>
          </div>
            {/* /.row */}
            {/* <div className="page-pagination-one col-md-6 mx-auto">
              <ul className="d-flex align-items-center style-none">
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li className="arrow">
                  <a href="#"><i className="bi bi-arrow-right" /></a>
                </li>
              </ul>
            </div> */}
          </div>
          {/* <div className="col-lg-4 col-md-6">
            <div className="blog-sidebar ps-xl-5 ps-lg-3 me-xxl-5 mt-45 md-mt-70">
  
              <div className="sidebar-category mb-50">
                <h5 className="sidebar-title">Category</h5>
                {data && data.length > 0 ? <Category data={data[0].category_id}/>  : ''}

              </div>
             
            </div>
          </div> */}
        </div>
      </div>
      {/* /.container */}
    </div>
    {/* /.blog-section-three */}



  </div>
  )
}

export default CashStudies