import axios from "axios";
import GlobalHost from "../../GlobalHost";
const FindCartByIdService = async (token, cartId) => {
  try {
    const response = await axios.post(
      `${GlobalHost.host_cart}/find-cart-by-id`,
      { cartId },
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
export default FindCartByIdService;
