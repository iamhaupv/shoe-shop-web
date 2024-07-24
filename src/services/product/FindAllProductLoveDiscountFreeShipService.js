import axios from "axios";
import GlobalHost from "../../GlobalHost";
const FindAllProductLoveDiscountFreeShipService = async () => {
  try {
    const response = await axios.get(
      `${GlobalHost.host_product}/find-all-product-love-discount-free-ship`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
export default FindAllProductLoveDiscountFreeShipService;
