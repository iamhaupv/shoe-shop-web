import axios from "axios"

const FindProductByIdService = async(token, _id) => {
    try {
        const reponse = await axios.post("http://localhost:3000/products/find-product-by-id", {_id}, {
            headers: {
                Authorization: `Bearer ${token}`,
              },
        })
        return reponse.data
    } catch (error) {
        throw new Error(error)
    }
}

export default FindProductByIdService