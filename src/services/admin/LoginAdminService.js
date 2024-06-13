import axios from "axios";
//
const LoginAdminService = async (phoneNumber, password) => {
  try {
    const response = await axios.post("http://localhost:3000/wp-admin/login", {
      phoneNumber,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default LoginAdminService;
