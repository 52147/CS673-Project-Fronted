import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const getService = async (json) => {
    const response = await axios.get(COMMENTS_API+"/index/info", json)
    return response.data;
}