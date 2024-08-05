import React from "react";
import HeaderRegisterLogin from "../../components/HeaderRegisterLogin"
import ContentRegisterLogin from "../../components/ContentRegisterLogin"
import FooterRegisterLogin from "../../components/FooterRegisterLogin"
import FormRegister from "../../components/FormRegister"
export default function Signup() {
  return (
    <>
        <HeaderRegisterLogin text={"Đăng ký"} />
        <ContentRegisterLogin component={FormRegister} />
        <FooterRegisterLogin />
    </>
  );
}
