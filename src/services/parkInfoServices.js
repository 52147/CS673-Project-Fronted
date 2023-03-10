import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const getParkingInfoService = async (json) => {
    const response = await axios.post(COMMENTS_API+"/index/check/checkPlate", json)
    return response.data;
}