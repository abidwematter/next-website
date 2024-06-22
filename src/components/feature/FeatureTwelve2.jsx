import React, { Fragment } from 'react'
import { IMG_URL } from '../../shared/constent/img';

const FeatureTwelve2 = (props) => {

    return (
        <Fragment>
            <div className="block-style-nine color-two">
                {
                    props?.data?.map((val, i) => (
                        <div key={i}>
                            <div className="title-style-three pb-10" data-aos="fade-up" >
                                <div className="sc-title">{val?.sec4_1}</div>
                                <h2 className="main-title">{val?.sec4_2}</h2>
                            </div>
                            {/* /.title-style-three */}
                            <ul className="style-none list-item">
                                <li>{val?.sec4_4}</li>
                                <li>{val?.sec4_5}</li>
                                <li>{val?.sec4_6}</li>
                                <li>{val?.sec4_7}</li>
                            </ul>
                        </div>
                    ))
                }
            </div>
            {/* /.block-style-nine */}
        </Fragment>
    )
}

export default FeatureTwelve2