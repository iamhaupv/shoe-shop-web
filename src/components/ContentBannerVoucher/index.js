import React from "react";
import banner_voucher1 from "../../assets/banner_voucher1.jpg";
import banner_voucher2 from "../../assets/banner_voucher2.jpg";
import banner_voucher3 from "../../assets/banner_voucher3.jpg";
import "./ContentBannerVoucher.css";
export default function ContentBannerVoucher() {
  return (
    <>
      {/* container__banner__voucher */}
      <div className="container__banner__voucher">
        <a href="fb.com">
          <img src={banner_voucher1} alt="banner_voucher1" />
        </a>
        <a href="fb.com">
          <img src={banner_voucher2} alt="banner_voucher2" />
        </a>
        <a href="fb.com">
          <img src={banner_voucher3} alt="banner_voucher3" />
        </a>
      </div>
    </>
  );
}
