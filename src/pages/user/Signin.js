import { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import LoginService from "../../services/user/LoginService";
import { useNavigate } from "react-router-dom";
// const Signin = () => {
//   const navigate = useNavigate();
//   const [phone, setPhone] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const handleShowPassword = (e) => {
//     setShowPassword(e.target.checked);
//   };
//   const handlePhone = (event) => {
//     setPhone(event.target.value);
//   };
//   const handlePassword = (event) => {
//     setPassword(event.target.value);
//   };
//   const handleLogin = async () => {
//     try {
//       const userLogin = await LoginService(phone, password);
//       localStorage.setItem("token", userLogin.data.token);
//       navigate("/home", { state: { user: userLogin.data } });
//     } catch (error) {
//       throw new Error(error);
//     }
//   };

//   return (
//     <div className="h-screen flex">
//       {/* left */}
//       <div className="w-1/2 flex-col justify-center mt-24">
//         {/* logo */}
//         <div className="flex justify-center ">
//           <img src={logo} alt="logo" width={200} height={200} />
//         </div>
//         {/* title */}
//         <div className="flex justify-center">
//           <p className="text-3xl">Sign in to your account</p>
//         </div>
//         {/* form */}
//         <div className="mt-3">
//           <div className="w-500 mx-auto">
//             <label className="block">Phone number</label>
//             {/* phone number */}
//             <div>
//               {/* input phone number */}
//               <input
//                 className="border border-2 border-solid border-black w-full"
//                 type="text"
//                 name="phone"
//                 value={phone}
//                 onChange={handlePhone}
//               />
//             </div>
//           </div>
//           <div className="w-500 mx-auto">
//             <div className="flex items-center justify-between">
//               <label>Password</label>
//               <div className="">
//                 <a className="text-blue-500" href="https://fb.com">
//                   Forgot password?
//                 </a>
//               </div>
//             </div>
//             {/* password */}
//             <div className="flex justify-center">
//               {/* input password */}
//               <input
//                 className="border border-2 border-solid border-black w-full"
//                 value={password}
//                 onChange={handlePassword}
//                 type={showPassword ? "text" : "password"}
//               />
//             </div>
//           </div>
//           {/* show password */}
//           <div className="w-500 mx-auto mt-2">
//             <input
//               type="checkbox"
//               checked={showPassword}
//               onChange={handleShowPassword}
//             />
//             <label className="ml-2">Show password</label>
//           </div>
//           {/* button submit */}
//           <div className="w-500 mx-auto mt-2">
//             <button
//               className="bg-blue-300 w-full border-2 border-solid border border-black"
//               onClick={handleLogin}
//             >
//               Sign in
//             </button>
//           </div>
//         </div>
//         {/* link sign up */}
//         <div className="flex justify-center">
//           <Link to="/signup" className="text-blue-500">
//             Create account
//           </Link>
//         </div>
//       </div>
//       {/* right */}
//       <Banner />
//     </div>
//   );
// };
import React from 'react'
import HeaderRegisterLogin from "../../components/HeaderRegisterLogin"
import ContainerForm from "../../components/ContainerForm"
import FooterRegisterLogin from "../../components/FooterRegisterLogin"
import FormLogin from "../../components/FormLogin";
export default function Signin() {
  return (
    <div>
      <HeaderRegisterLogin title={"Đăng nhập"}/>
      <ContainerForm component={FormLogin}/>
      <FooterRegisterLogin/>
    </div>
  )
}
