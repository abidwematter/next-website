'use client';

import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link';
import { FooterThreeMenu, HomeSetting } from '../../services/shared-fetch-service'

const CopyRightFour = () => {
    const [footerThreeData, setFooterThreeData] = useState([]);
    const [homeSetting, setHomeSetting] = useState([])

    useEffect(() => {
        getFooterThree();
        getHomeSetting();
    }, []);

    const getFooterThree = () => {
        FooterThreeMenu().then((res) => {
            setFooterThreeData(res)
        })
    }
    const getHomeSetting = () => {
        HomeSetting().then((res) => {
            setHomeSetting(res)
        })
    }
    return (
        <Fragment>
            <div className="d-lg-flex justify-content-between align-items-center">
                <ul
                    className="order-lg-1 pb-15 d-flex justify-content-center footer-nav style-none">
                    {
                        footerThreeData && footerThreeData.map((val, i) => (
                            <li key={i}>
                                {
                                    val?.menu_type == 'Page' ?
                                    <a href={val?.page_slug}>{val?.page_name}</a> :
                                    <a href={val?.menu_url}>{val?.menu_url}</a>

                                }
                            </li>
                        ))
                    }
                </ul>
                <p className="copyright text-center order-lg-0 pb-15">{homeSetting[0]?.footer_copyright}</p>
            </div>
        </Fragment>
    )
}

export default CopyRightFour