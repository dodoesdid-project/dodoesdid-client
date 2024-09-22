import axios from 'axios';

const baseURL = 'http://3.35.176.89:8080';

export const defaultAxios = axios.create({
  baseURL,
  withCredentials: true,
});
