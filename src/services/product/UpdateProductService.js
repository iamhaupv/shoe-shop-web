import axios from "axios";
import GlobalHost from "../../GlobalHost";
const UpdateProductService = async (token, _id, formData) => {
  try {
    const response = await axios.patch(
      `${GlobalHost.host_product}/update-product/${_id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
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
