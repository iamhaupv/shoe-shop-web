import { useState } from "react";

const LogninAdmin = () => {
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
      </div>
    </div>
  );
};
export default LogninAdmin;
