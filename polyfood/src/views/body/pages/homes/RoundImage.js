import React from "react";
import "./RoundImage.css";

const RoundImage = ({item}) => {
  return (
    <div className="RoundImage">
      <img
        src={item.product_image}
        alt=""
        className="round-image"
      ></img>
    </div>
  );
};

export default RoundImage;






