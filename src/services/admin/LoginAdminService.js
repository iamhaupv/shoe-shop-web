import axios from "axios";
import GlobalHost from "../../GlobalHost";
//
const LoginAdminService = async (phoneNumber, password) => {
  try {
    const response = await axios.post(`${GlobalHost.host_admin}/login`, {
      phoneNumber,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default LoginAdminService;
