import React, { Fragment, useEffect, useState } from 'react';


import './MegaMenu.css'
import { HomeSetting, MainMenu } from '../../services/shared-service';
import { IMG_URL } from '../../shared/constent/img';

const ThemeMainMenu1 = () => {

    const [menu, setMenu] = useState([]);
    const [homeSetting, setHomeSetting] = useState([]);
    const [isActive, setIsActive] = useState(true);
    let className  ='dropdown-menu mt-0'
    let img = IMG_URL

    useEffect(() => {
        getHomeSetting();
        MainMenu().then((res) => {
            setMenu(res)
        });
    }, [])

    const getHomeSetting = () => {
        HomeSetting().then((res) => {
            setHomeSetting(res)
        })
    }

    return (
        <Fragment>
            <div className="collapse navbar-collapse" id="navbarExampleOnHover">
                <ul className="navbar-nav me-auto ps-lg-0" style={{ paddingLeft: '0.15rem' }}>
                    <li>
                        <div className="logo" >
                            <a href="/"  style={{verticalAlign: 'middle'}}>
                                <img style={{width:'200px', height: '40px', marginTop: '5px'}} src={`${img}${homeSetting[0]?.logo}`} alt=""  />
                            </a>
                        </div>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li> */}
                    {
                        menu && menu.map((data, i) => (
                            <li className="nav-item dropdown dropdown-hover position-static" key={i}>
                                {
                                    data?.sub_menu && data?.sub_menu?.length > 0 ?
                                        <>
                                            {data?.menu_type == 'Page' ?
                                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                                    data-mdb-toggle="dropdown" aria-expanded="false">{data?.page_name}</a> :
                                                <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                                                    data-mdb-toggle="dropdown" aria-expanded="false">{data?.menu_name}</a>
                                            }

                                            <div className={className} aria-labelledby="navbarDropdown"  >
                                                <div className="container">
                                                    <div className="row">
                                                        {data?.sub_menu && data?.sub_menu.map((val, i) => (
                                                            <div className="col-md-3 col-lg-3 mb-3 " key={i}>
                                                                {
                                                                    val.sub_sub_menu && val.sub_sub_menu.length > 0 ?
                                                                        <>
                                                                            <div className="list-group list-group-flush headings-data">
                                                                                {val?.menu_type == 'Page' ?
                                                                                    <>
                                                                                        <a className="list-group-item-action" id="navbarDropdown" role="button" style={{color:'#02274a', fontWeight:'600'}}
                                                                                            data-mdb-toggle="dropdown" aria-expanded="false" href={val?.page_slug}>{val?.page_name}</a></>
                                                                                    : <> <a className="list-group-item-action" style={{color:'#02274a', fontWeight:'600'}} href={val?.menu_url} role="button">{val?.menu_name}</a></>
                                                                                }
                                                                                {val.sub_sub_menu && val.sub_sub_menu.map((item, i) => (
                                                                                    <div key={i}>
                                                                                        {
                                                                                            item.sub_sub_sub_menu && item.sub_sub_sub_menu.length > 0
                                                                                                ?
                                                                                                <>
                                                                                                    {item?.menu_type == 'Page' ?
                                                                                                        <a className="list-group-item-action" href={item?.page_slug} style={{color:'#02274a', fontWeight:'600'}} role="button">{item?.page_name}</a>
                                                                                                        : <a className="list-group-item-action" href={item?.menu_url} style={{color:'#02274a', fontWeight:'600'}} role="button">{item?.menu_name}</a>

                                                                                                    }
                                                                                                    <ul>
                                                                                                        {item.sub_sub_sub_menu && item.sub_sub_sub_menu.map((ele, i) => (
                                                                                                            <li key={i}>
                                                                                                                {ele?.menu_type == 'Page' ?
                                                                                                                    <a className="list-group-item-action" href={ele?.page_slug} role="button">{ele?.page_name}</a> :
                                                                                                                    <a className="list-group-item-action" href={ele?.menu_url} role="button">{ele?.menu_name}</a>
                                                                                                                }
                                                                                                            </li>
                                                                                                        ))}
                                                                                                    </ul>
                                                                                                </>
                                                                                                :
                                                                                                <>
                                                                                                    {item?.menu_type == 'Page' ?
                                                                                                        <a className="list-group-item-action" href={"/" + item?.page_slug} role="button">{item?.page_name}</a> :
                                                                                                        <a className="list-group-item-action" href={item?.menu_url} role="button">{item?.menu_name}</a>
                                                                                                    }
                                                                                                </>
                                                                                        }
                                                                                    </div>
                                                                                ))}

                                                                            </div>
                                                                        </>
                                                                        : <>
                                                                            {val?.menu_type == 'Page' ?
                                                                                <div className="list-group list-group-flush headings-data">
                                                                                    <a className="list-group-item-action" href={"/" + val?.page_slug} role="button">{val?.page_name}</a>
                                                                                </div>
                                                                                :
                                                                                <div className="list-group list-group-flush headings-data">
                                                                                    <a className="list-group-item-action" href={val?.menu_url} role="button">{val?.menu_name}</a>
                                                                                </div>
                                                                            }
                                                                        </>}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                            {data?.menu_type == 'Page' ?
                                                <a className="nav-link dropdown-toggle" href={data?.page_slug} role="button">{data?.page_name}</a> :
                                                <a className="nav-link dropdown-toggle" href={data?.menu_url} id="navbarDropdown" role="button"
                                                    data-mdb-toggle="dropdown" aria-expanded="false">{data?.menu_name}</a>
                                            }
                                        </>
                                }
                            </li>
                        ))}

                </ul>
            </div>
        </Fragment >
    )
}
export default ThemeMainMenu1