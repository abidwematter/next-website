import React, {Fragment} from 'react';
import Link from 'next/link';

const CallToAction2 = (props) => {
    return (
        <Fragment>
            <div className="row align-items-center gx-xxl-5">
                <div className="col-lg-6 text-center text-lg-start" data-aos="fade-right">
                    <div className="sub-title">{props?.data?.sec10_1}</div>
                    <h3 className="pe-xl-5 md-pb-20">{props?.data?.sec10_3}</h3>
                </div>
                <div className="col-lg-6 text-center text-lg-end" data-aos="fade-left">
                    <a href={props?.data?.sec10_4} className="msg-btn tran3s">{props?.data?.sec10_2}</a>
                </div>
            </div>
        </Fragment>
    )
}

export default CallToAction2