import React, { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import ContactForm from "../form/ContactForm";
import NewsLetterForm from "../form/NewsLetterForm";
import ContactThree from "../contact/ContactThree";
import { HomeSetting, contactAddress } from "../../services/shared-service";

const ContactUs = (props) => {
  const [contactData, setContactData] = useState([]);
  const [contactAddressNew, setContactAddressNew] = useState([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getContactData();
    getContactAddress();
  }, []);

  const getContactData = () => {
    HomeSetting().then((res) => {
      setContactData(res);
    });
  };

  const getContactAddress = () => {
    contactAddress().then((res) => {
      setContactAddressNew(res);
      console.log("addressData", res);
    });
  };

  return (
    <Fragment>
      <div className="main-page-wrapper">
        <Head>
          <title>{props?.data?.meta_title}</title>
          <meta name="description" content={props?.data?.meta_description} />
        </Head>
        {/* helmet end */}

        {/* /.theme-inner-banner */}

        <div className="contact-section-one mb-10 lg-mb-10">
          <div className="container">
            <ContactThree data={contactData} />
          </div>

          <div className="mt-100 lg-mt-70">
            <div className="container">
              <div className="row gx-xxl-5">
                <div className="col-lg-6 d-flex order-lg-last">
                  <div className="form-style-one">
                    <h3 className="form-title pb-40 lg-pb-20">Send Message</h3>
                    <ContactForm />
                  </div>
                  {/* /.form-style-one */}
                </div>
                <div className="col-lg-6 d-flex order-lg-first">
                  <div className="map-area-one mt-10 me-lg-4 md-mt-50">
                    <div className="mapouter">
                      <iframe
                        src={contactData[0]?.contact_map_iframe}
                        width="600"
                        height="450"
                        style={{
                          border: 0,
                        }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                  {/* /.map-area-one */}
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className="container">
            <div class="row">
              <div class="col-md-6 col-xs-12 mt-4">
                <div class="address-block-two mb-40 sm-mb-20">
                  <h5 class="title">US</h5>
                  <p>{contactAddressNew[0]?.name_us}</p>
                  <p>
                    <a href="maitto:{contactAddressNew[0]?.email_us}">
                      {contactAddressNew[0]?.email_us}
                    </a>
                  </p>
                  <p>
                    <a href="tel:{contactAddressNew[0]?.phone_us}">
                      {contactAddressNew[0]?.phone_us}
                    </a>
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-xs-12 mt-4">
                <div class="address-block-two mb-40 sm-mb-20">
                  <h5 class="title">India</h5>
                  <p>{contactAddressNew[0]?.name_in}</p>
                  <p>
                    <a href="maitto:{contactAddressNew[0]?.email_in}">
                      {contactAddressNew[0]?.email_in}
                    </a>
                  </p>
                  <p>
                    <a href="tel:{contactAddressNew[0]?.phone_in}">
                      {contactAddressNew[0]?.phone_in}
                    </a>
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-xs-12 mt-4">
                <div class="address-block-two mb-40 sm-mb-20">
                  <h5 class="title">Singapore</h5>
                  <p>{contactAddressNew[0]?.name_si}</p>
                  <p>
                    <a href="maitto:{contactAddressNew[0]?.email_si}">
                      {contactAddressNew[0]?.email_si}
                    </a>
                  </p>
                  <p>
                    <a href="tel:{contactAddressNew[0]?.phone_si}">
                      {contactAddressNew[0]?.phone_si}
                    </a>
                  </p>
                </div>
              </div>

              <div class="col-md-6 col-xs-12 mt-4">
                <div class="address-block-two mb-40 sm-mb-20">
                  <h5 class="title">Philippines</h5>
                  <p>{contactAddressNew[0]?.name_ph}</p>
                  <p>
                    <a href="maitto:{contactAddressNew[0]?.email_ph}">
                      {contactAddressNew[0]?.email_ph}
                    </a>
                  </p>
                  <p>
                    <a href="tel:{contactAddressNew[0]?.phone_ph}">
                      {contactAddressNew[0]?.phone_ph}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.contact-section-one */}

        {/* /.fancy-short-banner-five */}

        {/* /.footer-style-four */}
      </div>
    </Fragment>
  );
};

export default ContactUs;
