import React, { Fragment, useEffect } from 'react';

const BrandThree = (props) => {
    const imgUrl = 'https://api.we-matter.com/assets/admin/uploads/'

    return (
        <Fragment>
            <ul className="style-none text-center mt-40 lg-mt-10">
                <li className="partner-logo-block-one d-inline-block aos-init aos-animate" data-aos="fade-up" data-aos-delay="">
                    <a href={props?.imgData?.sec3_1} className="d-flex align-items-center justify-content-center">
                        <img src={`${imgUrl}${props?.imgData?.secimg3_1}`} alt="" />
                    </a>
                </li>
                <li className="partner-logo-block-one d-inline-block aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <a href={props?.imgData?.sec3_2} className="d-flex align-items-center justify-content-center">
                        <img src={`${imgUrl}${props?.imgData?.secimg3_2}`} alt="" />
                    </a>
                </li>
                <li className="partner-logo-block-one d-inline-block aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <a href={props?.imgData?.sec3_3} className="d-flex align-items-center justify-content-center">
                        <img src={`${imgUrl}${props?.imgData?.secimg3_3}`} alt="" />
                    </a>
                </li>
                <li className="partner-logo-block-one d-inline-block aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                    <a href={props?.imgData?.sec3_4} className="d-flex align-items-center justify-content-center">
                        <img src={`${imgUrl}${props?.imgData?.secimg3_4}`} alt="" />
                    </a>
                </li>
                <li className="partner-logo-block-one d-inline-block aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                    <a href={props?.imgData?.sec3_5} className="d-flex align-items-center justify-content-center">
                        <img src={`${imgUrl}${props?.imgData?.secimg3_5}`} alt="" />
                    </a>
                </li>
            </ul>
        </Fragment>
    )
}

export default BrandThree