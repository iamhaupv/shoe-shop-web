import React from "react";
import banner_shopee from "../assets/banner-shopee.jpg"; // Đường dẫn tới hình ảnh

import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";

export default function ContainerForm() {
  return (
    <div className="h-[600px] w-full" style={{ backgroundColor: 'rgb(210, 5, 4)' }}>
      <div
        className="flex items-center justify-center bg-no-repeat bg-center h-full w-full"
        style={{
          backgroundImage: `url(${banner_shopee})`,
          backgroundSize: "contain",
        }}
      >
        <div>
          <FormRegister />
          {/* <FormLogin /> */}
        </div>
      </div>
    </div>
  );
}
