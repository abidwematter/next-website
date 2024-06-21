import React, { Fragment } from 'react';

const FancyFeatureSix = (props) => {
    return (
        <Fragment>

            <div className="row gx-xxl-5 justify-content-center">
                <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay>
                    <div className="block-style-six text-center mt-40">
                        <div
                            className="icon"  style={{
                                backgroundColor:'rgba(68, 109, 255, 0.07)',
                                color: '#446DFE'
                            }}
                           ><i className="bi bi-check-lg"/></div>
                        <h6>{props?.data?.sec7_1}</h6>
                        <p>{props?.data?.sec7_2}</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay>
                    <div className="block-style-six text-center mt-40">
                        <div
                            className="icon" style={{
                                backgroundColor:'rgba(253, 232, 255, 1)',
                                color: '#F36EFF'
                            }}
                           ><i className="bi bi-check-lg"/></div>
                        <h6>{props?.data?.sec7_3}</h6>
                        <p>{props?.data?.sec7_4}</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-delay>
                    <div className="block-style-six text-center mt-40">
                        <div
                            className="icon" style={{
                                backgroundColor:'rgba(255, 122, 65, 0.12)',
                                color: '#FF7A41'
                            }}
                           ><i className="bi bi-check-lg"/></div>
                        <h6>{props?.data?.sec7_5}</h6>
                        <p>{props?.data?.sec7_6}</p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default FancyFeatureSix