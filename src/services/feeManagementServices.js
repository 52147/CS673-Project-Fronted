import axios from 'axios';

const COMMENTS_API_TEST = 'http://localhost:8080'
// const COMMENTS_API = "http://cs673-project-backend-dev.us-west-2.elasticbeanstalk.com/";
const COMMENTS_API = "https://shocking-tomatoes-production.up.railway.app";

export const getFeeService = async (json) => {
    const response = await axios.post(COMMENTS_API_TEST+"/check/index/check/checkIn/checkPrice",json)
    return response.data;
}


export const setFeeService = async (json) => {
    const response = await axios.post(COMMENTS_API_TEST+"/check/index/check/checkIn/changePrice",json)
    return response.data;
}

