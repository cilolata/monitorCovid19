import axios from 'axios';

const api = axios.create({
    baseURL: 'http://apps.who.int/gho/athena/api/?format=json'
    
 
});

export default api;