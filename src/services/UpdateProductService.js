import axios from "axios";

const UpdateProductService = async(token, _id, product) => {
    try {
        const reponse = await axios.post("http://localhost:3000/products/update-product", {_id, product}, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })
        return reponse.data
    } catch (error) {
        throw new Error(error)
    }
}

export default UpdateProductService