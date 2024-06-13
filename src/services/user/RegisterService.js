import axios from "axios"

const RegisterService = async(phoneNumber, password) => {
    try {
        const reponse = await axios.post("http://localhost:3000/users/register", {phoneNumber, password})
        return reponse.data
    } catch (error) {
        throw new Error(error)
    }    
}

export default RegisterService