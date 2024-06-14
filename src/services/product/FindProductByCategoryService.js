import axios from "axios";
import GlobalHost from "../../GlobalHost";
const FindProductByCategoryService = async (token) => {
  try {
    const response = await axios.post(
      `${GlobalHost.host_product}/find-product-by-category`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default FindProductByCategoryService;
