import axios from "axios";
import GlobalHost from "../../GlobalHost";
const DeleteProductByIdService = async (token, _id) => {
  try {
    const response = await axios.delete(
      `${GlobalHost.host_product}/delete-product-by-id/${_id}`,
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
