import axios from "axios";
import GlobalHost from "../../GlobalHost";

const FindAllProductMallAndDiscountService = async () => {
  try {
    const response = await axios.get(
      `${GlobalHost.host_product}/find-all-product-mall-and-discount`
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default FindAllProductMallAndDiscountService;
