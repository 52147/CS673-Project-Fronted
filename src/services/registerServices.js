import axios from 'axios';

const COMMENTS_API_TEST = 'http://localhost:8080'
// const COMMENTS_API = "http://cs673-project-backend-dev.us-west-2.elasticbeanstalk.com/";
const COMMENTS_API = "https://shocking-tomatoes-production.up.railway.app";

export const parkingRegisterService = async (json) => {
    console.log(json)
    const response = await axios.post(COMMENTS_API_TEST+"/user/register", json)
    return response.data;
}