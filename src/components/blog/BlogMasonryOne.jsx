import React, { Fragment } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from 'next/link'
import { IMG_URL } from '../../shared/constent/img';

const BlogMasonryOne = (props) => {
    let imgData = IMG_URL;
    return (
        <Fragment>
            <div id="isotop-gallery-wrapper" className="grid-2column">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{
                        350: 1,
                        750: 2
                    }}>
                    <Masonry gutter="50px">
                        {props?.data?.map((val, i) => (
                            <div key={i} className="isotop-item d-flex">
                                <article className="blog-meta-two mt-45">
                                    <figure className="post-img m0">
                                        <Link href={"/blog/" + val.news_slug} state={val} className="w-100 d-block"><img style={{height: '250px'}} src={`${imgData}${val.banner}`} alt="" className="w-100 tran4s" /></Link>
                                    </figure>
                                    <div className="post-data">
                                        <div className="post-tag">
                                            <Link href={"/blog/" + val.news_slug} state={val}>{val.create_month}</Link>
                                        </div>
                                        <Link href={"/blog/" + val.news_slug} state={val} className="blog-title">
                                            <h5 style={{fontSize: '20px'}} dangerouslySetInnerHTML={{ __html: (val?.news_title) }} ></h5>
                                        </Link> <br/>
                                        <Link href={"/blog/" + val.news_slug} state={val} className="read-btn tran3s">Continue Reading <i className={val.icon} /></Link>
                                    </div>
                                </article>
                            </div>
                        ))}
                        {/* /.row */}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </Fragment>
    )
}

export default BlogMasonryOne
