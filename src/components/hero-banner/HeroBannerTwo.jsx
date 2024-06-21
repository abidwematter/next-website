import React, { Fragment } from 'react';
import './heroBannerTwo.scss'

const HeroBannerTwo = (props) => {
    const imgUrl = 'https://api.we-matter.com/assets/admin/uploads/'
    return (
        <Fragment>
            {
                props.data && props.data.map((item,i) => {
                   return <div className="hero-banner-two" key={i}>
                        <div className="bg-wrapper">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-md-7">
                                        <h1 className="hero-heading">
                                        <div dangerouslySetInnerHTML={{ __html: (item?.ban1_1) }} />
                                            </h1>
                                        <p className="text-lg pt-25 pb-40 lg-pb-20 sm-pt-10">{item?.ban1_2}</p>
                                        <ul className="style-none button-group d-sm-flex align-items-center">
                                            <li className="me-4 mt-10">
                                                <a href={item?.ban1_9} className="btn-one ripple-btn">{item?.ban1_3}</a>
                                                </li>
                                            <li>
                                                <a className="demo-btn tran3s mt-10" href={item?.ban1_10}>{item?.ban1_4}</a>
                                                </li>
                                        </ul>
                                    </div>
                                </div>
                            </div> {/* /.container */}
                            <div className="illustration-holder">
                                <img src={`${imgUrl}${item.banimg1_1}`} alt="" className="main-illustration kyara" style={{ animation: "jumpTwo 4s infinite linear"}}/>
                                <img src={`${imgUrl}${item.banimg1_2}`} alt="" className="shapes shape-one" />
                                <img src={`${imgUrl}${item.banimg1_3}`} alt="" className="shapes shape-two" />
                                <img src={`${imgUrl}${item.banimg1_4}`} alt="" className="shapes shape-three" />
                                <img src={`${imgUrl}${item.banimg1_5}`} alt="" className="shapes shape-four" />
                                <img src={`${imgUrl}${item.banimg1_6}`} alt="" className="shapes shape-five" />
                                <img src={`${imgUrl}${item.banimg1_7}`} alt="" className="shapes shape-six" />
                                <img src={`${imgUrl}${item.banimg1_8}`} alt="" className="shapes shape-seven" />
                                <div className="card-one shapes d-flex align-items-center justify-content-center">
                                    <div className="icon"><i className="bi bi-check-lg" /></div>
                                    <h6>{item?.ban1_5}</h6>
                                </div> {/* /.card-one */}
                                <div className="card-two shapes text-center">
                                    <div className="icon"><i className="bi bi-check-lg" /></div>
                                    <div className="main-count"><span className="counter">{item?.ban1_6}</span></div>
                                    <div className="info">{item?.ban1_7}</div>
                                    {/* <ul className="style-none d-flex justify-content-center rating">
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                        <li><i className="bi bi-star-fill" /></li>
                                    </ul>
                                    */}
                                </div> {/* /.card-two */}
                            </div> {/* /.illustration-holder */}
                        </div> {/* /.bg-wrapper */}
                    </div>
                })
            }
        </Fragment>
    )
}

export default HeroBannerTwo