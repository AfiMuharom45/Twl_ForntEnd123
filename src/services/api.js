import axios from 'axios';

const api = axios.create({
  baseURL: 'https://twl-back-end123.vercel.app/api', // Ganti dengan URL backend Anda
});

export default api;
