import React, {Fragment} from 'react';
import Link from 'next/link';
import { IMG_URL } from '../../shared/constent/img';

const BlogTwo = (props) => {
    let img = IMG_URL
    return (
        <Fragment>
            <div className="home-blog-row row gx-xxl-5">
                {props?.data?.map((val, i) => (
                    <div key={i} className={`blog-two col row-cols-2 row-cols-lg-3 ${val.className}`} data-aos data-aos-delay>
                        <article className="blog-meta-two home-blog-meta-two mt-30">
                            <figure className="post-img m0">
                                <Link href={`blog/${val?.news_slug}`} className="w-100 border border-light d-block">
                                    <img src={`${img}${val?.photo}`} alt="" className="w-100 tran4s" style={{height:'320px'}}/>
                                    </Link>
                            </figure>
                            <div className="post-data">
                                <div className="post-tag">
                                    <Link href={`blog/${val?.news_slug}`}>{val.tags} </Link>
                                </div>
                                <Link href={`blog/${val?.news_slug}`} className="blog-title">
                                    <h5><div dangerouslySetInnerHTML={{__html: (val.news_title)}} /></h5>
                                </Link> <br/>
                                <Link href={`blog/${val?.news_slug}`} className="read-btn tran3s">{val.news_content_short} <i className="fas fa-chevron-right"/></Link>
                            </div>
                            {/* /.post-data */}
                        </article>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}

export default BlogTwo