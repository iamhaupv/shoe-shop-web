import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import logo_h from "../assets/logo_h.png"
export default function HeaderContainer() {
  const [focusSearch, setFocusSearch] = useState(false) // focus search
  // handle focus
  const handleFocusSearch = () => {
    setFocusSearch(true)
  }
  // handle blur search
  const handleBlurSearch = () => {
    setFocusSearch(false)
  }
  return (
    <div
      className="flex justify-center"
      style={{
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', 'Hiragino Sans GB', '儷黑 Pro', 'LiHei Pro', 'Heiti TC', '微軟正黑體', 'Microsoft JhengHei UI', 'Microsoft JhengHei', sans-serif",
        lineHeight: 1.2,
      }}
    >
      <div
        className="flex justify-center"
        style={{
          width: "1200px",
          height: "85px",
          margin: "0px 34.4px",
          padding: "16px 0px 10px",
        }}
      >
        {/* logo */}
        <button
         onClick={() => window.location.reload()}
          className="block flex"
          style={{
            width: "202px",
            height: "59px",
            padding: "0px 40px 0px 0px",
          }}
        >
          <div className="flex" style={{ width: "162px", height: "50px" }}>
            <span
              className="block flex justify-center items-center"
              style={{ width: "146.15px", height: "46.73px" }}
            >
              <span
                style={{
                  fontSize: "50px",
                  background: "#f94c2f",
                  display: "inline-block",
                }}
              >
                <img src={logo_h} alt="" />
              </span>
              <span
                style={{
                  fontSize: "30px",
                  color: "#ffffff",
                  display: "inline-block",
                }}
              >
                auShop
              </span>
            </span>
          </div>
        </button>
        {/* form */}
        <div>
          <div
            className="flex justify-center items-center"
            style={{
              width: "840px",
              height: "40px",
              padding: "3px",
              background: "#ffffff",
              position: focusSearch ? "relative" : "",
              boxSizing: "border-box"
            }}
            onFocus={handleFocusSearch}
              onBlur={handleBlurSearch}
          >
            <div
            className="flex justify-center items-center"
              style={{
                width: "774px",
                height: focusSearch ? "50px" : "34px",
                padding: focusSearch ? "10px" : "0px 10px",
                background: focusSearch ? "#f94c2f" : "#ffffff",
                position: focusSearch ? "absolute" : "",
                left: focusSearch ? "-3px" : "",
                border: focusSearch ? "2px solid black" : "",
                boxSizing: "border-box"
              }}
              
            >
              {/* input */}
              <input
                style={{
                  width: "754px",
                  height: "34px",
                  background: "#ffffff",
                  outline: "none",
                  boxSizing: "border-box",
                  borderRadius: "2px",
                  padding: "4px 6px"
                }}
                placeholder="Tìm sản phẩm"
              />
            </div>
            {/* button */}
            <button
            className="bg-search"
              style={{
                width: "64px",
                height: "34px",
                padding: "0px 15px",
                color: "#ffffff",
                position: focusSearch ? "absolute" : "",
                right: focusSearch ? "3px" : "",
                boxSizing: "border-box",
                cursor: "pointer"
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
          
          {/* menu */}
          <div
            style={{ width: "840px", height: "24px", margin: "3px 0px 0px" }}
          >
            <ul className="flex">
              {/* jordan */}
              <li>
                <a
                  style={{
                    width: "auto",
                    height: "14px",
                    margin: "5px 0px",
                    fontSize: "12px",
                    color: "#ffffffe6",
                  }}
                  href="fb.com"
                >
                  Giày Jordan
                </a>
              </li>
              {/* nike */}
              <li>
                <a
                  style={{
                    width: "auto",
                    height: "14px",
                    margin: "5px 0px 5px 13px",
                    fontSize: "12px",
                    color: "#ffffffe6",
                  }}
                  href="fb.com"
                >
                  Giày Nike
                </a>
              </li>
              {/* adidas */}
              <li>
                <a
                  style={{
                    width: "auto",
                    height: "14px",
                    margin: "5px 0px 5px 13px",
                    fontSize: "12px",
                    color: "#ffffffe6",
                  }}
                  href="fb.com"
                >
                  Giày Adidas
                </a>
              </li>
              {/* mlb */}
              <li>
                <a
                  style={{
                    width: "auto",
                    height: "14px",
                    margin: "5px 0px 5px 13px",
                    fontSize: "12px",
                    color: "#ffffffe6",
                  }}
                  href="fb.com"
                >
                  Giày MLB
                </a>
              </li>
              {/* balance */}
              <li>
                <a
                  style={{
                    width: "auto",
                    height: "14px",
                    margin: "5px 0px 5px 13px",
                    fontSize: "12px",
                    color: "#ffffffe6",
                  }}
                  href="fb.com"
                >
                  Giày Balance
                </a>
              </li>
              {/* converse */}
              <li>
                <a
                  style={{
                    width: "auto",
                    height: "14px",
                    margin: "5px 0px 5px 13px",
                    fontSize: "12px",
                    color: "#ffffffe6",
                  }}
                  href="fb.com"
                >
                  Giày Converse
                </a>
              </li>
              {/* dior */}
              <li>
                <a
                  style={{
                    width: "auto",
                    height: "14px",
                    margin: "5px 0px 5px 13px",
                    fontSize: "12px",
                    color: "#ffffffe6",
                  }}
                  href="fb.com"
                >
                  Giày Dior
                </a>
              </li>
              {/* gucci */}
              <li>
                <a
                  style={{
                    width: "auto",
                    height: "14px",
                    margin: "5px 0px 5px 13px",
                    fontSize: "12px",
                    color: "#ffffffe6",
                  }}
                  href="fb.com"
                >
                  Giày Gucci
                </a>
              </li>
              {/* lv */}
              <li>
                <a
                  style={{
                    width: "auto",
                    height: "14px",
                    margin: "5px 0px 5px 13px",
                    fontSize: "12px",
                    color: "#ffffffe6",
                  }}
                  href="fb.com"
                >
                  Giày LV
                </a>
              </li>
              {/* phụ kiện */}
              <li>
                <a
                  style={{
                    width: "auto",
                    height: "14px",
                    margin: "5px 0px 5px 13px",
                    fontSize: "12px",
                    color: "#ffffffe6",
                  }}
                  href="fb.com"
                >
                  Phụ Kiện
                </a>
              </li>
              {/* thông tin */}
              <li>
                <a
                  style={{
                    width: "auto",
                    height: "14px",
                    margin: "5px 0px 5px 13px",
                    fontSize: "12px",
                    color: "#ffffffe6",
                  }}
                  href="fb.com"
                >
                  Thông Tin
                </a>
              </li>
              {/* voucher */}
              <li>
                <a
                  style={{
                    width: "auto",
                    height: "14px",
                    margin: "5px 0px 5px 13px",
                    fontSize: "12px",
                    color: "#ffffffe6",
                  }}
                  href="fb.com"
                >
                  Voucher
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* cart */}
        <div
          className="flex justify-center items-center"
          style={{
            width: "138px",
            height: "59px",
            margin: "0px 10px",
            padding: "0px 0px 5px",
          }}
        >
          <div
            className="flex justify-center items-center"
            style={{ width: "55.78px", height: "46px", padding: "10px 0px" }}
          >
            <a
              href="/cart"
              style={{
                width: "50.78px",
                height: "26px",
                margin: "0px 0px 0px 5px",
              }}
            >
              <div
                className="flex justify-center items-center"
                style={{
                  width: "26px",
                  height: "26px",
                  margin: "0px 10px 0px 0px",
                  color: "#ffffff",
                  fontSize: "35px",
                }}
              >
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
