import axios from 'axios';

const baseURL = 'http://3.35.190.46';

export const defaultAxios = axios.create({
  baseURL,
  withCredentials: true,
});

defaultAxios.interceptors.request.use(function (config) {
  const accessToken = localStorage.getItem('authorization');
  config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
  return config;
});
