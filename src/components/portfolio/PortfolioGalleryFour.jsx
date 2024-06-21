import React, { Fragment, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Link from 'next/link';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { IMG_URL } from '../../shared/constent/img';
import { newEventPhoto } from '../../services/shared-service';
import PaginationComponent1 from '../page/pagination';


// const images = ["/images/gallery/img_09.jpg", "/images/gallery/img_10.jpg", "/images/gallery/img_11.jpg", "/images/gallery/img_12.jpg", "/images/gallery/img_13.jpg", "/images/gallery/img_13.jpg"];
let images = []
const PortfolioGalleryFour = (props) => {
    const [photoGallery, setPhotoGallery] = useState();
    const [totalRecords, setTotalRecords] = useState([]);
    const [selectCat, setSelectCat] = useState('')

    const { api, eventphotoCat } = props
    let img = IMG_URL;
    let selectedcatValue;
    let pageData = '';
   


    useEffect(() => {
        if (eventphotoCat) {
            hundleClick(eventphotoCat[0].p_category_id);
        }
    }, [eventphotoCat]);

    // useEffect (() =>{
    //     getAllData('1');
    // },[])


    const getAllData = (page, id) => {
        pageData = page;
        let urlPath = api.replace('1', id).replace('1',page)
        newEventPhoto(urlPath).then((res) => {
            setPhotoGallery(res?.data);
            setTotalRecords(res?.total);
            getImage(res?.data);
        })
    }

    const getPaginatedData = (page) => {
        if(selectCat) {
            getAllData(page,selectCat)
        }
    }


    const [isOpen,
        setIsOpen] = useState(false);
    const [photoIndex,setPhotoIndex] = useState(0);

    const getImage = (imgedata) => {
        const newArray = images;
        imgedata.forEach((e) => {
            newArray.push(`${img}${e?.photo_name}`)
        })
        images = newArray;
    }

    const hundleClick = (catValue) => {
        selectedcatValue = catValue;
        setSelectCat(catValue)
        getAllData('1', selectedcatValue);
    }

    return (
        <Fragment>
            {!!isOpen && (<Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)} />)}
            <Tabs>
                <TabList
                    className="style-none text-center isotop-menu-wrapper g-control-nav-one pb-30 lg-pb-10">
                    {eventphotoCat && eventphotoCat.map((tab, i) => (
                        <Tab key={i} onClick={() => hundleClick(tab?.p_category_id)}>{tab?.p_category_name}</Tab>
                    ))}
                </TabList>

                    <div id="isotop-gallery-wrapper" class="grid-width container custom-container">
                        <div className="row">
                            {photoGallery && photoGallery?.map((val, i) => (
                                <div
                                    key={i}
                                    className="isotop-item col-md-3 col-sm-4 col-xs-12"
                                    data-aos="fade-right"
                                    data-aos-delay="200">
                                    <div className="portfolio-block-two mt-25">
                                        <div className="img-meta">
                                            <img src={`${img}${val.photo_name}`} alt="" style={{ height: '180px' }} className="w-100" />
                                            <div className="hover-state tran3s">
                                                <a
                                                    className="fancybox tran3s"
                                                    data-fancybox
                                                    title="Click for large view"
                                                    href="#"
                                                    onClick={() => setIsOpen(!isOpen)}
                                                    tabIndex={0}><i className='bi bi-plus' /></a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="page-pagination-one col-md-6 mx-auto">
                        <ul className="d-flex align-items-center style-none">
                            <li >
                                {
                                    totalRecords > 12 && <PaginationComponent1
                                        getAllData={getPaginatedData}
                                        totalRecords={totalRecords}
                                        itemsCountPerPage='12' />
                                }
                            </li>

                        </ul>
                    </div>
            </Tabs>

        </Fragment>
    )
}

export default PortfolioGalleryFour
