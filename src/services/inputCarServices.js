import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const checkInCarService = async (json) => {
    const response = await axios.post(COMMENTS_API+"/index/check/checkIn/", json)
    return response.data;
}
export const getService = async (json) => {
    const response = await axios.get(COMMENTS_API+"/index/check/checkIn/", json)
    return response.data;
}

export const createUserService = async (json) => {
    const response = await axios.post(COMMENTS_API+"/index/check/checkIn/", json)
    return response.data;
}