import axios from "axios";

const AddProductService = async (token, name, quantity) => {
  try {
    const reponse = await axios.post(
      "http://localhost:3000/products/add-product",
      { name, quantity },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return reponse.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default AddProductService;
