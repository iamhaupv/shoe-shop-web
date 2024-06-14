import axios from "axios";
import GlobalHost from "../../GlobalHost";
const AddProductToCartService = async (token, phoneNumber, productId) => {
  try {
    const response = await axios.post(
      `${GlobalHost.host_cart}/add-product-to-cart`,
      {
        phoneNumber,
        productId,
      },
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
export default AddProductToCartService;
