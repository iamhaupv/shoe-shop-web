import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import "./FormRegister.css";
export default function FormRegister() {
  const [phone, setPhone] = useState(""); // phone
  const [phoneError, setPhoneError] = useState(false); // phone error
  const [iconPhone, setIconPhone] = useState(false); // icon phone
  const [formValid, setFormValid] = useState(false);
  const [focus, setFocus] = useState(false); // focus
  // handle focus
  const handleFocus = () => {
    setFocus(true);
  };
  useEffect(() => {
    setFormValid(!phoneError);
  }, [phone, phoneError]);
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
  return (
    // container__register
    <div className="flex justify-center container__register">
      {/* content */}
      <div className="mx-auto content">
        <div>
          {/* content__title */}
          <div className="content__title">
            <span>Đăng ký</span>
          </div>
          {/* content__content */}
          <div className="content__content">
            {/* form */}
            <form className="form">
              {/* form__phone */}
              <div
                onFocus={handleFocus}
                className="flex justify-center items-center form__phone"
                style={{
                  border: phoneError
                    ? "1px solid red"
                    : focus
                    ? "1px solid black"
                    : "1px solid rgba(0, 0, 0, .14)",
                  background: phoneError ? "#fff6f7" : "#ffffff",
                }}
              >
                {/* form__phone__input */}
                <input
                  className="form__phone__input"
                  style={{
                    width: phoneError ? "338.4px" : "295.4px",
                    background: phoneError ? "#fff6f7" : "#ffffff",
                  }}
                  value={phone}
                  onChange={handleChangePhone}
                  onBlur={handleBlurPhone}
                  placeholder="Số điện thoại"
                />
                {phoneError ? (
                  <div></div>
                ) : (
                  // form__phone__input__pass
                  <div className="flex justify-center items-center form__phone__input__pass">
                    {iconPhone ? (
                      <div>
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                )}
              </div>
              {/* form__phone__error */}
              <div className="form__phone__error">
                {iconPhone &&
                  (phoneError ? (
                    <span>Số điện thoại không hợp lệ.</span>
                  ) : (
                    <span></span>
                  ))}
              </div>
              {/* form__btn */}
              <div className="mt-2">
                <button
                  disabled={!formValid}
                  className={`form__btn bg-orange-500 w-full h-10 ${
                    !formValid && "cursor-not-allowed"
                  }`}
                >
                  Đăng ký
                </button>
              </div>
            </form>
            {/* line */}
            <div className="flex justify-center items-center line">
              {/* line__text */}
              <span className="line__text">HOẶC</span>
            </div>
            {/* btn__fb__gg */}
            <div className="flex btn__fb__gg">
              {/* Facebook */}
              <div>
                {/* btn__fb */}
                <button className="btn__fb bg-blue-600 hover:bg-blue-700 font-semibold border border-gray-400 rounded shadow flex items-center justify-center">
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
                  {/* btn__fb__text */}
                  <span className="btn__fb__text">Facebook</span>
                </button>
              </div>
              {/* Google */}
              <div>
                {/* btn__gg */}
                <button className="btn__gg hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow flex items-center justify-center">
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
                  {/* btn__gg__text */}
                  <span className="btn__gg__text">Google</span>
                </button>
              </div>
            </div>
            {/* des */}
            <div className="des">
              <p className="flex justify-center items-center">
                Bằng việc đăng ký bạn đã đồng ý với ShopIamhau về
              </p>
              <p className="flex justify-center items-center">
                <a className="text-orange-500" href="fb.com">
                  điều khoản dịch vụ
                </a>{" "}
                &nbsp; & &nbsp;{" "}
                <a className="text-orange-500" href="fb.com">
                  chính sách bảo mật
                </a>
              </p>
            </div>
          </div>
          {/* content__foreign */}
          <div className="flex justify-center items-center content__foreign">
            <span>
              Bạn chưa có tài khoản? {/* content__foreign__login */}
              <a className="content__foreign__login" href="/signin">
                Đăng nhập
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
