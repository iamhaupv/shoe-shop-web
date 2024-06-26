import axios from "axios";
import GlobalHost from "../../GlobalHost";

const CheckUserExist = async(token, phoneNumber) => {
    try {
        const response = await axios.get(`${GlobalHost.host_user}/check-user-exist`, {phoneNumber}, {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        throw new Error(error)
    }
}

export default CheckUserExist