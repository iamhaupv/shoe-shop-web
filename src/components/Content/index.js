import React from "react";
import ContentHeader from "../ContentHeader";
import ContentProduct from "../ContentProduct";
import ContentFlashSale from "../ContentFlashSale";
import ContentBannerVoucher from "../ContentBannerVoucher";
import ContentMall from "../ContentMall";
import ContentListProduct from "../ContentListProduct";
import FooterContent from "../FooterContent";
import "./Content.css";
export default function Content() {
  return (
    <>
      <div className="container__content">
        <ContentHeader />
        <ContentProduct />
        <ContentFlashSale />
        <ContentBannerVoucher />
        <ContentMall />
        <ContentListProduct />
        <FooterContent />
      </div>
    </>
  );
}
