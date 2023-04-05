import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const parkingRegisterService = async (json) => {
    console.log(json)
    const response = await axios.post(COMMENTS_API+"/user/register", json)
    return response.data;
}