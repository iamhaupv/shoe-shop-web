import axios from "axios";
import GlobalHost from "../../GlobalHost";
const FindAllProduct = async (token) => {
  try {
    const reponse = await axios.post(
      `${GlobalHost.host_product}/find-all-product`,
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
export default FindAllProduct;
