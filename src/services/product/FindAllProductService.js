import axios from "axios";
import GlobalHost from "../../GlobalHost";
const FindAllProduct = async () => {
  try {
    const reponse = await axios.get(
      `${GlobalHost.host_product}/find-all-product`,
    );
    return reponse.data;
  } catch (error) {
    throw new Error(error);
  }
};
export default FindAllProduct;
