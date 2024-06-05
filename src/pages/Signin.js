import { useState } from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import Banner from "../components/Banner"
const Signin = () => {
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
      <div className="w-1/2 flex-col justify-center mt-24">
        {/* logo */}
        <div className="flex justify-center ">
          <img src={logo} alt="logo" width={200} height={200} />
        </div>
        {/* title */}
        <div className="flex justify-center">
          <p className="text-3xl">Sign in to your account</p>
        </div>
        {/* form */}
        <form className="mt-3">
          <div className="w-500 mx-auto">
            <label className="block">Phone number</label>
            {/* phone number */}
            <div>
              {/* input phone number */}
              <input className="border border-2 border-solid border-black w-full"
                type="text"
                name="phone"
                value={phone}
                onChange={handlePhone} />
            </div>
          </div>
          <div className="w-500 mx-auto">
            <div className="flex items-center justify-between">
              <label>Password</label>
              <div className="">
                <a className="text-blue-500" href="https://fb.com">Forgot password?</a>
              </div>
            </div>
            {/* password */}
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
            >Sign in</button>
          </div>
        </form>
        {/* link sign up */}
        <div className="flex justify-center">
          <Link to="/signup" className="text-blue-500">Create account</Link>
        </div>
      </div>
      {/* right */}
      <Banner />
    </div>
  )
}

export default Signin