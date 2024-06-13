import axios from "axios";

const AddProductToCartService = async (token, phoneNumber, productId) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/carts/add-product-to-cart",
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
