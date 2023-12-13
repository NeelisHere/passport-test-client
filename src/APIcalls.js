import axios from "axios";

const API_URL = 'http://localhost:8000/users/register'

export const registerUserAPI = async (payload) => {
    console.log(payload)
    try {
        const { data } = axios.post(API_URL, payload)
        return data
    } catch (error) {
        console.log(error)
    }
}