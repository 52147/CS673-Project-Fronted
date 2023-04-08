import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const checkUsernameService = async (json) => {
    console.log(json)
    const response = await axios.post(COMMENTS_API+"/forget", json)
    return response.data;
}

export const changePasswordService = async (json) => {
    console.log(json)
    const response = await axios.post(COMMENTS_API+"/forget/changePassword", json)
    return response.data;
}