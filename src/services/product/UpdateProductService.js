import axios from "axios";
import GlobalHost from "../../GlobalHost";
const UpdateProductService = async (token, _id, {name, quantity}) => {
  try {
    const response = await axios.patch(
      `${GlobalHost.host_product}/update-product/${_id}`, // Ensure the endpoint is correct
      {name, quantity}, // Send the productNew directly
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(
      "Error updating product:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.message || "Failed to update product"
    );
  }
};

export default UpdateProductService;
