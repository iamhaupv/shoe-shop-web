import React from "react";
import banner_myshoe from "../../assets/pngegg.png";
import "./ContentRegisterLogin.css";
export default function ContentRegisterLogin({ component: Component }) {
  return (
    <>
      {/* content */}
      <div className="flex justify-center items-center content">
        {/* content__child */}
        <div className="flex items-center justify-end content__child ">
          <div className="flex justify-center items-center">
            {/* banner */}
            <div className="banner">
              {/* banner__child */}
              <div className="flex justify-center items-center banner__child">
                {/* banner__child__img */}
                <img
                  src={banner_myshoe}
                  alt="Banner"
                  className="banner__child__img"
                />
              </div>
            </div>
          </div>
          {Component && <Component />}
        </div>
      </div>
    </>
  );
}
