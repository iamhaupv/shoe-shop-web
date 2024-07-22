import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import fb from "../assets/fbw.png";
import ig from "../assets/igw.png";
import { useNavigate } from "react-router-dom";
import qr from "../assets/5b6e787c2e5ee052.png";
import chplay from "../assets/1fddd5ee3e2ead84.png";
import applestore from "../assets/135555214a82d8e1.png";
import appgallery from "../assets/4abb5c0809818b22.png";
export default function HeaderNavHome() {
  const navigate = useNavigate();
  const [user, setUser] = useState({}); // user
  const [hoverUser, setHoverUser] = useState(false); // hover user
  const [hoverDown, setHoverDown] = useState(false); // hover down
  // hover down enter
  const handleHoverDownEnter = () => {
    setHoverDown(true);
  };
  // hover down leave
  const handleHoverDownLeave = () => {
    setHoverDown(false);
  };
  // fetch user
  useEffect(() => {
    const fetchUser = () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("Token is valid");
        }
        const data = JSON.parse(atob(token.split(".")[1]));
        setUser(data.data);
      } catch (error) {
        throw new Error(error);
      }
    };
    fetchUser();
  }, []);
  // handle hover user enter
  const handleHoverUserEnter = () => {
    setHoverUser(true);
  };
  // handle hover user leave
  const hanldeHoverUserLeave = () => {
    setHoverUser(false);
  };
  // handle logout
  const handldeLogout = () => {
    const confirm = window.confirm("Bạn có muốn đăng xuất không");
    if (confirm) {
      localStorage.removeItem("token");
      navigate("/signin");
    }
  };
  return (
    <div
      className="flex justify-center"
      style={{
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', 'Hiragino Sans GB', '儷黑 Pro', 'LiHei Pro', 'Heiti TC', '微軟正黑體', 'Microsoft JhengHei UI', 'Microsoft JhengHei', sans-serif",
        lineHeight: 1.2,
        background: "#f94c2f",
      }}
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
            className="flex justify-center items-center div-text-gray"
            href="fb.com"
            style={{
              width: "auto",
              height: "23.6px",
              padding: "4px",
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
          <div
            className="flex justify-center items-center"
            href="fb.com"
            style={{
              width: "auto",
              height: "26.3px",
              padding: "4px",
              color: "#ffffff",
              position: "relative",
            }}
            onMouseEnter={handleHoverDownEnter}
            onMouseLeave={handleHoverDownLeave}
          >
            <span className="div-text-gray">Tải ứng dụng</span>
            <div
              style={{
                width: "200px",
                height: "255px",
                background: "#ffffff",
                display: hoverDown ? "block" : "none",
                position: "absolute",
                top: "30px",
                borderLeft: "1px solid hsla(0,0%,100%,.22)",
                borderRight: "1px solid hsla(0,0%,100%,.22)",
                left: "-6px",
                zIndex: "10",
                padding: "5px",
              }}
              className="flex justify-center items-center"
            >
              <img src={qr} alt="" className="object-cover" />
              <div
                className="flex justify-center items-center"
                style={{ flexWrap: "wrap" }}
              >
                <div className="flex justify-center w-[80px] mt-2 ml-2">
                  <img
                    src={applestore}
                    alt=""
                    className="object-cover"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="flex justify-center w-[80px] mt-2 ml-2">
                  <img src={chplay} alt="" className="object-cover" />
                </div>
                <div className="flex justify-center w-[80px] mt-2">
                  <img src={appgallery} alt="" className="object-cover" />
                </div>
                <div className="flex justify-center w-[80px]"></div>
              </div>
            </div>
          </div>
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
          <a
            className="flex items-center div-text-gray"
            href="https://fb.com"
            style={{ width: "auto", height: "30px", padding: "4px" }}
          >
            <span className="div-text-gray">
              <FontAwesomeIcon icon={faBell} className="mr-2" />
              <span>Thông Báo</span>
            </span>
          </a>
          {/* Hỗ trợ*/}
          <a
            className="flex items-center div-text-gray"
            href="https://fb.com"
            style={{ width: "auto", height: "30px", padding: "4px" }}
          >
            <span className="div-text-gray">
              <FontAwesomeIcon icon={faCircleQuestion} className="mr-2" />
              <span>Hỗ Trợ</span>
            </span>
          </a>

          {/* avt */}
          <div
            className="relative"
            href="fb.com"
            onMouseEnter={handleHoverUserEnter}
            onMouseLeave={hanldeHoverUserLeave}
          >
            <div
              className="flex justify-center items-center"
              style={{ width: "auto", height: "32px", padding: "0px 10px" }}
            >
              {/* img */}
              <img
                src={user.avatar}
                alt=""
                className="rounded-full h-[20.4px] w-[20.4px] object-cover"
              />
              <div
                style={{
                  width: "auto",
                  height: "16.8px",
                  color: "#ffffff",
                  fontSize: "14px",
                  padding: "0px 0px 0px 5px",
                }}
              >
                <span className="div-text-gray">{user.name}</span>
              </div>
            </div>
            <div
              className="absolute w-[100%]"
              style={{
                display: hoverUser ? "block" : "none",
                background: "#ffffff",
                textAlign: "center",
              }}
            >
              <ul style={{ fontSize: "14px" }}>
                <li
                  className="li"
                  style={{
                    padding: "7px 0px",
                    display: "block",
                    transition: "color 0.3s ease",
                  }}
                >
                  <a href="fb.com">Tài khoản của tôi</a>
                </li>
                <li
                  className="li"
                  style={{
                    padding: "7px 0px",
                    display: "block",
                    transition: "color 0.3s ease",
                  }}
                >
                  <a href="fb.com">Đơn mua</a>
                </li>
                <li
                  className="li"
                  style={{
                    padding: "7px 0px",
                    display: "block",
                    transition: "color 0.3s ease",
                  }}
                >
                  <div>
                    <button onClick={handldeLogout}>Đăng xuất</button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
