import axios from "axios";
import GlobalHost from "../../GlobalHost";

const FindCategoryByIdService = async (token, id) => {
  try {
    const response = await axios.get(
      `${GlobalHost.host_category}/find-category-by-id/${id}`,
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

export default FindCategoryByIdService;
