import React, { useEffect } from "react";
import AboutUsTwo from "../../views/inner-pages/pages/about-us/AboutUsTwo";
import Head from "next/head";

const AboutUs = (props) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  });
  return (
    <div>
      <Head>
        <title>{props?.data?.meta_title}</title>
        <meta name="description" content={props?.data?.meta_description} />
      </Head>
      <div className="fancy-feature-twentyFive position-relative mt-20 AboutCusPch">
        <div className="container">
          <div
            dangerouslySetInnerHTML={{ __html: props?.data?.page_content }}
          />
        </div>
        {/* /.container */}
      </div>
      <AboutUsTwo />
    </div>
  );
};

export default AboutUs;
