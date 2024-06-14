import axios from "axios";
import GlobalHost from "../../GlobalHost";
const FindProductByIdService = async (token, _id) => {
  try {
    const reponse = await axios.post(
      `${GlobalHost.host_product}/find-product-by-id`,
      { _id },
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

export default FindProductByIdService;
