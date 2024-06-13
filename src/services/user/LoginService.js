import axios from "axios";

const LoginService = async (phoneNumber, password) => {
  try {
    const reponse = await axios.post("http://localhost:3000/users/login", {
      phoneNumber,
      password,
    });
    return reponse.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default LoginService;
