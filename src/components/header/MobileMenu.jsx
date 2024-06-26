import React, { Fragment, useState } from 'react';

import {
  ProSidebar,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
  Menu,
  MenuItem,
  SubMenu
} from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';
import { HomeSetting, MainMenu } from '../../services/shared-service';
import { useEffect } from 'react';
import { IMG_URL } from '../../shared/constent/img';


const MobileMenu = () => {

  const [click, setClick] = useState(false);
  const [menu, setMenu] = useState([]);
  const [homeSetting, setHomeSetting] = useState([]);
  let img = IMG_URL


  const handleClick = () => {
    setClick(!click);
  }

  useEffect(() => {
    getHomeSetting()
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
      <div className="mobile-menu-wrapper">
      <a href="/" className="d-block"><img  src={`${img}${homeSetting[0]?.logo}`} alt="" style={{"width":"130px",
    "marginLeft": "14px",
    "marginTop": "0px",
    "paddingTop": "6px"}}/></a>
        <div className="moblie-menu-toggler">
          <button className={click ? "navbar-toggler active d-block d-lg-none" : "navbar-toggler d-block d-lg-none"} type="button" onClick={handleClick}>
            <span />
          </button>
        </div>
        <ProSidebar
          className={click
            ? 'mobile-menu menu-open'
            : 'mobile-menu'}>
          <SidebarHeader>
            <div className="mobile-logo">
              <a href="/"><img src={`${img}${homeSetting[0]?.logo}`} alt="" /></a>
            </div>
            <div className="close-menu" onClick={handleClick}>
              <i class="bi bi-x-lg"></i>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">

              {
                menu && menu.map((data, i) => (
                  <div key={i}>
                    {
                      data?.sub_menu && data?.sub_menu?.length > 0 ?
                        <>
                          {data?.menu_type == 'Page' ?
                            <SubMenu title={data?.page_name}>
                              {data?.sub_menu && data?.sub_menu.map((val, i) => (
                                <div key={i}>
                                  {
                                    val.sub_sub_menu && val.sub_sub_menu.length > 0 ?
                                      <>
                                        {val?.menu_type == 'Page' ?
                                          <SubMenu title={val?.page_name}>
                                            {val.sub_sub_menu && val.sub_sub_menu.map((item, i) => (
                                              <div key={i}>
                                                {
                                                  item.sub_sub_sub_menu && item.sub_sub_sub_menu.length > 0 ?
                                                    <>
                                                      {item?.menu_type == 'Page' ?
                                                        <SubMenu title={item?.page_name}>
                                                          {item.sub_sub_sub_menu && item.sub_sub_sub_menu.map((ele, i) => (
                                                            <MenuItem key={i}>
                                                              {ele?.menu_type == 'Page' ?
                                                                <a href={ele?.page_slug}>{ele?.page_name}</a> :
                                                                <a href={ele?.menu_url}>{ele?.menu_name}</a>
                                                              }
                                                            </MenuItem>
                                                          ))}
                                                        </SubMenu> :
                                                        <SubMenu title={item?.menu_name}>
                                                          {item.sub_sub_sub_menu && item.sub_sub_sub_menu.map((ele, i) => (
                                                            <MenuItem key={i}>
                                                              {ele?.menu_type == 'Page' ?
                                                                <a href={ele?.page_slug}>{ele?.page_name}</a> :
                                                                <a href={ele?.menu_url}>{ele?.menu_name}</a>
                                                              }
                                                            </MenuItem>
                                                          ))}
                                                        </SubMenu>
                                                      }
                                                    </>
                                                    :
                                                    <>
                                                      <MenuItem>
                                                        {item?.menu_type == 'Page' ?
                                                          <a href={"/" + item?.page_slug} >{item?.page_name}</a> :
                                                          <a href={item?.menu_url}>{item?.menu_name}</a>
                                                        }
                                                      </MenuItem>

                                                    </>
                                                }
                                              </div>
                                            ))}
                                          </SubMenu> :
                                          <SubMenu title={val?.menu_name}>
                                            {val.sub_sub_menu && val.sub_sub_menu.map((item, i) => (
                                              <div key={i}>
                                                {
                                                  item.sub_sub_sub_menu && item.sub_sub_sub_menu.length > 0 ?
                                                    <>
                                                      {item?.menu_type == 'Page' ?
                                                        <SubMenu title={item?.page_name}>
                                                          {item.sub_sub_sub_menu && item.sub_sub_sub_menu.map((ele, i) => (
                                                            <MenuItem key={i}>
                                                              {ele?.menu_type == 'Page' ?
                                                                <a href={ele?.page_slug}>{ele?.page_name}</a> :
                                                                <a href={ele?.menu_url}>{ele?.menu_name}</a>
                                                              }
                                                            </MenuItem>
                                                          ))}
                                                        </SubMenu> :
                                                        <SubMenu title={item?.menu_name}>
                                                          {item.sub_sub_sub_menu && item.sub_sub_sub_menu.map((ele, i) => (
                                                            <MenuItem key={i}>
                                                              {ele?.menu_type == 'Page' ?
                                                                <a href={ele?.page_slug}>{ele?.page_name}</a> :
                                                                <a href={ele?.menu_url}>{ele?.menu_name}</a>
                                                              }
                                                            </MenuItem>
                                                          ))}
                                                        </SubMenu>
                                                      }
                                                    </>
                                                    :
                                                    <>
                                                      <MenuItem>
                                                        {item?.menu_type == 'Page' ?
                                                          <a href={"/" + item?.page_slug} >{item?.page_name}</a> :
                                                          <a href={item?.menu_url}>{item?.menu_name}</a>
                                                        }
                                                      </MenuItem>

                                                    </>
                                                }
                                              </div>
                                            ))}
                                          </SubMenu>
                                        }
                                      </> : <>
                                        <MenuItem>
                                          {val?.menu_type == 'Page' ?
                                            <a href={"/" + val?.page_slug}>{val?.page_name}</a> :
                                            <a href={val?.menu_url}>{val?.menu_name}</a>
                                          }
                                        </MenuItem>

                                      </>
                                  }
                                </div>
                              ))}
                            </SubMenu> :
                            <SubMenu title={data?.menu_name}>
                              {data?.sub_menu && data?.sub_menu.map((val, i) => (
                                <div key={i}>
                                  {
                                    val.sub_sub_menu && val.sub_sub_menu.length > 0 ?
                                      <>
                                        {val?.menu_type == 'Page' ?
                                          <SubMenu title={val?.page_name}>
                                            {val.sub_sub_menu && val.sub_sub_menu.map((item, i) => (
                                              <>
                                                {
                                                  item.sub_sub_sub_menu && item.sub_sub_sub_menu.length > 0 ?
                                                    <>
                                                      {item?.menu_type == 'Page' ?
                                                        <SubMenu title={item?.page_name}>
                                                          {item.sub_sub_sub_menu && item.sub_sub_sub_menu.map((ele, i) => (
                                                            <MenuItem key={i}>
                                                              {ele?.menu_type == 'Page' ?
                                                                <a href={ele?.page_slug}>{ele?.page_name}</a> :
                                                                <a href={ele?.menu_url}>{ele?.menu_name}</a>
                                                              }
                                                            </MenuItem>
                                                          ))}
                                                        </SubMenu> :
                                                        <SubMenu title={item?.menu_name}>
                                                          {item.sub_sub_sub_menu && item.sub_sub_sub_menu.map((ele, i) => (
                                                            <MenuItem key={i}>
                                                              {ele?.menu_type == 'Page' ?
                                                                <a href={ele?.page_slug}>{ele?.page_name}</a> :
                                                                <a href={ele?.menu_url}>{ele?.menu_name}</a>
                                                              }
                                                            </MenuItem>
                                                          ))}
                                                        </SubMenu>
                                                      }
                                                    </>
                                                    :
                                                    <>
                                                      <MenuItem>
                                                        {data?.menu_type == 'Page' ?
                                                          <a href={"/" + item?.page_slug} >{item?.page_name}</a> :
                                                          <a href={item?.menu_url}>{item?.menu_name}</a>
                                                        }
                                                      </MenuItem>

                                                    </>
                                                }
                                              </>
                                            ))}
                                          </SubMenu> :
                                          <SubMenu title={val?.menu_name}>
                                            {val.sub_sub_menu && val.sub_sub_menu.map((item, i) => (
                                              <>
                                                {
                                                  item.sub_sub_sub_menu && item.sub_sub_sub_menu.length > 0 ?
                                                    <>
                                                      {item?.menu_type == 'Page' ?
                                                        <SubMenu title={item?.page_name}>
                                                          {item.sub_sub_sub_menu && item.sub_sub_sub_menu.map((ele, i) => (
                                                            <MenuItem key={i}>
                                                              {ele?.menu_type == 'Page' ?
                                                                <a href={ele?.page_slug}>{ele?.page_name}</a> :
                                                                <a href={ele?.menu_url}>{ele?.menu_name}</a>
                                                              }
                                                            </MenuItem>
                                                          ))}
                                                        </SubMenu> :
                                                        <SubMenu title={item?.menu_name}>
                                                          {item.sub_sub_sub_menu && item.sub_sub_sub_menu.map((ele, i) => (
                                                            <MenuItem key={i}>
                                                              {ele?.menu_type == 'Page' ?
                                                                <a href={ele?.page_slug}>{ele?.page_name}</a> :
                                                                <a href={ele?.menu_url}>{ele?.menu_name}</a>
                                                              }
                                                            </MenuItem>
                                                          ))}
                                                        </SubMenu>
                                                      }
                                                    </>
                                                    :
                                                    <>
                                                      <MenuItem>
                                                        {data?.menu_type == 'Page' ?
                                                          <a href={"/" + item?.page_slug} >{item?.page_name}</a> :
                                                          <a href={item?.menu_url}>{item?.menu_name}</a>
                                                        }
                                                      </MenuItem>

                                                    </>
                                                }
                                              </>
                                            ))}
                                          </SubMenu>
                                        }
                                      </> : <>
                                        <MenuItem>
                                          {val?.menu_type == 'Page' ?
                                            <a href={"/" + val?.page_slug}>{val?.page_name}</a> :
                                            <a href={val?.menu_url}>{val?.menu_name}</a>
                                          }
                                        </MenuItem>

                                      </>
                                  }
                                </div>
                              ))}
                            </SubMenu>
                          }
                        </>
                        :
                        <MenuItem>
                          {data?.menu_type == 'Page' ?
                            <a href={data?.page_slug}>{data?.page_name}</a> :
                            <a href={data?.menu_url}>{data?.menu_name}</a>
                          }
                        </MenuItem>
                    }
                  </div>))}
              {/* <SubMenu title="Pages">
                              <SubMenu title="About Us">
                                {AboutMenu.map((val, i)=>(
                                  <MenuItem key={i}>
                                    <a href={val.routerPath}>{val.name}</a>
                                  </MenuItem>
                                ))}
                              </SubMenu>


                             
                            </SubMenu> */}

            </Menu>
          </SidebarContent>

          <SidebarFooter></SidebarFooter>
        </ProSidebar>
      </div>
    </Fragment>
  )
}

export default MobileMenu