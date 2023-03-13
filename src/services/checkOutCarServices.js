import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const checkOutCarServices = async (json) => {
    const response = await axios.post(COMMENTS_API+"/index/check/checkOut", json)
    return response.data;
}
