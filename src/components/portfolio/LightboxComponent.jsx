"use client";
import React, { Fragment, useState } from "react";
import "react-tabs/style/react-tabs.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "/images/gallery/img_01.jpg",
  "/images/gallery/img_02.jpg",
  "/images/gallery/img_03.jpg",
  "/images/gallery/img_04.jpg",
  "/images/gallery/img_05.jpg",
  "/images/gallery/img_06.jpg",
  "/images/gallery/img_07.jpg",
  "/images/gallery/img_08.jpg",
];

const LightboxComponent = () => {


  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <Fragment>
      {!!isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}
    </Fragment>
  );
};

export default LightboxComponent;
