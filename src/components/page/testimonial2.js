import React from "react";
import './testimonial2.scss'
import { IMG_URL } from "../../shared/constent/img";
import Link from 'next/link'
var images = ["http://www.trazeetravel.com/wp-content/uploads/2015/10/Big-Major-Cay-Bahamas-%C2%A9-Katie-Smith-Dreamstime-33201195-e1444248381801-1000x399.jpg", "https://i.pinimg.com/originals/9b/70/69/9b7069440538e120d7005af3b18d08bf.jpg", "https://media.cntraveler.com/photos/56a7a68878d099fc1224f308/master/pass/big-major-cay-pig-cr-getty.jpg", "http://www.slate.com/content/dam/slate/blogs/atlas_obscura/2014/06/09/the_swimming_pigs_of_big_major_cay_in_the_bahamas/7875531868_9f9ec85b6b_o.jpg.CROP.promo-large2.jpg", "https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg", "https://static.pexels.com/photos/109009/squirrel-grey-brown-fur-109009.jpeg", "https://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/223/249/488872871.jpg", "https://img.huffingtonpost.com/asset/5834c55a1700002600e7bf13.jpeg?ops=scalefit_720_noupscale", "https://data.whicdn.com/images/10429808/large.jpg", "http://www.catster.com/wp-content/uploads/2015/06/8-Cats-sweat-through-paws-shutterstock_207995587.jpg", "https://fmlainsights.lexblogplatformthree.com/wp-content/uploads/sites/311/2011/04/catpaw.jpg", "https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg"];

export default class ImageList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images,
            fadedleft: true,
            fadedright: false,
            start: 0,
            finish: 4,
            img: IMG_URL
        }
    }

    leftClick() {
        let start = this.state.start;
        let finish = this.state.finish;
        if (start > 0 && finish > 0) {
            this.setState({
                start: start - 5,
                finish: finish - 5,
            });
        } else {
            this.setState({
                fadedleft: true
            });
        }
        this.setState({
            fadedright: false
        })
    }
    rightClick() {
        let start = this.state.start;
        let finish = this.state.finish;
        if (finish < images.length) {
            this.setState({
                start: start + 5,
                finish: finish + 5
            });
        } else {
            this.setState({
                fadedright: true
            });
        }

        this.setState({
            fadedleft: false
        });
    }
    render() {
        var startindex = this.state.start;
        var finishindex = this.state.finish;
        const fadedleft = this.state.fadedleft ? "fa fa-angle-left" : "fa fa-angle-left";
        const fadedright = this.state.fadedright ? "fa fa-angle-right" : "fa fa-angle-right";
        return (
            <>
                

                <div className="row mt-40">
                    {
                        this.props?.data.map((image, imageindex) => (
                            <div className="col-md-2 col-4">
                                <div key={imageindex}>
                                    {
                                        image?.photo ? <> 
                                            <img className="LogoIcon image-data" src={`${this.state.img}${image?.photo}`} />
                                        
                                        </> : ''
                                    }
                                </div>
                            </div>
                        )
                        )
                    }
                    <div className="view more" style={{ textAlign: "center", animation: 'jumpThree 4s infinite linear '}}>
                        <div className="btn-three rev mt-35 lg-mt-20" >
                            <Link href='/clients'>View More<i className="fas fa-chevron-right" /></Link>

                        </div>
                    </div>

                </div>
            </>

        )
    }
};

