import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const getFeeService = async (json) => {
    const response = await axios.post(COMMENTS_API+"",json)
    return response.data;
}


export const setFeeService = async (json) => {
    const response = await axios.post(COMMENTS_API+"",json)
    return response.data;
}

