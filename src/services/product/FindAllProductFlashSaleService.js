import axios from "axios";
import GlobalHost from "../../GlobalHost";
const FindAllProductService = async () => {
  try {
    const response = await axios.get(
      `${GlobalHost.host_product}/find-all-product-flash-sale`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default FindAllProductService;
