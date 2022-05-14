import React, { useState } from "react";
import Lightbox from "./components/CoolLightbox";
import ImageMosaic from "./components/ImageMosaic";
import images from "./images";

const ImageGallery = () => {
  const [isOpen, setOpen] = useState(false);
  let [currentImageIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* react-photo-gallery */}
      <ImageMosaic
        images={images}
        handleClick={(e, { index }) => {
          setCurrentIndex(index);
          console.log('OPEN');
          setOpen(true);
        }}
      />
      {/* react-spring-lightbox */}
      <Lightbox
        currentImageIndex={currentImageIndex}
        setCurrentIndex={setCurrentIndex}
        isOpen={isOpen}
        onClose={() => {
          setOpen(false);
          window.location.reload();
        }}
        images={images}
      />
    </>
  );
};

export default ImageGallery;
