import axios from "axios"

const DeleteProductById = async(token, _id) => {
    try {
        const reponse = await axios.post(
            "http://localhost:3000/products/delete-product-by-id",
            {_id},
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          return reponse.data
    } catch (error) {
        throw new Error(error)
    }
}
export default DeleteProductById