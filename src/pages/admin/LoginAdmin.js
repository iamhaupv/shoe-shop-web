import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginAdminService from "../../services/admin/LoginAdminService";
//
const LogninAdmin = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  //   show password
  const handleShowPassword = (e) => {
    setShowPassword(e.target.checked);
  };
  //   phone number
  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };
  //   password
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  //   login
  const handleLogin = async () => {
    try {
      const user = await LoginAdminService(phoneNumber, password);
      localStorage.setItem("token", user.data.token);
      navigate("/admin-manager-product", { state: { user: user.data } });
    } catch (error) {
      throw new Error(error);
    }
  };
  return (
    <div>
      <div>
        {/* phone number */}
        <div className="mx-auto w-500">
          <label>Phone Number</label>
          <input
            value={phoneNumber}
            onChange={handlePhoneNumber}
            type="text"
            className="border border-2 border-solid border-black"
          />
        </div>
        {/* password */}
        <div className="mx-auto w-500">
          <label>Password</label>
          <input
            value={password}
            onChange={handlePassword}
            type={showPassword ? "text" : "password"}
            className="border border-2 border-solid border-black"
          />
        </div>
        {/* show password */}
        <div className="mx-auto w-500">
          <input
            type="checkbox"
            checked={showPassword}
            onChange={handleShowPassword}
          />
          <label>Show password</label>
        </div>
        {/* button submit */}
        <div className="w-500 mx-auto">
          <button
            className="border border-2 border-solid border-black bg-blue-400"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default LogninAdmin;
