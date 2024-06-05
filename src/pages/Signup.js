import Banner from "../components/Banner"
import logo from "../assets/logo.png"
import { useState } from "react"
const Signup = () => {
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const handlePhone = (event) => {
        setPhone(event.target.value)
        console.log(phone)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleSubmit = () => {
        const newUser = [phone, password]
        console.log(newUser)
    }
    return (
        <div className="h-screen flex">
            {/* left */}
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
                <form className="mt-3">
                    {/* phone number */}
                    <div className="w-500 mx-auto">
                        <div>
                            <label className="block">Phone number</label>
                        </div>
                        {/* input phone number */}
                        <div>
                            <input className="border border-2 border-solid border-black w-full"
                                type="text"
                                name="phone"
                                value={phone}
                                onChange={handlePhone} />
                        </div>
                    </div>
                    {/* password */}
                    <div className="w-500 mx-auto">
                        <div><label>Password</label></div>
                        <div className="flex justify-center">
                            {/* input password */}
                            <input className="border border-2 border-solid border-black w-full"
                                value={password}
                                onChange={handlePassword}
                            />
                        </div>
                    </div>
                    {/* button */}
                    <div className="w-500 mx-auto mt-2">
                        <button className="bg-blue-300 w-full border-2 border-solid border border-black"
                            onClick={handleSubmit}
                        >Sign up</button>
                    </div>
                </form>
            </div>
            {/* right */}
            <Banner />
        </div>
    )
}

export default Signup