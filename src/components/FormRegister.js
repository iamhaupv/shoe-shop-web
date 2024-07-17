import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
export default function FormRegister() {
  const [phone, setPhone] = useState(""); // phone
  const [phoneError, setPhoneError] = useState(false); // phone error
  const [iconPhone, setIconPhone] = useState(true); // icon phone
  const [formValid, setFormValid] = useState(false);
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
    <div
      className="flex justify-center"
      style={{
        background: "#ffffff",
        borderRadius: "4px",
        boxSizing: "border-box",
        boxShadow: "0 3px 10px 0 rgba(0, 0, 0, .14)",
        fontFamily:
          "'Helvetica Neue', Helvetica, Arial, '文泉驛正黑', 'WenQuanYi Zen Hei', 'Hiragino Sans GB', '儷黑 Pro', 'LiHei Pro', 'Heiti TC', '微軟正黑體', 'Microsoft JhengHei UI', 'Microsoft JhengHei', sans-serif",
        lineHeight: 1.2,
      }}
    >
      <div style={{ width: "400px", height: "429px" }} className="mx-auto">
        <div>
          {/* div title */}
          <div style={{ width: "400px", height: "68px", padding: "22px 30px" }}>
            <span className="text-2xl">Đăng ký</span>
          </div>
          <div
            style={{
              width: "400px",
              height: "302.2px",
              padding: "0px 30px 30px",
            }}
          >
            <form style={{ width: "340px", height: "110px", display: "block" }}>
              {/* div phone */}
              <div style={{ width: "340px", height: "40px" }}>
                <input
                  style={{
                    width: "338.4px",
                    height: "40.8px",
                    background: "#fff6f7",
                    padding: "12px",
                  }}
                  value={phone}
                  onChange={handleChangePhone}
                  onBlur={handleBlurPhone}
                  className={`text-sm border-2 border-gray border-solid w-full h-10 px-2 ${
                    phoneError ? "border-red-500 bg-red-50" : ""
                  }`}
                  placeholder="Số điện thoại"
                />
                {/* {iconPhone &&
              (phoneError ? (
                <span className="text-sm text-red-500 absolute top-10">
                  Số điện thoại không hợp lệ
                </span>
              ) : (
                <span className="absolute right-4 text-green-500 flex justify-center items-center right-[100px]">
                  <FontAwesomeIcon icon={faCircleCheck} />
                </span>
              ))} */}
              </div>
              {/*  */}
              <div
                style={{
                  width: "340px",
                  height: "20px",
                  fontSize: "12px",
                  padding: "4px 0px 0px",
                  color: "#ff424f",
                  display: "block",
                }}
              ></div>
              {/* div submit */}
              <div>
                <button
                  style={{
                    width: "340px",
                    height: "40px",
                    color: "#ffffff",
                    fontSize: "14px",
                    background: "#ee4d2d",
                    margin: "0px 0px 30px",
                    padding: "0px 10px",
                  }}
                  disabled={!formValid}
                  className={`bg-orange-500 w-full h-10 ${
                    !formValid && "cursor-not-allowed"
                  }`}
                >
                  Đăng ký
                </button>
              </div>
            </form>

            {/* line */}
            <div
              className="flex justify-center items-center"
              style={{
                width: "340px",
                height: "28.4px",
                padding: "0px 0px 14px",
                marginTop: "14px"
              }}
            >
              <span
                style={{
                  width: "66.68px",
                  height: "14.4px",
                  color: "#cccccc",
                  fontSize: "12px",
                  padding: "0px 16px",
                }}
              >
                HOẶC
              </span>
            </div>
            {/* div button fb & gg */}
            <div
              className="flex"
              style={{ width: "350px", height: "50px", margin: "0px -5px" }}
            >
              {/* Facebook */}
              <div>
                <button
                  style={{ margin: "5px", padding: "0px 8px 0px 2px" }}
                  className="w-[165px] h-[40px] bg-blue-600 hover:bg-blue-700 font-semibold border border-gray-400 rounded shadow flex items-center justify-center"
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
                  className="w-[165px] h-[40px] hover:bg-gray-100 text-gray-800 font-semibold border border-gray-400 rounded shadow flex items-center justify-center"
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
            {/* description */}
            <div
              style={{
                width: "335px",
                height: "28.8px",
                fontSize: "12px",
                margin: "0px 5px 0px 0px",
                padding: "0px 25px",
                color: "#000000DE",
                marginTop: "39px",
              }}
            >
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

          {/* foreign login */}
          <div
            className="flex justify-center items-center"
            style={{
              width: "404px",
              height: "16.8px",
              fontSize: "14px",
              padding: "0px 4px 0px 0px",
              color: "#00000042",
            }}
          >
            <span>
              Bạn chưa có tài khoản?{" "}
              <a
                style={{
                  width: "68.51px",
                  height: "16.8px",
                  fontSize: "14px",
                  color: "#ee4d2d",
                }}
                href="fb.com"
              >
                Đăng nhập
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
