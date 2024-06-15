import axios from "axios";
import GlobalHost from "../../GlobalHost";
const UpdateCategoryService = async (token, id, { name, description }) => {
  try {
    const response = await axios.patch(
      `${GlobalHost.host_category}/update-category/${id}`,
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
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
export default UpdateCategoryService;
