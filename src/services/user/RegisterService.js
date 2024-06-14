import axios from "axios";
import GlobalHost from "../../GlobalHost";
const RegisterService = async (phoneNumber, password) => {
  try {
    const reponse = await axios.post(`${GlobalHost.host_user}/register`, {
      phoneNumber,
      password,
    });
    return reponse.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default RegisterService;
