import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    const handleSubmit = () => {
        navigate("/my-cart")
    }
    return (
        <div className="h-screen flex bg-emerald-500">
            <div>
                <input onClick={handleSubmit}  type="submit" className="bg-red-500 border-2 border-solid border-black" />
            </div>
        </div>
    )
}
export default Home