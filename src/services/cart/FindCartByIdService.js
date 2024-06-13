import axios from "axios";

const FindCartByIdService = async (token, cartId) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/carts/find-cart-by-id",
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
