import React, { Fragment } from "react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const ContactTwo = (props) => {
  console.log("chekc ressdhfksdfhsdjkh");
  const imgUrl = "https://api.we-matter.com/assets/admin/uploads/";
  return (
    <Fragment>
      <div className="row align-items-center">
        <div className="col-md-6 order-md-last">
          <div className="block-style-nine ps-lg-5 ms-xxl-3">
            <div className="title-style-three" data-aos="fade-up">
              <div className="sc-title">{props?.data?.sec6_1}</div>
              <h2 className="main-title">ABOUT US</h2>
              {/* {props?.data?.sec6_2} */}
            </div>
            {/* /.title-style-three */}
            <p className="pt-20 pb-30" data-aos="fade-up" data-aos-delay={80}>
              {props?.data?.sec6_3}
            </p>
            <Link
              href={props?.data?.sec6_4}
              className="btn-eight"
              data-aos="fade-up"
              data-aos-delay={130}
            >
              {props?.data?.sec6_5}
            </Link>
          </div>
          {/* /.block-style-nine */}
        </div>
        <div className="col-md-6 order-md-first" data-aos="fade-right">
          <div className="illustration-holder position-relative d-inline-block sm-mt-60">
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
              <img
                src={`${imgUrl}${props?.data?.secimg6}`}
                alt=""
                className="transform-img-meta"
              />
            </Tilt>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactTwo;
