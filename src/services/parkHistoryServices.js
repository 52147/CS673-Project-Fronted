import axios from 'axios';

const COMMENTS_API = 'http://localhost:8080'
export const getHistoryService = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return response.data;
}