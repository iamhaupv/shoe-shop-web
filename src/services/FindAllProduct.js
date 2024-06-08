import axios from "axios";

const FindAllProduct = async (token) => {
  try {
    const reponse = await axios.post(
      "http://localhost:3000/products/find-all-product",
      {},
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
export default FindAllProduct;
