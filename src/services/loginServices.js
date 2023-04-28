import axios from 'axios';

const COMMENTS_API_TEST = 'http://localhost:8080'
// const COMMENTS_API = "https://shocking-tomatoes-production.up.railway.app";
// const COMMENTS_API = "https://shocking-tomatoes-production.up.railway.app";

export const login = async (json) => {
    const response = await axios.post(COMMENTS_API_TEST+"/login", json)
    return response.data;
}
