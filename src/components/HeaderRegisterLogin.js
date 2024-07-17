import React from "react";
import logo_h from "../assets/logo_h.png"
export default function HeaderRegisterLogin({ title }) {
  return (
    <div
      className="flex justify-center items-center"
      style={{
        width: "100%",
        height: "84px",
        background: "#ffffff",
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', 'Hiragino Sans GB', '儷黑 Pro', 'LiHei Pro', 'Heiti TC', '微軟正黑體', 'Microsoft JhengHei UI', 'Microsoft JhengHei', sans-serif",
        lineHeight: 1.2,
      }}
    >
      <div
        className="flex justify-between items-center"
        style={{ width: "1200px", height: "32px", margin: "0px 34.4px" }}
      >
        <div className="flex justify-center items-center">
          <a href="fb.com"><div
            className="flex justify-center items-center"
            style={{ width: "190px", height: "42px" }}
          >
            <div
              className="flex justify-center items-center"
              style={{ width: "135px", height: "39.25px", color: "#ee4d2d", margin: "-10px -18px 0px 0px" }}
            >
              <span className="flex justify-center items-center" style={{background: "#ffffff"}}>
               <img src={logo_h} alt="" className="object-cover w-[100%] h-[100%]"/>
              </span>
              <span style={{ fontSize: "24px", marginTop: "10px", marginLeft: "5px" }}>auShop</span>
            </div>
          </div></a>
          <div
            className="flex justify-center items-center"
            style={{
              width: "117.44px",
              height: "28.8px",
              color: "#222222",
              fontSize: "24px",
            }}
          >
            {title}
          </div>
        </div>
        <div>
          <a
            href="fb.com"
            style={{
              width: "110.38px",
              height: "16.8px",
              color: "#ee4d2d",
              fontSize: "14px",
              margin: "0px 15px 0px 0px",
            }}
          >
            Bạn cần giúp đỡ?
          </a>
        </div>
      </div>
    </div>
  );
}
