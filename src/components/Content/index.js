import React from "react";
import ContentHeader from "../ContentHeader";
import ContentProduct from "../ContentProduct";
import ContentFlashSale from "../FrameFlashSale";
import ContentBannerVoucher from "../ContentBannerVoucher";
import ContentMall from "../ContentMall";
import FooterContent from "../FooterContent";
import "./Content.css";
export default function Content() {
  return (
    <>
      <div className="container__content">
        <ContentHeader />
        <ContentProduct />
        <ContentFlashSale />
        <div className="content__banner__voucher">
          <ContentBannerVoucher />
        </div>
        <div className="content__mall">
          <ContentMall />
        </div>
        <FooterContent />
      </div>
    </>
  );
}
