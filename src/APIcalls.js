import axios from "axios";

const API_URL = 'http://localhost:8000'

export const registerUserAPI = async (payload) => {
    console.log(payload)
    try {
        const { data } = await axios.post(`${API_URL}/users/register`, payload)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const testAPI = async () => {
    try {
        const { data } = await axios.get(`${API_URL}`, { withCredentials: true })
        // console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}