import React from 'react'
import ContainerForm from "../../components/ContainerForm"
import FooterRegisterLogin from "../../components/FooterRegisterLogin"
import FormLogin from "../../components/FormLogin";
import HeaderRegisterLogin from '../../components/HeaderRegisterLogin/index';
export default function Signin() {
  return (
    <div>
      <HeaderRegisterLogin text={"Đăng nhập"} />
      <ContainerForm component={FormLogin}/>
      <FooterRegisterLogin/>
    </div>
  )
}
