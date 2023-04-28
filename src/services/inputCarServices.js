import axios from 'axios';
// const COMMENTS_API_TEST = "http://cs673-project-backend-dev.us-west-2.elasticbeanstalk.com";
// const COMMENTS_API_TEST = 'http://localhost:8080'
const COMMENTS_API_TEST = "https://shocking-tomatoes-production.up.railway.app";


export const checkInCarService = async (json) => {
    const response = await axios.post(COMMENTS_API_TEST+"/index/check/checkIn/", json)
    return response.data;
}
export const getService = async (json) => {
    const response = await axios.get(COMMENTS_API_TEST+"/index/check/checkIn/", json)
    return response.data;
}

export const createUserService = async (json) => {
    const response = await axios.post(COMMENTS_API_TEST+"/index/check/checkIn/", json)
    return response.data;
}

export const bicycleUserService = async (json) => {
    const response = await axios.post(COMMENTS_API_TEST+"/index/check/getBicyclePlate", json)
    return response.data;
}