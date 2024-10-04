import axios from 'axios';

const baseURL = `${process.env.REACT_APP_SERVER_URL}`;

export const defaultAxios = axios.create({
  baseURL,
  withCredentials: true,
});

defaultAxios.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem('authorization');
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
  return config;
});
