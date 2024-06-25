import React, { Fragment } from "react";
import Image from "next/image";
import ils14 from "@/assets/images/assets/ils_14.svg";
import ils14_1 from "@/assets/images/assets/ils_14_1.svg";
import ils14_2 from "@/assets/images/assets/ils_14_2.svg";
import ils14_3 from "@/assets/images/assets/ils_14_3.svg";
import ils14_4 from "@/assets/images/assets/ils_14_4.svg";
import ils14_5 from "@/assets/images/assets/ils_14_5.svg";
import ils14_6 from "@/assets/images/assets/ils_14_6.svg";
import ils14_7 from "@/assets/images/assets/ils_14_7.svg";

const About = () => {
  return (
    <Fragment>
      <div className="fancy-feature-eighteen position-relative pt-200 pb-225 lg-pt-130 md-pt-100 xl-pb-150 lg-pb-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6 col-md-7 ms-auto">
              <div className="block-style-two" data-aos="fade-left">
                <div className="title-style-three">
                  <div className="sc-title">Over 150k+ Client</div>
                  <h2 className="main-title">
                    Target <span>Audience</span> for your business.
                  </h2>
                </div>
                {/* /.title-style-three */}
                <p className="pt-20 pb-25 lg-pb-20">
                  AI technology is perfect for best business solutions &amp; we
                  offer help to achieve your goals.
                </p>
                <ul className="style-none list-item color-rev">
                  <li>Various analysis options.</li>
                  <li>Page Load (time, size, number of requests).</li>
                  <li>Advance Data analysis operation.</li>
                </ul>
                <a href="about-us2.html" className="btn-eight mt-50 lg-mt-30">
                  More about us
                </a>
              </div>
              {/* /.block-style-two */}
            </div>
          </div>
        </div>

        <div className="illustration-holder" data-aos="fade-right">
          <Image
            src={ils14}
            alt=""
            width={100}
            height={100}
            className="w-100 main-illustration"
          />
          <Image
            src={ils14_1}
            alt=""
            width={100}
            height={100}
            className="shapes shape-one"
            data-aos="fade-down"
          />
          <Image
            src={ils14_2}
            alt=""
            width={100}
            height={100}
            className="shapes shape-two"
            data-aos="fade-down"
            data-aos-delay={100}
          />
          <Image
            src={ils14_3}
            alt=""
            width={100}
            height={100}
            className="shapes shape-three"
            data-aos="fade-down"
            data-aos-delay={200}
          />
          <Image
            src={ils14_4}
            alt=""
            width={100}
            height={100}
            className="shapes shape-four"
          />
          <Image
            src={ils14_5}
            alt=""
            width={100}
            height={100}
            className="shapes shape-five"
          />
          <Image
            src={ils14_6}
            alt=""
            width={100}
            height={100}
            className="shapes shape-six"
          />
          <Image
            src={ils14_7}
            alt=""
            width={100}
            height={100}
            className="shapes shape-seven"
          />
        </div>
        {/* /.illustration-holder */}
        <div className="shapes oval-one" />
        <div className="shapes oval-two" />
        <div className="shapes oval-three" />
      </div>
    </Fragment>
  );
};

export default About;
