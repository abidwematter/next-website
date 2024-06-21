import React,{Fragment} from 'react';
import Slider from 'react-slick';
import { IMG_URL } from '../../shared/constent/img';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const TestimonialContent = [
    {
        img: 'icon_34',
        desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes timeadvertise your business for a cheap cost. I know you have looked answer everywhere.`,
        name: 'Hasan Mahmud',
        desig: 'React Developer'
    }, {
        img: 'icon_34',
        desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes timeadvertise your business for a cheap cost. I know you have looked answer everywhere.`,
        name: 'Rashed Kabir',
        desig: 'Designer'
    }, {
        img: 'icon_34',
        desc: `Having a home based business is a wonderful asset to your life. The problem still stands it comes timeadvertise your business for a cheap cost. I know you have looked answer everywhere.`,
        name: 'Zubayer Hasan',
        desig: 'Sr. Frontend Developer'
    }
]

const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1
};

const TestimonialFive = (props) => {
    let img = IMG_URL
    return ( 
    <Fragment> 
        <Slider className="feedback_slider_four pt-70 lg-pt-50" {...settings} data-aos="fade-up">
            {props?.data.map((val, i) => (
                <div key={i} className="item">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="feedback-block-four mb-80 ms-xxl-4 me-xxl-4">
                                <img src={`${img}${val.photo}`} alt="avatar" className="m-auto"/>                            
                            </div>
                            {/* /.feedback-block-four */}
                        </div>
                    </div>
                </div>
            ))}
        </Slider> 
    </Fragment>
  )
}


export default TestimonialFive