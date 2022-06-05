import axios from 'axios';
export const API_Key = '0a36bfae1984e2577ce56acd54f7a2f3';
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});
export default instance;