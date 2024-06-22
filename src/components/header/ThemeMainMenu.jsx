import React, { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';


import { API_CONSTANTS } from '../../shared/constent/API.CONSTENT';
import HttpService from '../../services/http.service';
import { MainMenu } from '../../services/shared-service';


const ThemeMainMenu = () => {
    const [menu, setMenu] = useState([])

    useEffect(() => {
        MainMenu().then((res) => {
            setMenu(res)
        })
    }, [])


    return (
        <Fragment>
            <ul className="navbar-nav">
            {/* <li className="d-block d-lg-none">
                    <div className="logo">
                        <Link href="/"><img src="images/logo/logo_01.png" alt="" width={130}/></Link>
                    </div>
                </li> */}
            <li className="nav-item">
                <Link className="nav-link" role="button" href="/">Home</Link></li>
                {
                    menu && menu.map((data, i) => (
                        <li className="nav-item dropdown" key={i}>
                            {
                                data?.sub_menu && data?.sub_menu?.length > 0 ?
                                    <>
                                        {data?.menu_type == 'Page' ?
                                            <a className="nav-link dropdown-toggle" href="#" role="button">{data?.page_name}</a> :
                                            <a className="nav-link dropdown-toggle" href="#" role="button">{data?.menu_name}</a>
                                        }
                                        <ul className="dropdown-menu">
                                            {data?.sub_menu && data?.sub_menu.map((val, i) => (
                                                <>
                                                    <li key={i} className="dropdown-submenu dropdown">
                                                        {
                                                            val.sub_sub_menu && val.sub_sub_menu.length > 0 ?
                                                                <>
                                                                    {val?.menu_type == 'Page' ?
                                                                        <a className="nav-link dropdown-toggle" href="#" role="button">{val?.page_name}</a> :
                                                                        <a className="nav-link dropdown-toggle" href="#" role="button">{val?.menu_name}</a>
                                                                    }
                                                                    <ul className="dropdown-menu">
                                                                        {val.sub_sub_menu && val.sub_sub_menu.map((item, i) => (
                                                                            <li class="dropdown-submenu dropdown" key={i}>
                                                                                {
                                                                                    item.sub_sub_sub_menu && item.sub_sub_sub_menu.length > 0
                                                                                        ?
                                                                                        <>
                                                                                            {item?.menu_type == 'Page' ?
                                                                                                <a className="nav-link dropdown-toggle" href="#" role="button">{item?.page_name}</a> :
                                                                                                <a className="nav-link dropdown-toggle" href="#" role="button">{item?.menu_name}</a>
                                                                                            }
                                                                                            <ul className="dropdown-menu">
                                                                                                {item.sub_sub_sub_menu && item.sub_sub_sub_menu.map((ele, i) => (
                                                                                                    <li key={i}>
                                                                                                        {ele?.menu_type == 'Page' ?
                                                                                                            <a className="nav-link" href={ele?.page_slug} role="button">{ele?.page_name}</a> :
                                                                                                            <a className="nav-link" href={ele?.menu_url} role="button">{ele?.menu_name}</a>
                                                                                                            }
                                                                                                    </li>
                                                                                                ))}
                                                                                            </ul>
                                                                                        </> :
                                                                                        <>
                                                                                            {item?.menu_type == 'Page' ?
                                                                                                <a className="nav-link" href={"/"+item?.page_slug} role="button">{item?.page_name}</a> :
                                                                                                <a className="nav-link" href={item?.menu_url} role="button">{item?.menu_name}</a>
                                                                                                }
                                                                                        </>
                                                                                }
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </> :
                                                                <>
                                                                    {val?.menu_type == 'Page' ?
                                                                        <a className="nav-link" href={"/"+val?.page_slug} role="button">{val?.page_name}</a> :
                                                                        <a className="nav-link" href={val?.menu_url} role="button">{val?.menu_name}</a>}
                                                                </>
                                                        }

                                                    </li>
                                                </>
                                            ))}
                                        </ul>
                                    </> : <>
                                        {data?.menu_type == 'Page' ?
                                            <a className="nav-link" href={data?.page_slug} role="button">{data?.page_name}</a> :
                                            <a className="nav-link" href={data?.menu_url} role="button">{data?.menu_name}</a>
                                        }
                                    </>
                            }

                        </li>

                    ))
                }
            </ul>
        </Fragment>
    )
}
export default ThemeMainMenu