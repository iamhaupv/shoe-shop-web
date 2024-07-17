import React from "react";
import banner_myshoe from "../assets/banner_myshoe_1.webp";
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
          <div style={{ width: "550px", height: "476.4px", marginRight: "90px" }}>
            <div
              className="flex justify-center items-center"
              style={{ width: "100%", height: "376.4px" }}
            >
              <img
                src={banner_myshoe}
                alt=""
                className="h-[100%] w-[100%] object-cover"
              />
            </div>
            <div
              style={{
                width: "100%",
                height: "100px",
                textAlign: "center",
                fontSize: "28px",
                color: "#ffffff",
              }}
            >
              Nền tảng thương mại điện tử <br /> yêu thích ở Đông Nam Á & Đài
              Loan
            </div>
          </div>
        </div>
        {Component && <Component />}
      </div>
    </div>
  );
}
