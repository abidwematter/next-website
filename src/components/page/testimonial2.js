// "use client";
// import "server-only";
// import React from "react";
import "./testimonial2.scss";
import { IMG_URL } from "../../shared/constent/img";
import Link from "next/link";
import React from "react";

var images = [
  "http://www.trazeetravel.com/wp-content/uploads/2015/10/Big-Major-Cay-Bahamas-%C2%A9-Katie-Smith-Dreamstime-33201195-e1444248381801-1000x399.jpg",
  "https://i.pinimg.com/originals/9b/70/69/9b7069440538e120d7005af3b18d08bf.jpg",
  "https://media.cntraveler.com/photos/56a7a68878d099fc1224f308/master/pass/big-major-cay-pig-cr-getty.jpg",
  "http://www.slate.com/content/dam/slate/blogs/atlas_obscura/2014/06/09/the_swimming_pigs_of_big_major_cay_in_the_bahamas/7875531868_9f9ec85b6b_o.jpg.CROP.promo-large2.jpg",
  "https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg",
  "https://static.pexels.com/photos/109009/squirrel-grey-brown-fur-109009.jpeg",
  "https://img-aws.ehowcdn.com/877x500p/photos.demandstudios.com/getty/article/223/249/488872871.jpg",
  "https://img.huffingtonpost.com/asset/5834c55a1700002600e7bf13.jpeg?ops=scalefit_720_noupscale",
  "https://data.whicdn.com/images/10429808/large.jpg",
  "http://www.catster.com/wp-content/uploads/2015/06/8-Cats-sweat-through-paws-shutterstock_207995587.jpg",
  "https://fmlainsights.lexblogplatformthree.com/wp-content/uploads/sites/311/2011/04/catpaw.jpg",
  "https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg",
];

const ImageList = (props) => {
  // const [start, setStart] = useState(0);
  // const [finish, setFinish] = useState(4);
  // const [fadedLeft, setFadedLeft] = useState(true);
  // const [fadedRight, setFadedRight] = useState(false);
  const img = IMG_URL;

  // const leftClick = () => {
  //   if (start > 0 && finish > 0) {
  //     setStart(start - 5);
  //     setFinish(finish - 5);
  //   } else {
  //     setFadedLeft(true);
  //   }
  //   setFadedRight(false);
  // };

  // const rightClick = () => {
  //   if (finish < images.length) {
  //     setStart(start + 5);
  //     setFinish(finish + 5);
  //   } else {
  //     setFadedRight(true);
  //   }
  //   setFadedLeft(false);
  // };

  // const fadedLeftClass = fadedLeft ? "fa fa-angle-left" : "fa fa-angle-left";
  // const fadedRightClass = fadedRight
  //   ? "fa fa-angle-right"
  //   : "fa fa-angle-right";

  return (
    <>
      <div className="row mt-40 " >
        {props?.data.map((image, imageindex) => (
          <div className="col-md-2 col-4" key={imageindex}>
            <div>
              {image?.photo ? (
                <>
                  <img
                    className="LogoIcon image-data"
                    src={`${img}${image?.photo}`}
                  />
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
        <div
          className="view more"
          style={{
            textAlign: "center",
            animation: "jumpThree 4s infinite linear ",
          }}
        >
          <div className="btn-three rev mt-35 lg-mt-20">
            <Link href="/client-company">
              View More
              <i className="fas fa-chevron-right" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageList;
