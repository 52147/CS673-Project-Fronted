import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'

export const login = async (json) => {
    const response = await axios.post(COMMENTS_API+"/login", json)
    return response.data;
}

export const findUsers = async () => {
    const response = await axios.get(COMMENTS_API+"/login");
    const users = response.data;
    return users;
}

export const findUserById = async (uid) => {
    const response = await axios.get(COMMENTS_API+`/login${uid}`);
    const user = response.data;
    return user;
}