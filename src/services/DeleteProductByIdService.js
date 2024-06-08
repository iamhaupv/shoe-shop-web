import axios from "axios";

const DeleteProductByIdService = async (token, _id) => {
  try {
    const response = await axios.delete(
      `http://localhost:3000/products/delete-product-by-id/${_id}`,
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
export default DeleteProductByIdService;
