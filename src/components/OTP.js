import { BsFillShieldLockFill, BsTelephoneFill } from "react-icons/bs";
import logo from "../assets/logo.png"
import OtpInput from "otp-input-react";
const OTP = () => {
    return (
        <div className="w-1/2 flex-col justify-center mt-24">
            <div>
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
                        ></OtpInput>
                    </div>
                    {/* button verify */}
                    <div className="mt-4 flex justify-center">
                        <button className="bg-emerald-600 w-500 flex gap-1 items-center flex justify-center py-2.5 text-white rounded">Verify</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OTP