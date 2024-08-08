import React from "react";
import back from "../../assets/back.png";
import khien from "../../assets/khien.png";
import xe from "../../assets/xe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import banner_shopee_mall1 from "../../assets/banner_shopee_mall1.jpg";
import samsung from "../../assets/samsung.png";
import serum from "../../assets/serum.png";
import feelex from "../../assets/feelex.png";
import lovito from "../../assets/lovito.jpg";
import omo from "../../assets/omo.png";
import loreal from "../../assets/loreal.jpg";
import deli from "../../assets/deli.png";
import cocoon from "../../assets/cocoon.png";
import "./ContentMall.css";
export default function ContentMall() {
  return (
    <>
      {/* container__shopmall */}
      <div className="container__shopmall">
        {/* content */}
        <div className="content">
          {/* content__header */}
          <div className="content__header">
            {/* wrap__nav */}
            <div className="wrap__nav">
              {/* title */}
              <a className="title" href="fb.com">
                Shopee Mall
              </a>
              {/* child */}
              <div className="child">
                <div className="flex justify-center items-center">
                  <img src={back} alt="" />
                  Trả hàng Miễn phí 15 ngày
                </div>
                <div className="flex justify-center items-center">
                  <img src={khien} alt="" />
                  Hàng chính hãng 100%
                </div>
                <div className="flex justify-center items-center">
                  <img src={xe} alt="" />
                  Miễn phí vận chuyển
                </div>
              </div>
            </div>
            {/* view__all */}
            <a href="fb.com" className="view__all">
              <span>Xem Tất Cả</span>
              {/* icon__view__all */}
              <div className="icon__view__all">
                <FontAwesomeIcon icon={faCircleChevronRight} />
              </div>
            </a>
          </div>
          {/* content__content  */}
          <div className="content__content">
            {/* banner */}
            <a className="banner" href="fb.com">
              <img src={banner_shopee_mall1} alt="" />
            </a>
            {/* wrap__category */}
            <div className="wrap__category">
              <div className="flex">
                <a href="fb.com">
                  <div>
                    <img src={samsung} alt="" />
                    <div>Quà mọi đơn</div>
                  </div>
                </a>
                <a href="fb.com">
                  <div>
                    <img src={serum} alt="" />
                    <div>Giảm sốc 50%</div>
                  </div>
                </a>
                <a href="fb.com">
                  <div>
                    <img src={feelex} alt="" />
                    <div>Giảm đến 50%</div>
                  </div>
                </a>
                <a href="fb.com">
                  <div>
                    <img src={deli} alt="" />
                    <div>Deli siêu sale</div>
                  </div>
                </a>
              </div>
              <div className="flex">
                <a href="fb.com">
                  <div>
                    <img src={lovito} alt="" />
                    <div>Thời trang -50%</div>
                  </div>
                </a>
                <a href="fb.com">
                  <div>
                    <img src={omo} alt="" />
                    <div>Mua 1 được 2</div>
                  </div>
                </a>
                <a href="fb.com">
                  <div>
                    <img src={loreal} alt="" />
                    <div>Ưu đãi đến 50%</div>
                  </div>
                </a>
                <a href="fb.com">
                  <div>
                    <img src={cocoon} alt="" />
                    <div>Mua 1 tặng 1</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
