import banner from "../assets/banner.jpg"
const Banner = () => {
    return (
        <div className="w-1/2">
            <img src={banner} alt="banner" className="object-cover w-full h-full" />
        </div>
    )
}

export default Banner