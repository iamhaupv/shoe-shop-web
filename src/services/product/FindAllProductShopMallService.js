import axios from "axios";
import GlobalHost from "../../GlobalHost";

const FindAllProductShopMallService = async () => {
    try {
        const response = await axios.get(`${GlobalHost.host_product}/find-all-product-shop-mall`)
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}

export default FindAllProductShopMallService