import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import { IMG_URL } from '../../shared/constent/img';

const FancyFeatureFour = (props) => {
    let img= IMG_URL
    return (
        <Fragment>
        {props.data.map((val, i)=>(
            <div
            key={i}
            className="col-lg-4 mt-40 d-flex"
            data-aos
            data-aos-delay={val.dataDelay}>
            <div className="block-style-four">
                <div className="icon d-flex align-items-end justify-content-center">
                <img src={`${img}${val.photo}`} alt=""/>
                </div>
                <Link to={`service/${val?.slug}`}>
                    <h5>{val.name}</h5>
                </Link>
                <div dangerouslySetInnerHTML={{__html: (val.short_description)}} />
                <Link to={`service/${val?.slug}`}className="more-btn"><img src="images/icon/icon_13.svg" alt="" className="tran3s"/></Link>
            </div>
            {/* /.block-style-four */}
        </div>
       ))}
        </Fragment>
    )
}

export default FancyFeatureFour