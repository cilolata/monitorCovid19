import axios from 'axios';

const api = axios.create({
    baseURL: 'https://corona.lmao.ninja/countries',
 
});

export default api;