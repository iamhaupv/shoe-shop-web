import axios from "axios";
import GlobalHost from "../../GlobalHost";
const LoginService = async (phoneNumber, password) => {
  try {
    const reponse = await axios.post(`${GlobalHost.host_user}/login`, {
      phoneNumber,
      password,
    });
    return reponse.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default LoginService;
