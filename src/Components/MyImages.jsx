import React, { useState } from "react";

const MyImages = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);
  // console.log(imgs);
  return (
    <div className="product_image">
      <div className="optional_img">
        {imgs &&
          imgs.map((singleImg, index) => {
            return (
              <figure key={index}>
                <img
                  src={singleImg.url}
                  alt={singleImg.filename}
                  key={index}
                  onClick={() => setMainImage(singleImg)}
                />
              </figure>
            );
          })}
      </div>
      <div className="main_img">
        <img src={mainImage.url} alt={mainImage.filename} />
      </div>
    </div>
  );
};

export default MyImages;
