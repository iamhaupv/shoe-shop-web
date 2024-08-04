import React from "react";
import logo_h from "../../assets/logo_h.png";
import "./HeaderRegisterLogin.css";
export default function HeaderRegisterLogin(props) {
  return (
    // header
    <div className="flex justify-center items-center header">
      {/* header__content */}
      <div className="flex justify-between items-center header__content">
        {/* header__content__left */}
        <div className="flex justify-center items-center header__content__left">
          {/* header_content__left wrap__logo */}
          <a href="fb.com">
            <div className="flex justify-center items-center wrap__logo">
              {/* wrap__logo__child */}
              <div className="flex justify-center items-center wrap__logo__child">
                {/* wrap_logo_img */}
                <div className="flex justify-center items-center">
                  <img src={logo_h} alt="Logo" className="wrap_logo_img" />
                </div>
                {/* wrap__logo__text */}
                <span className="wrap__logo__text">auShop</span>
              </div>
            </div>
          </a>
          {/* wrap__text */}
          <div className="flex justify-center items-center wrap__text">
            {props.text}
          </div>
        </div>
        {/* header__content__right */}
        <div>
          <a
            href="fb.com"
            className="header__content__right"
          >
            Bạn cần giúp đỡ?
          </a>
        </div>
      </div>
    </div>
  );
}
