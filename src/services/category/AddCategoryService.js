import axios from "axios";
import GlobalHost from "../../GlobalHost";
const AddCategoryService = async (token, name, description) => {
  try {
    const response = await axios.post(
      `${GlobalHost.host_category}/create-category`,
      {
        name,
        description,
      },
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
export default AddCategoryService;
