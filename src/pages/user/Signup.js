import Banner from "../../components/Banner";
import logo from "../../assets/logo.png";
import { CgSpinner } from "react-icons/cg";
import { useEffect, useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { BsFillShieldLockFill } from "react-icons/bs";
import OtpInput from "otp-input-react";
import { auth } from "../../config/firebase.config";
import { useNavigate } from "react-router-dom";
import RegisterService from "../../services/user/RegisterService";
import CheckUserExistService from "../../services/user/CheckUserExistService";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false); // show password
  const [phone, setPhone] = useState(""); // phone number
  const [password, setPassword] = useState(""); // password
  const [loading, setLoading] = useState(false); // loading
  const [showOTP, setShowOTP] = useState(false); // show otp
  const [otp, setOTP] = useState(""); // otp
  const navigate = useNavigate(); // navigate
  const [iconExist, setIconExist] = useState(false); // icon exist
  const [timer, setTimer] = useState(null); // time
  // handle show password
  const handleShowPassword = (e) => {
    setShowPassword(e.target.checked);
  };
  // handle register
  const handleRegister = async () => {
    const register = await RegisterService(phone, password);
    navigate("/home", { state: { user: register } });
  };
  // handle password
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  // on captcha verify
  const onCaptchVerify = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignup();
          },
          "expired-callback": () => {
            // Response expired. Ask user to solve reCAPTCHA again.
            // ...
          },
        }
      );
    }
  };
  // on sign up
  const onSignup = () => {
    setLoading(true);
    onCaptchVerify();
    const appVerifier = window.recaptchaVerifier;
    const formatPhone = "+" + phone;
    signInWithPhoneNumber(auth, formatPhone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setLoading(false);
        setShowOTP(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
  // on OTP verify
  const onOTPVerify = () => {
    setLoading(true);
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
        //   setUser(res.user);
        setLoading(false);
        handleRegister();
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  // handle change phone
  const handleChangePhone = async (e) => {
    setPhone(e.target.value);
    clearTimeout(timer);
    const newTimer = setTimeout(() => {
      checkUserExist(e.target.value);
    }, 1500); // Adjust debounce delay as needed
    setTimer(newTimer);
  };

  const checkUserExist = async () => {
    try {
      const userExists = await CheckUserExistService(phone);
      setIconExist(userExists);
    } catch (error) {
      console.error("Error checking user existence:", error);
      // Handle error while checking user existence
    }
  };

  return (
    <div className="h-screen flex bg-emerald-500">
      <div id="recaptcha-container"></div>
      {showOTP ? (
        <div className="w-1/2 flex-col mt-24">
          {/* logo */}
          <div className="flex justify-center ">
            <img src={logo} alt="logo" width={200} height={200} />
          </div>
          <div>
            {/* logo security */}
            <div className="bg-white text-emerald-500 mt-2 w-fit mx-auto p-4 rounded-full">
              <BsFillShieldLockFill size={30} />
            </div>
            {/* label input otp */}
            <div className="flex justify-center">
              <label>Enter your OTP</label>
            </div>
            {/* otp input */}
            <div className="flex justify-center">
              <OtpInput
                OTPLength={6}
                otpType="number"
                disabled={false}
                autoFocus
                className="opt-container"
                onChange={setOTP}
                value={otp}
              ></OtpInput>
            </div>
            {/* button verify */}
            <div className="mt-4 flex justify-center">
              <button
                className="bg-emerald-600 w-500 flex gap-1 items-center flex justify-center py-2.5 text-white rounded"
                onClick={onOTPVerify}
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Verify OTP</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-1/2 flex-col mt-24">
          {/* logo */}
          <div className="flex justify-center">
            <img src={logo} alt="logo" width={200} height={200} />
          </div>
          {/* title */}
          <div className="flex justify-center">
            <p className="text-3xl">Welcom to PHV-SHOP</p>
          </div>
          {/* form */}
          <div className="mt-3">
            {/* phone number */}
            <div className="w-500 mx-auto">
              {/* input phone number */}
              <div>
                <input
                  className="border border-2 border-solid border-black w-full"
                  value={phone}
                  onChange={handleChangePhone}
                />
              </div>
            </div>
            {/* password */}
            <div className="w-500 mx-auto">
              <div>
                <label>Password</label>
              </div>
              <div className="flex justify-center">
                {/* input password */}
                <input
                  className="border border-2 border-solid border-black w-full"
                  value={password}
                  onChange={handlePassword}
                  type={showPassword ? "text" : "password"}
                />
              </div>
            </div>
            <div className="w-500 mx-auto">
              <input
                type="checkbox"
                className="border-2 border-solid border-black"
                checked={showPassword}
                onChange={handleShowPassword}
              />
              <label className="ml-2">Show password</label>
            </div>
            {/* button */}
            <div className="w-500 mx-auto mt-2">
              <button
                className="bg-blue-300 w-full border-2 border-solid border border-black flex justify-center"
                onClick={onSignup}
                disabled={loading}
              >
                {loading && (
                  <CgSpinner size={20} className="mt-1 animate-spin" />
                )}
                <span>Send code via SMS</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* right */}
      <Banner />
    </div>
  );
};

export default Signup;
