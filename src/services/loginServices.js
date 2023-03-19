import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'

export const login = async (json) => {
    const response = await axios.post(COMMENTS_API+"/login", json)
    return response.data;
}
