'use client';

import React, {Fragment, useEffect, useState} from 'react';
import Link from 'next/link';
import NewsFormTwo from '../form/NewsFormTwo';
import { FooterMenu, FooterThreeMenu, FooterTwoMenu, HomeSetting } from '../../services/shared-service';
import { IMG_URL } from '../../shared/constent/img';
import Socialicon from './socialicon';


const FooterTwo = () => {
    const[footerOneData, setFooterOneData] = useState([]);
    const[footerTwoData, setFooterTwoData] = useState([]);
    const [homeSetting, setHomeSetting] = useState([])
    let img = IMG_URL

    useEffect(() => {
        getHomeSetting()
        getFooterOne();
        getFooterTwo();
    },[]);

    const getFooterOne = () => {
        FooterMenu().then((res) => {
            setFooterOneData(res)
        })
    }

    const getFooterTwo = () => {
        FooterTwoMenu().then((res) => {
            setFooterTwoData(res)
        })
    }

    const getHomeSetting = () => {
        HomeSetting().then((res) => {
            setHomeSetting(res)
        })
    }



    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-3 footer-intro mb-40">
                    <div className="logo">
                        <Link href="/"> <img src={`${img}${homeSetting[0]?.logo}`} alt="Logo" width='auto' /></Link>
                    </div>
                    
                    <ul className="footer-nav-link style-none">
                    <li>{homeSetting[0]?.footer_about}</li>
                    </ul>
                    <Socialicon />
                    {/* <ul className="d-flex social-icon style-none">
                        {SocialContent.map((val, i)=>(
                            <li key={i}>
                            <a target='_blank' href={val.routerPath}><i className={val.icon}/></a>
                        </li>
                        ))}
                    </ul> */}
                </div>
                <div className="col-lg-2 col-md-3 col-sm-6 mb-30">
                    <h5 className="footer-title"> {homeSetting[0]?.home_subtitle_service} </h5>
                    <ul className="footer-nav-link style-none">
                    {footerOneData && footerOneData.map((data, i)=>(
                            <li key={i}>
                                {
                                    data?.menu_type == 'Page' ? 
                                    <a href={'/' + data?.page_slug}>{data?.page_name}</a> :
                                    <>
                                     <a href={data?.menu_url}>{data?.menu_name}</a>
                                    </>
                            }
                             
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="col-xl-2 col-md-3 col-sm-6 mb-30">
                    <h5 className="footer-title">{homeSetting[0]?.home_status_service} </h5>
                    <ul className="footer-nav-link style-none">
                    {footerTwoData && footerTwoData.map((data, i)=>(
                            <li key={i}>
                                {
                                    data?.menu_type == 'Page' ? 
                                    <a href={'/' + data?.page_slug}>{data?.page_name}</a> :
                                    <>
                                     <a href={ data?.menu_url}>{data?.menu_name}</a>
                                    </>
                            }
                             
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="col-xl-5 col-lg-4 col-md-6 mb-30">
                    <div className="newsletter ps-xl-5">
                        <h5 className="footer-title"> {homeSetting[0]?.home_title_team_member} 
                        </h5>
                        <p> {homeSetting[0]?.home_subtitle_team_member} </p>
                        <NewsFormTwo />
                        <div className="info"> {homeSetting[0]?.home_status_team_member} </div>
                    </div>
                    {/* /.newsletter */}
                </div>
            </div>
        </Fragment>
    )
}

export default FooterTwo