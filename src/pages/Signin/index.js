import React from 'react'
import FooterRegisterLogin from "../../components/FooterRegisterLogin"
import HeaderRegisterLogin from '../../components/HeaderRegisterLogin';
import ContentRegisterLogin from "../../components/ContentRegisterLogin"
import FormLogin from "../../components/FormLogin"
export default function Signin() {
  return (
    <>
      <HeaderRegisterLogin text={"Đăng nhập"} />
      <ContentRegisterLogin component={FormLogin}/>
      <FooterRegisterLogin/>
    </>
  )
}
