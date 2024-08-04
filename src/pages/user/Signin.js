import React from 'react'
import FooterRegisterLogin from "../../components/FooterRegisterLogin"
import FormLogin from "../../components/FormLogin";
import HeaderRegisterLogin from '../../components/HeaderRegisterLogin';
import ContentRegisterLogin from "../../components/ContentRegisterLogin"
export default function Signin() {
  return (
    <>
      <HeaderRegisterLogin text={"Đăng nhập"} />
      <ContentRegisterLogin component={FormLogin}/>
      <FooterRegisterLogin/>
    </>
  )
}
