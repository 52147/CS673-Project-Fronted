import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'

export const imageProcessService = async (json) => {
    const response = await axios.get(COMMENTS_API+"/camera-stream", json)
    return response.data;
}