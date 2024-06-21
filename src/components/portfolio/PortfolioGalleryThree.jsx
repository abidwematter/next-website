import React, { Fragment, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const PortfolioGalleryTwo = (props) => {
    console.log("check props", props);

    return (
        <Fragment>
            <Tabs>
                <TabPanel>
                    <div className="row gx-xxl-5">
                        {props?.data?.map((val, i) => (
                            <div
                                key={i}
                                className="col-lg-4 col-sm-6"
                                data-aos="fade-right"
                                data-aos-delay="200">
                                <div className="portfolio-block mt-10">
                                    <iframe width="350" height="195" src={val?.video_iframe} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>
                                <h6 className='text-center'>{val?.video_title}</h6>
                                {/* /.portfolio-block-one */}
                            </div>
                        ))}
                      
                    </div>
                </TabPanel>

            </Tabs>

        </Fragment>
    )
}

export default PortfolioGalleryTwo