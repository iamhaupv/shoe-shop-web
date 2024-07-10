import React from "react";
import logo from "../assets/1.png";
export default function HeaderRegisterLogin({title}) {
  return (
    <div className="h-[84px] w-auto flex justify-between items-center mx-auto px-[15%]">
      {/* image logo */}
      <div className="flex items-center h-full w-full mt-2">
        <img src={logo} alt="logo shop imhau" className="h-[50px] w-[190px] object-cover" />
        {/* title */}
        <div className="ml-4 text-2xl flex items-center">{title}</div>
      </div>
      {/* help */}
      <div className="flex jus items-center w-[150px]">
        <span style={{color: '#EE4D2D' }}>Bạn cần giúp đỡ?</span>
      </div>
    </div>
  );
}
