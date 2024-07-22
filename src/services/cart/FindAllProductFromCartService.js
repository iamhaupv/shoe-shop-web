import axios from 'axios'
import GlobalHost from '../../GlobalHost'
const FindAllProductFromCart = async(token, cartId) => {
    try {
        const response = await axios.post(`${GlobalHost.host_cart}/find-all-product-from-cart`,{cartId}, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        },)
        return response.data
    } catch (error) {
        throw new Error(error)
    }
} 

export default FindAllProductFromCart
