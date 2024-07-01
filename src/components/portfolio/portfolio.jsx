// "use client";
// import "server-only";
import React, { Fragment } from "react";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Link from "next/link";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { IMG_URL } from "../../shared/constent/img";
import LightboxComponent from "./LightboxComponent";
import { ServiceCategory } from "../../services/shared-service";

const PortfolioContent = [
  {
    img: "img_01",
    tag: "Data Research",
    pjname: "Product Analysis",
    plus: "bi bi-plus",
    fade: "fade-right",
    dataDelay: "",
  },
  {
    img: "img_02",
    tag: "Design",
    pjname: "UI, UX Design",
    plus: "bi bi-plus",
    fade: "fade-right",
    dataDelay: "100",
  },
  {
    img: "img_03",
    tag: "Marketing",
    pjname: "Content Marketing",
    plus: "bi bi-plus",
    fade: "fade-right",
    dataDelay: "200",
  },
];

const images = [
  "/images/gallery/img_01.jpg",
  "/images/gallery/img_02.jpg",
  "/images/gallery/img_03.jpg",
  "/images/gallery/img_04.jpg",
  "/images/gallery/img_05.jpg",
  "/images/gallery/img_06.jpg",
  "/images/gallery/img_07.jpg",
  "/images/gallery/img_08.jpg",
];

// const Portfolio = (props) => {
//   const MAX_LENGTH = 100;
//   const MAX_LENGTH_TITLE = 100;

//   let img = IMG_URL;

//   return (
//     <Fragment>
//       <LightboxComponent />
//       <Tabs>
//         <TabPanel>
//           <div className="row gx-xxl-5">
//             {props?.data?.map((val, i) => (
//               <div
//                 key={i}
//                 className="col-lg-4 col-sm-6"
//                 data-aos="fade-right"
//                 data-aos-delay="200"
//               >
//                 <div className="portfolio-block-one mt-40 xs-mt-30">
//                   <div
//                     className="img-meta"
//                     style={{ maxWidth: "450px", height: "422px" }}
//                   >
//                     <img
//                       src={`${img}${val.banner}`}
//                       alt=""
//                       className="w-100"
//                       style={{ maxWidth: "450px", height: "280px" }}
//                     />
//                   </div>
//                   <Link
//                     href={`/${val?.slug}`}
//                     className="title d-flex flex-column"
//                   >
//                     <span className="pj-name">{val.name}</span>
//                     <span className="tag">
//                       {val.short_description.length > MAX_LENGTH ? (
//                         <div
//                           dangerouslySetInnerHTML={{
//                             __html:
//                               val.short_description.substring(0, MAX_LENGTH) +
//                               `...`,
//                           }}
//                         />
//                       ) : (
//                         <div
//                           dangerouslySetInnerHTML={{
//                             __html: val.short_description,
//                           }}
//                         />
//                       )}
//                     </span>
//                   </Link>
//                   {/* <div className="hover-state tran3s">
//                                         <a
//                                             href="#"
//                                             onClick={() => setIsOpen(!isOpen)}
//                                             className="fancybox tran3s"
//                                             title="Click for large view"><i className="bi bi-plus"/></a>
//                                     </div> */}
//                 </div>
//                 {/* /.portfolio-block-one */}
//               </div>
//             ))}
//           </div>
//         </TabPanel>
//       </Tabs>
//     </Fragment>
//   );
// };

// export default Portfolio;

// import React from 'react'

const portfolio = () => {
  return (
    <div>portfolio</div>
  )
}

export default portfolio
