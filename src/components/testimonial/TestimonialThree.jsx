import React, { Fragment } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IMG_URL } from '../../shared/constent/img';
import './testimonialThree.scss'

const SliderThree = [
    {
        img: 'img_05',
        icon: 'icon_15',
        desc: `Certainly from my perspective been great success with lore giving that enterprises level magna assured quality due issue there live the blind texts separated.`,
        name: 'Martin Jonas',
        desig: 'Head of marketing, Inter inc.'
    }, {
        img: 'img_06',
        icon: 'icon_15',
        desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes time advertise your business for a cheap cost you have looked.`,
        name: 'Carolyna Tylor',
        desig: 'Senior Developer, Sinco inc.'
    }, {
        img: 'img_07',
        icon: 'icon_15',
        desc: `It’s a great exprience to work with Sinco. They’r vey humble and expert & the service has been excellent. The author is very quick and nice when it comes to support.`,
        name: 'Rebecca Jones',
        desig: 'Senior UX Designer, Hamina_Themes.'
    }
]

const SliderContent = [
    {
        img: 'img_01',
        icon: 'bi bi-play-fill',
        plogo: 'Plogo-15',
        title: 'Giant cloud service inc',
        desc: 'We’v 9,000 agents across around the country, Find agents near your neighborhood.',
        text: 'Continue Reading',
        arrow: 'icon_14'
    },
    {
        img: 'img_02',
        icon: 'bi bi-play-fill',
        plogo: 'Plogo-4',
        title: 'UK Marketing Agency.',
        desc: 'We’v 9,000 agents across around the country, Find agents near your neighborhood.',
        text: 'Continue Reading',
        arrow: 'icon_14'
    },
    {
        img: 'img_03',
        icon: 'bi bi-play-fill',
        plogo: 'Plogo-3',
        title: 'Netflix Marketing Agency.',
        desc: 'We’v 9,000 agents across around the country, Find agents near your neighborhood.',
        text: 'Continue Reading',
        arrow: 'icon_14'
    },
    {
        img: 'img_04',
        icon: 'bi bi-play-fill',
        plogo: 'Plogo-2',
        title: 'Sinco Digital Agency.',
        desc: 'We’v 9,000 agents across around the country, Find agents near your neighborhood.',
        text: 'Continue Reading',
        arrow: 'icon_14'
    },
]

const settings3 = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
};

const settings2 = {
    arrow:true,
    dots: false,
    infinite: true,
    speed: 100,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
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
        // {
        //     breakpoint: 575,
        //     settings: {
        //         slidesToShow: 1,
        //         slidesToScroll: 1
        //     }
        // }
    ]
};
const TestimonialThree = (props) => {
    let imgUrl = IMG_URL

    return (
        <Fragment>
            {/* <Slider className="feedback_slider_three" {...settings3}>
                {
                    props?.data?.map((val, i) => (
                        <div className="item">
                            <div className="feedback-block-three d-md-flex" key={i}>
                                <div className="img-meta">
                                    <img src={`${imgUrl}${val?.photo}`} alt="" />
                                </div>
                                <div className="text-wrapper">
                                    <div className="name">
                                        <h6>{val.name}</h6>
                                        <div dangerouslySetInnerHTML={{ __html: (val.comment) }} />
                                    </div>
                                    <ul className="style-none button-group d-sm-flex align-items-center" >
                                            <li className="me-4 mt-10">
                                                <a href='#' className="btn-one ripple-btn linkedin-icon" style={{lineHeight: "39px",padding: '0 10px'}}><i className='fab fa-linkedin-in' style={{fontSize: '25px'}}/></a>
                                                </li>
                                           
                                        </ul>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </Slider> */}
            <Slider className="feedback_slider_two" {...settings2}>
                {props?.data?.map((val, i)=>(
                    <div className="item" key={i}>
                    <div className="feedback-block-three row row-cols-3">
                        <div className="img-meta">
                        <img src={`${imgUrl}${val?.photo}`} alt="" />
                           
                        </div>
                        <div className="text-wrapper">
                                    <div className="name">
                                        <h6>{val.name}</h6>
                                        <h6 className='subhead'>{val.designation}, {val.company}</h6>
                                        <div dangerouslySetInnerHTML={{ __html: (val.comment) }} />
                                    </div>
                                    {/* <ul className="style-none button-group d-sm-flex align-items-center" >
                                            <li className="me-4 mt-10">
                                                <a href='#' className="btn-one ripple-btn linkedin-icon" style={{lineHeight: "39px",padding: '0 10px'}}><i className='fab fa-linkedin-in' style={{fontSize: '25px'}}/></a>
                                                </li>
                                           
                                        </ul> */}
                                </div>
                    </div>
                </div>
                ))}
            </Slider>
        </Fragment>
    )
}

export default TestimonialThree