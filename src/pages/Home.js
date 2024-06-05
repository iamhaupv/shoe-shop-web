import Banner from "../components/Banner"
import OTP from "../components/OTP"

const Home = () => {
    return (
        <div className="h-screen flex bg-emerald-500">
            <OTP />
            <Banner />
        </div>
    )
}
export default Home