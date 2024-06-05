import Banner from "../components/Banner"
import logo from "../assets/logo.png"
const Signup = () =>{
    return (
        <div className="h-screen flex">
            <div className="w-1/2 flex-col">
                <div>
                <img src={logo} alt="logo" width={200} height={200} />
                </div>
            </div>
            <Banner/>
        </div>
    )
}

export default Signup