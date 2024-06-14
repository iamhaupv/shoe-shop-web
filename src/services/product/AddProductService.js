import axios from "axios";
import GlobalHost from "../../GlobalHost";
const AddProductService = async (token, name, quantity) => {
  try {
    const reponse = await axios.post(
      `${GlobalHost.host_product}/add-product`,
      { name, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return reponse.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default AddProductService;
