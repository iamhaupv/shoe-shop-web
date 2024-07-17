import axios from "axios";
import GlobalHost from "../../GlobalHost";

const FindUserByPhoneService = async (token, phone) => {
  try {
    const response = await axios.get(
      `${GlobalHost.host_user}/find-user-by-phone`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
      { phone }
    );
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default FindUserByPhoneService;
