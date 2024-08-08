import React from "react";
import back from "../../assets/back.png";
import khien from "../../assets/khien.png";
import xe from "../../assets/xe.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import banner_shopee_mall1 from "../../assets/banner_shopee_mall1.jpg";
import samsung from "../../assets/samsung.png";
import serum from "../../assets/serum.png";
import feelex from "../../assets/feelex.png";
import lovito from "../../assets/lovito.jpg";
import omo from "../../assets/omo.png";
import loreal from "../../assets/loreal.jpg";
import deli from "../../assets/deli.png";
import cocoon from "../../assets/cocoon.png";
export default function ContentMall() {
  return (
    <>
      <div className="flex justify-center items-center bg-red-200">
        <div
          className="flex justify-center items-center"
          style={{
            marginTop: "15px",
            flexDirection: "column",
            background: "#ffffff",
            width: "1200px",
          }}
        >
          {/* header */}
          <div
            className="flex justify-center items-center"
            style={{
              width: "1200px",
              height: "60.8px",
              padding: "0px 20px",
              background: "#ffffff",
              borderBottom: "1px solid #f5f5f5",
            }}
          >
            <div
              className="flex"
              style={{ width: "1025.56px", height: "20px" }}
            >
              <a
                href="fb.com"
                style={{
                  width: "120px",
                  height: "17px",
                  fontSize: "17px",
                  color: "#D0011B",
                  textTransform: "uppercase",
                }}
              >
                Shopee Mall
              </a>
              {/*  */}
              <div
                className="flex "
                style={{
                  width: "890.56px",
                  height: "20px",
                  margin: "0px 0px 0px 15px",
                  padding: "0px 0px 0px 15px",
                  borderLeft: "1px solid #d8d8d8",
                }}
              >
                {/* back */}
                <div
                  className="flex justify-center items-center"
                  style={{
                    width: "220.74px",
                    height: "20px",
                    color: "#333333",
                    fontSize: "16px",
                    margin: "0px 15px 0px 0px",
                  }}
                >
                  <img
                    style={{
                      width: "17px",
                      height: "17px",
                      margin: "0px 6px 0px 0px",
                    }}
                    src={back}
                    alt=""
                  />
                  Trả hàng Miễn phí 15 ngày
                </div>
                {/* khien */}
                <div
                  className="flex justify-center items-center"
                  style={{
                    width: "196.46px",
                    height: "20px",
                    color: "#333333",
                    fontSize: "16px",
                    margin: "0px 15px 0px 0px",
                  }}
                >
                  <img
                    style={{
                      width: "17px",
                      height: "17px",
                      margin: "0px 6px 0px 0px",
                    }}
                    src={khien}
                    alt=""
                  />
                  Hàng chính hãng 100%
                </div>
                {/* xe */}
                <div
                  className="flex justify-center items-center"
                  style={{
                    width: "178.65px",
                    height: "20px",
                    color: "#333333",
                    fontSize: "16px",
                    margin: "0px 15px 0px 0px",
                  }}
                >
                  <img
                    style={{
                      width: "17px",
                      height: "17px",
                      margin: "0px 6px 0px 0px",
                    }}
                    src={xe}
                    alt=""
                  />
                  Miễn phí vận chuyển
                </div>
              </div>
            </div>
            <a
              href="fb.com"
              className="flex"
              style={{
                width: "100.44px",
                height: "20px",
                fontSize: "14px",
                color: "#D0011B",
              }}
            >
              Xem tất cả
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "0px 0px 0px 8px",
                }}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            </a>
          </div>
          {/* content  */}
          <div className="flex" style={{ marginTop: "15px" }}>
            {/* img */}
            <a style={{ width: "390px", height: "463.89px" }} href="fb.com">
              <img src={banner_shopee_mall1} alt="" />
            </a>
            {/*  */}
            <div
              className="flex"
              style={{
                fontSize: "18px",
                color: "#D0011B",
                flexDirection: "column",
              }}
            >
              {/*  */}
              <div className="flex">
                {/* Quà mọi đơn */}
                <a href="fb.com">
                  <div
                    className="relative flex justify-center items-center"
                    style={{
                      width: "180px",
                      height: "216px",
                      flexDirection: "column",
                      // padding: "216px 0px 0px",
                    }}
                  >
                    <img className="absolute" src={samsung} alt="" />
                    <div
                      className="absolute flex justify-center items-center"
                      style={{ width: "172px", height: "27px", bottom: "10px" }}
                    >
                      Quà mọi đơn
                    </div>
                  </div>
                </a>
                {/* Giảm sốc 50% */}
                <a href="fb.com">
                  <div
                    className="relative flex justify-center items-center"
                    style={{
                      width: "180px",
                      height: "216px",
                      flexDirection: "column",
                      // padding: "216px 0px 0px",
                    }}
                  >
                    <img className="absolute" src={serum} alt="" />
                    <div
                      className="absolute flex justify-center items-center"
                      style={{ width: "172px", height: "27px", bottom: "10px" }}
                    >
                      Giảm sốc 50%
                    </div>
                  </div>
                </a>
                {/* Giảm đến 50% */}
                <a href="fb.com">
                  <div
                    className="relative flex justify-center items-center"
                    style={{
                      width: "180px",
                      height: "216px",
                      flexDirection: "column",
                      // padding: "216px 0px 0px",
                    }}
                  >
                    <img className="absolute" src={feelex} alt="" />
                    <div
                      className="absolute flex justify-center items-center"
                      style={{ width: "172px", height: "27px", bottom: "10px" }}
                    >
                      Giảm đến 50%
                    </div>
                  </div>
                </a>
                {/* Deli siêu sale */}
                <a href="fb.com">
                  <div
                    className="relative flex justify-center items-center"
                    style={{
                      width: "180px",
                      height: "216px",
                      flexDirection: "column",
                      // padding: "216px 0px 0px",
                    }}
                  >
                    <img className="absolute" src={deli} alt="" />
                    <div
                      className="absolute flex justify-center items-center"
                      style={{ width: "172px", height: "27px", bottom: "10px" }}
                    >
                      Deli siêu sale
                    </div>
                  </div>
                </a>
              </div>
              {/*  */}
              <div className="flex" style={{ marginTop: "25px" }}>
                {/* Thời trang -50% */}
                <a href="fb.com">
                  <div
                    className="relative flex justify-center items-center"
                    style={{
                      width: "180px",
                      height: "216px",
                      flexDirection: "column",
                      // padding: "216px 0px 0px",
                    }}
                  >
                    <img className="absolute" src={lovito} alt="" />
                    <div
                      className="absolute flex justify-center items-center"
                      style={{ width: "172px", height: "27px", bottom: "10px" }}
                    >
                      Thời trang -50%
                    </div>
                  </div>
                </a>
                {/* Mua 1 được 2 */}
                <a href="fb.com">
                  <div
                    className="relative flex justify-center items-center"
                    style={{
                      width: "180px",
                      height: "216px",
                      flexDirection: "column",
                      // padding: "216px 0px 0px",
                    }}
                  >
                    <img className="absolute" src={omo} alt="" />
                    <div
                      className="absolute flex justify-center items-center"
                      style={{ width: "172px", height: "27px", bottom: "10px" }}
                    >
                      Mua 1 được 2
                    </div>
                  </div>
                </a>
                {/* Ưu đãi đến 50% */}
                <a href="fb.com">
                  <div
                    className="relative flex justify-center items-center"
                    style={{
                      width: "180px",
                      height: "216px",
                      flexDirection: "column",
                      // padding: "216px 0px 0px",
                    }}
                  >
                    <img className="absolute" src={loreal} alt="" />
                    <div
                      className="absolute flex justify-center"
                      style={{ width: "172px", height: "27px", bottom: "10px" }}
                    >
                      Ưu đãi đến 50%
                    </div>
                  </div>
                </a>
                {/* Mua 1 tặng 1 */}
                <a href="fb.com">
                  <div
                    className="relative flex justify-center items-center"
                    style={{
                      width: "180px",
                      height: "216px",
                      flexDirection: "column",
                      // padding: "216px 0px 0px",
                    }}
                  >
                    <img className="absolute" src={cocoon} alt="" />
                    <div
                      className="absolute flex justify-center items-center"
                      style={{ width: "172px", height: "27px", bottom: "10px" }}
                    >
                      Mua 1 tặng 1
                    </div>
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
