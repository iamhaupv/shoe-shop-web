import React from "react";
import HeaderRegisterLogin from "../../components/HeaderRegisterLogin"
import ContainerForm from "../../components/ContainerForm"
import FooterRegisterLogin from "../../components/FooterRegisterLogin"
import FormRegister from "../../components/FormRegister"
export default function Signup() {
  return (
    <>
        <HeaderRegisterLogin text={"Đăng ký"} />
        <ContainerForm component={FormRegister} />
        <FooterRegisterLogin />
    </>
  );
}
