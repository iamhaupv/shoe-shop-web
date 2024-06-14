import axios from "axios";
import GlobalHost from "../../GlobalHost";

const FindAllCategoriesService = async (token) => {
  try {
    const response = await axios.post(
      `${GlobalHost.host_category}/find-all-categories`,{},
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
export default FindAllCategoriesService;
