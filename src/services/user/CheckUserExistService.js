import axios from "axios";
import GlobalHost from "../../GlobalHost";

const CheckUserExistService = async (phoneNumber) => {
  try {
    const response = await axios.get(
      `${GlobalHost.host_user}/check-user-exist`,
      { phoneNumber }
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default CheckUserExistService;
