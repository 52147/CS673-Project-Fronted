import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const getHistoryService = async () => {
    const response = await axios.get(COMMENTS_API+"/index/check/checkIn/checkHistory")
    return response.data;
}

export const getSelectedHistoryService = async (json) => {
    const response = await axios.post(COMMENTS_API+"/index/check/checkIn/checkHistory",json)
    return response.data;
}