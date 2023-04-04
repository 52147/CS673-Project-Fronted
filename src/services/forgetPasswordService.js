import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const forgetPasswordService = async (json) => {
    const response = await axios.post(COMMENTS_API+"", json)
    return response.data;
}