import React from "react";
import ContentHeader from "../ContentHeader";
import ContentProduct from "../ContentProduct";
import ContentFlashSale from "../ContentFlashSale";
import ContentBannerVoucher from "../ContentBannerVoucher";
import ContentMall from "../ContentMall";
import ContentListProduct from "../ContentListProduct";
import FooterContent from "../FooterContent";

export default function Content() {
  return (
    <>
      <div style={{ background: "#f5f5f5" }}>
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
