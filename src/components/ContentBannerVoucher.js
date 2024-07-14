import React from "react";
import banner_voucher1 from "../assets/banner_voucher1.jpg";
import banner_voucher2 from "../assets/banner_voucher2.jpg";
import banner_voucher3 from "../assets/banner_voucher3.jpg";
export default function ContentBannerVoucher() {
  return (
    <div
      style={{ marginTop: "15px" }}
      className="flex justify-center items-center"
    >
      <a
        className="flex justify-center items-center"
        href="fb.com"
        style={{
          width: "400px",
          height: "110px",
          color: "#0000EE",
          fontSize: "14px",
          padding: "16px",
          background: "#ffffff",
        }}
      >
        <img
          src={banner_voucher1}
          className="h-[90px] w-[390px] object-cover"
          alt="banner_voucher1"
        />
      </a>
      <a
        className="flex justify-center items-center"
        href="fb.com"
        style={{
          width: "400px",
          height: "110px",
          color: "#0000EE",
          fontSize: "14px",
          padding: "16px",
          background: "#ffffff",
        }}
      >
        <img
          className="h-[90px] w-[390px] object-cover"
          src={banner_voucher2}
          alt="banner_voucher2"
        />
      </a>
      <a
        className="flex justify-center items-center"
        href="fb.com"
        style={{
          width: "400px",
          height: "110px",
          color: "#0000EE",
          fontSize: "14px",
          padding: "16px",
          background: "#ffffff",
        }}
      >
        <img
          className="h-[90px] w-[390px] object-cover"
          src={banner_voucher3}
          alt="banner_voucher3"
        />
      </a>
    </div>
  );
}
