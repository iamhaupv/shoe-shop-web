import axios from "axios";
import GlobalHost from "../../GlobalHost";

const FindAllProductLoveAndDiscountService = async () => {
  try {
    const response = await axios.get(
      `${GlobalHost.host_product}/find-all-product-love-and-discount`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default FindAllProductLoveAndDiscountService;
