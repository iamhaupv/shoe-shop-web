import axios from "axios";
import GlobalHost from "../../GlobalHost";
const FindAllProductFreeShipService = async () => {
    try {
        const response = await axios.get(`${GlobalHost.host_product}/find-all-product-free-ship`)
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}

export default FindAllProductFreeShipService