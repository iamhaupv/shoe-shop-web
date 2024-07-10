import React from "react";
import banner_shopee from "../assets/banner-shopee.jpg"; // Đường dẫn tới hình ảnh

import FormRegister from "./FormRegister";
import FormLogin from "./FormLogin";

export default function ContainerForm({component: Component}) {
  return (
    <div className="h-[600px] w-auto mx-auto" style={{ backgroundColor: 'rgb(210, 5, 4)' }}>
      <div
        className="flex items-center bg-no-repeat bg-center h-full mx-auto w-auto"
        style={{
          backgroundImage: `url(${banner_shopee})`,
          backgroundSize: "contain",
        }}
      >
        <div>
          <div>{Component && <Component />}</div>
          {/* <FormLogin /> */}
        </div>
      </div>
    </div>
  );
}
