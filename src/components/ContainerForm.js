import React from "react";
import banner_ver1 from "../assets/banner-ver1.jpg";
import FormRegisterLogin from "./FormRegisterLogin";
export default function ContainerForm() {
  return (
    <div
      className="bg-orange-500 h-screen w-full flex mx-auto px-[300px] bg-center bg-cover"
      style={{ backgroundImage: `url(${banner_ver1})` }}
    >
        <FormRegisterLogin/>
    </div>
  );
}
