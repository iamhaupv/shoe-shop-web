import React from "react";
import ContentHeader from "./ContentHeader";
import ContentProduct from "./ContentProduct";
import ContentFlashSale from "./ContentFlashSale";

export default function Content() {
  return (
    <div style={{ background: "rgb(245 245 245)" }}>
      <ContentHeader />
      <ContentProduct />
      <ContentFlashSale/>
    </div>
  );
}
