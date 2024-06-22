import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { IMG_URL } from '../../shared/constent/img';


const FancyFeature25 = (props) => {
    const MAX_LENGTH = 120;
    const MAX_LENGTH_TITLE = 30;
    let img = IMG_URL;

    return (
        <Fragment>
            <div className="row">
                {props?.data?.map((val, i) => (
                    <div
                        key={i}
                        className="col-xl-4 col-sm-12 col-xs-12 d-flex"
                        data-aos='fade-up'
                        data-aos-delay='300'>
                        <div className="block-style-ten color-two tran3s mt-30">
                            <div className="icon d-flex align-items-end">
                                <img src={`${img}${val.photo}`} alt="" /></div>
                            <h6>
                                <a href={`service/${val?.slug}`} >{val.name}</a>
                            </h6>

                            {val.description.length > MAX_LENGTH ?
                                (
                                    <div dangerouslySetInnerHTML={{ __html: (val.description.substring(0, MAX_LENGTH)) + `...` }} />
                                ) :
                                <div dangerouslySetInnerHTML={{ __html: (val.description) }} />
                            }
                            {/* <div dangerouslySetInnerHTML={{ __html: (val.description) }} /> */}
                            <a href={`service/${val?.slug}`} className="read-btn tran3s"><i className='icon_39' /></a>
                        </div>
                        {/* /.block-style-ten */}
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default FancyFeature25