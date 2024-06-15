import axios from "axios";
import GlobalHost from "../../GlobalHost";
const DeleteCategoryByIdService = async (token, id) => {
  try {
    const response = await axios.delete(
      `${GlobalHost.host_category}/delete-category-by-id/${id}`,
      {
        headers: {
            Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default DeleteCategoryByIdService;
