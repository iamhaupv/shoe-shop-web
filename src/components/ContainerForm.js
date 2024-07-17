import React from "react";
import banner_myshoe from "../assets/pngegg.png";
export default function ContainerForm({ component: Component }) {
  return (
    <div
      className="h-[600px] flex justify-center items-center"
      style={{ backgroundColor: "rgb(238, 77, 45)" }}
    >
      <div
        className="flex items-center justify-end"
        style={{ width: "1040px", height: "476.4px" }}
      >
        <div className="flex justify-center items-center">
          {/*  */}
          <div style={{ width: "550px", height: "450.4px", marginRight: "10px", }}>
            <div
              className="flex justify-center items-center"
              style={{ width: "390px", height: "476.4px" }}
            >
              <img
                src={banner_myshoe}
                alt=""
                className="h-[auto] w-[auto] object-cover"
              />
            </div>

          </div>
        </div>
        {Component && <Component />}
      </div>
    </div>
  );
}
