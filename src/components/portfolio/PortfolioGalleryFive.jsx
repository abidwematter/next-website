import React, { Fragment, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import { IMG_URL } from '../../shared/constent/img';

const TabListContent = [
    'All',
    'Development',
    'Plugin',
    'Design',
    'Mobile App',
    'Branding'
];

const PortfolioContent4 = [
    {
        img: 'img_15',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: ''
    }, {
        img: 'img_16',
        tag: 'Design',
        pjname: 'UI, UX Design',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_17',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_18',
        tag: 'Development',
        pjname: 'Market System',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '100'
    }, {
        img: 'img_19',
        tag: 'Marketing',
        pjname: 'Content Marketing',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }, {
        img: 'img_20',
        tag: 'Data Research',
        pjname: 'Product Analysis',
        plus: 'bi bi-plus',
        fade: 'fade-right',
        dataDelay: '200'
    }
];



const images = [
    "/images/gallery/img_15.jpg",
    "/images/gallery/img_16.jpg",
    "/images/gallery/img_18.jpg",
    "/images/gallery/img_17.jpg",
    "/images/gallery/img_19.jpg",
    "/images/gallery/img_20.jpg"
];

const PortfolioGalleryFive = (props) => {
    let img = IMG_URL

    const [isOpen,
        setIsOpen] = useState(false);
    const [photoIndex,
        setPhotoIndex] = useState(0);

    return (
        <Fragment>

            <Tabs>

                <TabPanel>

                    <div
                        id="isotop-gallery-wrapper"
                        className="row">
                        {props?.data?.map((val, i) => (
                            <div
                                key={i}
                                className="col-md-2 col-4"
                                data-aos='fade-right'
                                data-aos-delay='200'>
                                <div className="portfolio-block-two mt-25">
                                    <div className="img-meta test" style={{ height: 'auto' }}>
                                        {/* <img style={{ width: '600px', maxWidth: '100%', height: '80px' }} src={`${img}${val.photo}`} alt="" className="w-100" /> */}
                                        <img style={{ width: '600px', maxWidth: '100%' }} src={`${img}${val.photo}`} alt="" className="w-100" />
                                    </div>

                                </div>
                            </div>
                        ))}
                        <ResponsiveMasonry>
                            <Masonry>
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                </TabPanel>

            </Tabs>

        </Fragment>
    )
}

export default PortfolioGalleryFive
