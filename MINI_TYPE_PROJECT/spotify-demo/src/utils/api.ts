import axios from 'axios';
import { SPOTIFY_BASE_URL } from '../configs/commonConfig';

const api = axios.create({
  baseURL: SPOTIFY_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.getItem('access_token')}`,
  },
});

export default api;
