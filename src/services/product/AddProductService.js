import axios from "axios";
import GlobalHost from "../../GlobalHost";

const AddProductService = async (token, formData) => {
  try {
    const response = await axios.post(
      `${GlobalHost.host_product}/add-product`,
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
    throw new Error(error);
  }
};

export default AddProductService;
