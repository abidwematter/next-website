import React, { Fragment } from 'react';
import { IMG_URL } from '../../shared/constent/img';
import { useEffect } from 'react';
import './teamDetailsone.css';

const TeamDetailsOne = (props) => {
    let img = IMG_URL


    return (
        <Fragment>
            {props?.data.map((val, i) => (
                <div key={i} className="main-bg d-lg-flex align-items-center">
                    <div className="img-meta">
                        <img src={`${img}${val.photo}`} alt="" className='img-logo'/></div>
                    <div className="text-wrapper">
                        <div className="name">{val.name}</div>
                        <div className="position">{val.degree}</div>
                        <div dangerouslySetInnerHTML={{ __html: (val.detail) }} />
                        <ul className="social-icon style-none d-flex pt-15">
                            <li>
                                <a href={val.facebook}><i className='fab fa-facebook-f' /></a>
                            </li>
                            <li>
                                <a href={val.twitter}><i className='fab fa-twitter' /></a>
                            </li>
                            <li>
                                <a href={val.website}><i className='fab fa-dribbble' /></a>
                            </li>
                            <li>
                                <a href={val.email}><i className='far fa-envelope' /></a>
                            </li>
                        </ul>
                    </div>
                    {/* /.text-wrapper */}
                </div>
            ))}
            {/* /.team-details */}
        </Fragment>
    )
}

export default TeamDetailsOne