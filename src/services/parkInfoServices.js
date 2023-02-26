import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const getParkingInfoService = async () => {
    const response = await axios.get(COMMENTS_API+"/index/info")
    return response.data;
}