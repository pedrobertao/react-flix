import axios from 'axios';

import { API_SEARCH } from './utils/constants';
const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default instance;