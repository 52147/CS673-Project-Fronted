import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const checkUsernameService = async (json) => {
    const response = await axios.post(COMMENTS_API+"", json)
    return response.data;
}