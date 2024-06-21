import React, { Fragment, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMG_URL } from '../../shared/constent/img';



const settings1 = {
    arrow:true,
    dots: false,
    infinite: false,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false
            }
        }, 
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 2
            }
        }, 
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

const TestimonialOne = (props) => { 
    let img = IMG_URL;


    return (
        <Fragment>
            <Slider className="feedback_slider_one" {...settings1}>
                {props?.data.map((val, i) => (
                    <div key={i} className="item">
                        <div className="feedback-block-one margin-2">
                            <div className="top-header d-flex align-items-center justify-content-between">
                                <div>
                                    <img src={`${img}${val.photo}`} alt="" />
                                </div>
                                <img src={`images/icon/${val.icon}.svg`} alt="" width={50} />
                            </div>
                            {/* /.top-header */}
                            <div dangerouslySetInnerHTML={{ __html: (val.comment) }} />
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="cost">
                                    <span>{val.name}</span></div>
                                {/* <img src={`images/logo/{val.logo2}.png`} alt=""/> */}
                            </div>
                        </div>
                        {/* /.feedback-block-one */}
                    </div>
                ))}
            </Slider>
            {/* /.feedback_slider_one */}
        </Fragment>
    )
}

export default TestimonialOne