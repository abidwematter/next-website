import React, {Fragment} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './testimonial.scss'
import { IMG_URL } from '../../shared/constent/img';


const TestimonialContent = [
    {
        logo: 'Plogo-1',
        icon: 'icon_05',
        desc: `Certainly from my perspective quis been a great success with due WP giving us
        that enterprises level assured quality.`,
        text: 'Qulaity & Cost:',
        price: '5.00',
        logo2: 'Plogo-5',
    },
    {
        logo: 'Plogo-2',
        icon: 'icon_05',
        desc: `Certainly from my perspective quis been a great success with due WP giving us
        that enterprises level assured quality.`,
        text: 'Qulaity & Cost:',
        price: '35.00',
        logo2: 'Plogo-5',
    },
    {
        logo: 'Plogo-3',
        icon: 'icon_05',
        desc: `Certainly from my perspective quis been a great success with due WP giving us
        that enterprises level assured quality.`,
        text: 'Qulaity & Cost:',
        price: '19.00',
        logo2: 'Plogo-5',
    },
    {
        logo: 'Plogo-4',
        icon: 'icon_05',
        desc: `Certainly from my perspective quis been a great success with due WP giving us
        that enterprises level assured quality.`,
        text: 'Qulaity & Cost:',
        price: '15.00',
        logo2: 'Plogo-5',
    },
]

const settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: false
            }
        }
    ]
};

const TestimonialData = (props) => {
    let img = IMG_URL;
    return (
        <Fragment>
            <Slider className="feedback_slider_one kapil" {...settings1}>
                {props?.data.map((val, i)=>(
                    <div key={i} className="item" >
                    <div className="feedback-block-one margin-2">
                        <div className="top-header d-flex align-items-center justify-content-between">
                            <div>
                                <img src={`${img}${val.photo}`} alt=""/>
                            </div>
                        </div>                      
                    </div>
                </div>
                ))}
            </Slider>
        </Fragment>
    )
}

export default TestimonialData;