import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";

const AboutTwo = (props) => {
  const imgUrl = "https://api.we-matter.com/assets/admin/uploads/";
  return (
    <Fragment>
      <div className="fancy-feature-two position-relative mt-200 lg-mt-120">
        <div className="container">
          <div className="row">
            <div className="col-xxl-6 col-lg-6 col-md-7 ms-auto">
              <div className="block-style-two" data-aos="fade-left">
                <div className="title-style-one">
                  <div className="sc-title-three">{props?.data?.sec4_1}</div>
                  <h2 className="main-title">{props?.data?.sec4_2}</h2>
                </div>
                {/* /.title-style-one */}
                <p className="pt-10 pb-20 lg-pb-10">{props?.data?.sec4_3}</p>
                <ul className="style-none list-item color-rev">
                  {props?.data?.sec4_4 ? <li>{props?.data?.sec4_4}</li> : ""}
                  {props?.data?.sec4_5 ? <li>{props?.data?.sec4_5}</li> : ""}
                  {props?.data?.sec4_6 ? <li>{props?.data?.sec4_6}</li> : ""}
                  {props?.data?.sec4_7 ? <li>{props?.data?.sec4_7}</li> : ""}
                </ul>
                {/* <div className="btn-three rev mt-55 lg-mt-30">{props?.data?.sec4_8} <a href={props?.data?.sec4_9}>{props?.data?.sec4_10}<i className="fas fa-chevron-right"/> nnn</a> */}
                {/* </div> */}
              </div>
              {/* /.block-style-two */}
            </div>
          </div>
        </div>
        {/* /.container */}
        <div className="illustration-holder-two sm-mt-40">
          {/* <Image
            src={`${imgUrl}${props?.data?.secimg4_1}`}
            alt=""
            width={100}
            height={100}
            className="main-illustration w-100"
          />
          <Image
            src={`${imgUrl}${props?.data?.secimg4_2}`}
            alt=""
            width={100}
            height={100}
            className="shapes shape-one fortune-image"
          />
          <Image
            src={`${imgUrl}${props?.data?.secimg4_3}`}
            alt=""
            width={100}
            height={100}
            className="shapes shape-two"
            data-aos="fade-up"
            data-aos-anchor=".fancy-feature-two"
            data-aos-delay={100}
            data-aos-duration={2000}
          />
          <Image
            src={`${imgUrl}${props?.data?.secimg4_4}`}
            alt=""
            width={100}
            height={100}
            className="shapes shape-three"
            data-aos="fade-up"
            data-aos-anchor=".fancy-feature-two"
            data-aos-delay={150}
            data-aos-duration={2000}
          />
          <Image
            src={`${imgUrl}${props?.data?.secimg4_5}`}
            alt=""
            width={100}
            height={100}
            className="shapes shape-four"
          />
          <Image
            src={`${imgUrl}${props?.data?.secimg4_6}`}
            alt=""
            width={100}
            height={100}
            className="shapes shape-five"
          /> */}

                <Image
                  src={`${imgUrl}${props?.data?.secimg4_1}`} 
                  alt="" 
                  width={700}
                  height={600}
                  quality={100}
                  // priority={true}
                  className="main-illustration"
                />
                    {/* <img  src={`${imgUrl}${props?.data?.secimg4_2}`} alt="" className="shapes shape-one fortune-image" /> */}
                    <Image 
                      src={`${imgUrl}${props?.data?.secimg4_2}`} alt="" width={100} height={500} className="shapes shape-one fortune-image" />
                   
                    {/* {console.log(`${imgUrl}${props?.data?.secimg4_6}`)} */}
                    {/* <img
                        src={`${imgUrl}${props?.data?.secimg4_3}`}
                        alt=""
                        // width={300}
                        // height={300}
                        className="shapes shape-two"
                        data-aos="fade-up"
                        data-aos-anchor=".fancy-feature-two"
                        data-aos-delay={100}
                        data-aos-duration={2000}
                    />
                    <img 
                        src={`${imgUrl}${props?.data?.secimg4_4}`}
                        alt=""
                        className="shapes shape-three"
                        data-aos="fade-up"
                        data-aos-anchor=".fancy-feature-two"
                        data-aos-delay={150}
                        data-aos-duration={2000}/>
                    <img  src={`${imgUrl}${props?.data?.secimg4_5}`} alt="" className="shapes shape-four"/>
                    <img  src={`${imgUrl}${props?.data?.secimg4_6}`} alt="" className="shapes shape-five"/> */}
        </div>
        {/* /.illustration-holder-two */}
      </div>
      {/* /.fancy-feature-two */}
    </Fragment>
  );
};

export default AboutTwo;
