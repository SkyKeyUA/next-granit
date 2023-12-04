import axios from 'axios';

const baseURL = process.env.NEXT_APP_API_URL;

const $api = axios.create({
  withCredentials: true,
  baseURL,
});

$api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default $api;
