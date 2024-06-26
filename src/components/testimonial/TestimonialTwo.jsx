'use client';


import React, { Fragment, useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import ModalVideos from '../ModalVideo/ModalVideos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMG_URL } from '../../shared/constent/img';
import './testimonialTwo.scss'


const settings2 = {
    arrow: true,
    dots: true,
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: false
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2,
                initialSlide: 1
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




const TestimonialTwo = (props) => {
    let img = IMG_URL;
    const [isOpen,
        setOpen] = useState(false);
        const [videoData, setVideoData] =  useState('')

    const openModal = (e) => {
        setOpen(!isOpen);
        setVideoData(e)
    }


    return (
        <Fragment>
            <ModalVideos isOpen={isOpen} videoData={videoData} onClick={openModal}/>

            <Slider className="feedback_slider_two" {...settings2}>
                {props?.data?.map((val, i) => (
                    <div className="item" key={i}>
                        <div className="feedback-block-two d-sm-flex">
                            <div className="img-meta">
                                <img src={`${img}${val.photo}`} alt="images" />
                                <div className="camp-name">{val.name} </div>
                                <div className="camp-name">{val.designation}, {val.company}</div>
                                {
                                    val?.video_link ? <button className="fancybox video-icon" onClick={(e) =>openModal(val?.video_link)}>
                                        <i className="bi bi-play-fill" />
                                    </button> : ''
                                }
                            </div>
                            <div className="text-wrapper">
                                
                                <div dangerouslySetInnerHTML={{ __html: (val.comment) }} />
                                
                                
                            </div>
                            {/* /.text-wrapper */}
                        </div>
                        {/* /.feedback-block-two */}
                    </div>
                ))}
            </Slider>
            {/* /.feedback_slider_two */}
        </Fragment>
    )
}

export default TestimonialTwo