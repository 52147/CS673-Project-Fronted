import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const AuthorityService = async () => {
    const response = await axios.get(COMMENTS_API+"/user")
    return response.data;
}