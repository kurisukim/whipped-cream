import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://puff-pastry.firebaseio.com/'
});

export default instance;