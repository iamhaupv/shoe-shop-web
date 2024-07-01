import React from "react";
import logo from "../assets/4.png";
export default function HeaderRegisterLogin({title}) {
  return (
    <div className="h-[120px] flex justify-between items-center w-full mx-auto px-[180px]">
      {/* image logo */}
      <div className="flex h-full w-full mt-2">
        <img src={logo} alt="logo shop imhau" className="h-[110px] w-[170px] object-cover" />
        {/* title */}
        <div className="ml-[30px] mt-[60px]">
          <span className="text-2xl">{title}</span>
        </div>
      </div>
      {/* help */}
      <div className="flex w-[150px] mt-[50px]">
        <span className="">Bạn cần giúp đỡ?</span>
      </div>
    </div>
  );
}
