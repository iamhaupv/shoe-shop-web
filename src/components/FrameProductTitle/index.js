import React from "react";
import "./FrameProductTitle.css";
import ProductMall from "../ProductMall";
import ProductDisCount from "../ProductDiscount";
import Product from "../Product";
import ProductFreeShip from "../ProductFreeShip";
import ProductLoveAndDiscount from "../ProductLoveAndDiscount";
export default function FrameProductTitle(props) {
  return (
    <>
      {/* container__frame */}
      <div className="container__frame">
        {/* container__frame__content */}
        <div className="container__frame__content">
          {/* header */}
          <div className="header">
            {/* title */}
            <span className="title">{props.text}</span>
          </div>
          {/* list__products */}
          <div className="list__products">
            {/* <Product/>
            <ProductMall/>
            <ProductDisCount/> */}
            {/* <ProductFreeShip/> */}
            <ProductLoveAndDiscount/>
          </div>
        </div>
      </div>
    </>
  );
}
