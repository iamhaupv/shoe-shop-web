import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEyeSlash,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
export default function FormLogin() {
  const [phone, setPhone] = useState(""); // phone
  const [password, setPassword] = useState(""); // password
  // error
  const [phoneError, setPhoneError] = useState(false); // phone error
  const [passwordError, setPasswordError] = useState(false); // password error
  // icon
  const [iconPhone, setIconPhone] = useState(false); // icon phone
  const [iconPassword, setIconPassword] = useState(false); // icon password
  // eyes
  const [eye, setEye] = useState(false);
  const [formValid, setFormValid] = useState(false);
  // regex phone
  const regexPhone = (value) => {
    const regex = /^(0[3|5|7|8|9]\d{8}|0\d{9})$/;
    if (value === "" || !regex.test(value)) setPhoneError(true);
    else setPhoneError(false);
  };
  // handle change phone
  const handleChangePhone = (e) => {
    regexPhone(e.target.value);
    setPhone(e.target.value);
  };
  // handle blur phone
  const handleBlurPhone = (e) => {
    regexPhone(e.target.value);
    setIconPhone(true);
  };
  // regex password
  const regexPassword = (value) => {
    const regex = /^[A-Za-z\d]{8,}$/;
    if (value === "" || !regex.test(value)) setPasswordError(true);
    else setPasswordError(false);
  };
  // handle change password
  const handleChangePassword = (e) => {
    regexPassword(e.target.value);
    setPassword(e.target.value);
  };
  // handle blur password
  const handleBlurPassword = (e) => {
    regexPassword(e.target.value);
    setIconPassword(true);
  };
  // handle show password
  const handleShowPassword = () => {
    setEye(!eye);
  };
  // form valid
  useEffect(() => {
    setFormValid(
      !phoneError && !passwordError && phone.length >= 8 && password.length >= 8
    );
  }, [phone, password, phoneError, passwordError]);
  return (
    <div
      className="flex justify-center"
      style={{
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', 'Hiragino Sans GB', '儷黑 Pro', 'LiHei Pro', 'Heiti TC', '微軟正黑體', 'Microsoft JhengHei UI', 'Microsoft JhengHei', sans-serif",
        lineHeight: 1.2,
        width: "400px",
        height: "476.4px",
        background: "#ffffff",
        borderRadius: "4px",
        boxSizing: "border-box",
        boxShadow: ""
      }}
    >
      <div>
        {/* div title */}
        <div
          className="flex items-center"
          style={{ width: "400px", height: "102.8px", padding: "22px 30px" }}
        >
          <div
            style={{
              width: "auto",
              height: "24px",
              color: "#222222",
              fontSize: "20px",
            }}
          >
            Đăng nhập
          </div>
          <div
            className="flex justify-center items-center"
            style={{
              width: "222.14px",
              height: "58.8px",
              margin: "0px 0px 0px 20px",
            }}
          >
            <div
              style={{
                width: "166.4px",
                height: "58.8px",
                color: "#ffbf00",
                fontSize: "14px",
                margin: "0px 16px 0px 0px",
                padding: "14px 11px",
              }}
            ></div>
            <div style={{ width: "55.74px", height: "1px" }}></div>
          </div>
        </div>
        {/* content */}
        <div
          style={{
            width: "400px",
            height: "326.8px",
            padding: "0px 30px 30px",
          }}
        >
          <form style={{ width: "340px", height: "184px" }}>
            {/* div phone  */}
            <div>
              <input
                style={{
                  width: "338.4px",
                  height: "40.8px",
                  padding: "12px",
                  background: "#E8F0FE",
                }}
                value={phone}
                onChange={handleChangePhone}
                onBlur={handleBlurPhone}
                className={`text-sm border-2 border-solid border-gray w-full h-10 px-2 ${
                  phoneError ? "border-red-500 bg-red-50" : ""
                }`}
                placeholder="Email/Số điện thoại"
              />
              {iconPhone &&
                (phoneError ? (
                  <span className="text-red-500 absolute mt-16 text-sm">
                    Số điện thoại không hợp lệ.
                  </span>
                ) : (
                  <span className="text-green-500 absolute right-4 justify-center">
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
                ))}
            </div>
            <div
              style={{ width: "340px", height: "20px", padding: "4px 0px 0px" }}
            ></div>
            {/* div password */}
            <div
              style={{ width: "340px", height: "40px", marginTop: "11.2px" }}
            >
              <input
                style={{
                  width: "291.4px",
                  height: "40.8px",
                  padding: "12px",
                  background: "#E8F0FE",
                }}
                type={eye ? "text" : "password"}
                value={password}
                onChange={handleChangePassword}
                onBlur={handleBlurPassword}
                className={`text-sm border-2 border-solid border-gray w-full h-10 px-2 ${
                  passwordError ? "border-red-500 bg-red-50" : ""
                }`}
                placeholder="Mật khẩu"
              />
              <button
                style={{ width: "20px", height: "16px" }}
                onClick={handleShowPassword}
                className="absolute right-3"
              >
                {eye ? (
                  <FontAwesomeIcon icon={faEye} />
                ) : (
                  <FontAwesomeIcon icon={faEyeSlash} />
                )}
              </button>
              {iconPassword && passwordError && (
                <span className="absolute text-sm text-red-500 mt-16">
                  Vui lòng điền vào mục này.
                </span>
              )}
            </div>
            <div
              style={{ width: "340px", height: "20px", padding: "4px 0px 0px" }}
            ></div>
            {/* div button login */}
            <div style={{ marginTop: "11.2px" }}>
              <button
                style={{
                  width: "340px",
                  height: "40px",
                  color: "#ffffff",
                  fontSize: "14px",
                  padding: "0px 10px",
                  background: "#EE4D2D",
                }}
                disabled={!formValid}
                className={`bg-orange-500 w-full h-10 ${
                  !formValid && "cursor-not-allowed"
                }`}
              >
                ĐĂNG NHẬP
              </button>
            </div>
          </form>
          {/* div forget password & sms */}
          <div
            className="flex justify-between items-center"
            style={{
              width: "340px",
              height: "14.4px",
              margin: "10px 0px",
              fontSize: "12px",
              color: "#0055AA",
            }}
          >
            {/* forget password */}
            <div>
              <a href="fb.com">Quên mật khẩu</a>
            </div>
            {/* sms */}
            <div>
              <a href="fb.com">Đăng nhập với SMS</a>
            </div>
          </div>
          {/* line */}
          <div
            className="flex items-center justify-center"
            style={{
              width: "340px",
              height: "28.4px",
              padding: "0px 0px 14px",
            }}
          >
            <span
              style={{
                width: "66.68px",
                color: "#CCCCCC",
                fontSize: "12px",
                padding: "0px 16px",
              }}
            >
              HOẶC
            </span>
          </div>
          {/* div button fb & gg */}
          <div
            style={{ width: "350px", height: "50px", margin: "0px -5px" }}
            className="flex justify-center items-center"
          >
            {/* Facebook */}
            <div className="flex justify-center items-center">
              <button
                style={{ margin: "5px", padding: "0px 8px 0px 2px" }}
                className="w-[165px] h-[40px] bg-blue-600 hover:bg-blue-700 text-white font-semibold border border-gray-400 rounded shadow flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-6 h-6"
                >
                  <path
                    fill="#FFFFFF"
                    d="M37.1,0H10.9C5,0,0,5,0,11.1v26.2C0,43,5,48,10.9,48H24V29H18V22h6V17.4c0-6.1,3.7-9.5,9.3-9.5c2.6,0,4.8,0.2,5.4,0.3v6.5h-3c-2.9,0-3.5,1.4-3.5,3.4V22h6.8l-0.9,7H29v19h8.9C43,48,48,43,48,37.1V10.9C48,5,43,0,37.1,0z"
                  />
                </svg>
                <span style={{ marginLeft: "5px" }}>Facebook</span>
              </button>
            </div>
            {/* Google */}
            <div>
              <button
                style={{ margin: "5px", padding: "0px 8px 0px 2px" }}
                className="w-[165px] h-[40px] bg-white hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="w-6 h-6"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  />
                </svg>
                <span style={{ marginLeft: "5px" }}>Google</span>
              </button>
            </div>
          </div>
        </div>
        {/* foreign register */}
        <div
          style={{
            width: "404px",
            height: "16.8px",
            color: "#00000042",
            padding: "0px 4px 0px 0px",
            fontSize: "14px",
          }}
          className="flex justify-center"
        >
          Bạn mới biết đến HauShop? &nbsp;
          <a
            href="fb.com"
            style={{
              fontSize: "14px",
              color: "#ee4d2d",
              width: "51.36px",
              height: "16.8px",
            }}
          >
            Đăng ký
          </a>
        </div>
      </div>
    </div>
  );
}
