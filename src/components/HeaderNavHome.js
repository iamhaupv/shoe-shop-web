import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faQuestion } from "@fortawesome/free-solid-svg-icons";
import fb from "../assets/fbw.png";
import ig from "../assets/igw.png";
export default function HeaderNavHome() {
  return (
    <div
      className="flex justify-center"
      style={{fontFamily:
        "'Helvetica Neue', Helvetica, Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', 'Hiragino Sans GB', '儷黑 Pro', 'LiHei Pro', 'Heiti TC', '微軟正黑體', 'Microsoft JhengHei UI', 'Microsoft JhengHei', sans-serif",
      lineHeight: 1.2,}}
    >
      {/* nav.container.navbar */}
      <div
        className="flex justify-between items-center"
        style={{
          width: "1200px",
          height: "34px",
          margin: "0px 34.4px",
          fontSize: "13px",
        }}
      >
        {/* left */}
        <div
          className="flex justify-center items-center"
          style={{ width: "auto", height: "24px" }}
        >
          {/* kenh nguoi ban */}
          <a
            className="flex justify-center items-center"
            href="fb.com"
            style={{
              width: "auto",
              height: "23.6px",
              padding: "4px",
              color: "#ffffff",
            }}
          >
            Kênh người bán
          </a>
          {/* | */}
          <div
            className="flex justify-center items-center"
            style={{ width: "auto", height: "15px", color: "#f86c5c" }}
          >
            |
          </div>
          {/* Tải ứng dụng */}
          <a
            className="flex justify-center items-center "
            href="fb.com"
            style={{
              width: "auto",
              height: "26.3px",
              padding: "4px",
              color: "#ffffff",
            }}
          >
            Tải ứng dụng
          </a>
          {/* | */}
          <div
            className="flex justify-center items-center"
            style={{ width: "auto", height: "15px", color: "#f86c5c" }}
          >
            |
          </div>
          {/* kết nối */}
          <div
            className="flex justify-center items-center"
            style={{
              width: "auto",
              height: "23.6px",
              padding: "4px",
              color: "#ffffff",
            }}
          >
            Kết nối
          </div>
          {/*  */}
          <div
            className="flex justify-center items-center"
            style={{
              width: "auto",
              height: "24px",
              padding: "4px 0px 4px 4px",
            }}
          >
            {/* fb */}
            <a
              href="fb.com"
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 10px 0px 0px",
              }}
            >
              <img
                src={fb}
                alt="Kết nối Facebook"
                title="Kết nối Facebook"
                className="object-cover"
              />
            </a>
            {/* ig */}
            <a
              href="fb.com"
              style={{
                width: "16px",
                height: "16px",
                margin: "0px 10px 0px 0px",
              }}
            >
              <img
                src={ig}
                alt="Kết nối Instagram!"
                title="Kết nối Instagram!"
              />
            </a>
          </div>
        </div>
        {/* right  */}
        <div
          className="flex items-center"
          style={{ padding: "0px 5px 0px 0px" }}
        >
          {/* Thông báo */}
          <a className="flex justify-center items-center"
            href="fb.com"
            style={{ width: "auto", height: "30px", padding: "4px" }}
          >
            <span style={{ width: "14px", height: "18px", color: "#ffffff" }}>
              <FontAwesomeIcon icon={faBell} />
            </span>
            <span
              style={{
                width: "auto",
                height: "15.6px",
                color: "#ffffff",
                margin: "0px 0px 0px 5px",
              }}
            >
              Thông Báo
            </span>
          </a>
          {/* Hỗ trợ*/}
          <a className="flex justify-center items-center"
            href="fb.com"
            style={{ width: "auto", height: "30px", padding: "4px" }}
          >
            <span style={{ width: "14px", height: "18px", color: "#ffffff" }}>
              <FontAwesomeIcon icon={faQuestion} />
            </span>
            <span
              style={{
                width: "auto",
                height: "15.6px",
                color: "#ffffff",
                margin: "0px 0px 0px 5px",
              }}
            >
              Hỗ Trợ
            </span>
          </a>
          {/* avt */}
          <div className="flex justify-center items-center" style={{width: "auto", height: "32px", padding: "0px 10px"}}>
              {/* img */}
              <img src={fb} alt="" className="h-[20.4px] w-[20.4px] object-cover" />
              <div style={{with: "auto", height: "16.8px", color: "#ffffff", fontSize: "14px", padding: "0px 0px 0px 5px"}}>
                54545
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
