import React, {Fragment} from 'react';


const FancyFeatureTwentyThree = (props) => {
    return (
        <Fragment>
            <div className="row gx-xxl-5">
                    <div
                        className="col-lg-4 col-sm-6 d-flex"
                        data-aos-delay>
                        <div className="block-style-fourteen lg-mt-20">
                            <h5>{props?.data?.sec2_1}</h5>
                            <p>{props?.data?.sec2_2}</p>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-sm-6 d-flex"
                        data-aos-delay>
                        <div className="block-style-fourteen lg-mt-20">
                            <h5>{props?.data?.sec2_3}</h5>
                            <p>{props?.data?.sec2_4}</p>
                        </div>
                    </div>
                    <div
                        className="col-lg-4 col-sm-6 d-flex"
                        data-aos-delay>
                        <div className="block-style-fourteen lg-mt-20">
                            <h5>{props?.data?.sec2_5}</h5>
                            <p>{props?.data?.sec2_6}</p>
                        </div>
                    </div>
            </div>
        </Fragment>
    )
}

export default FancyFeatureTwentyThree