import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:2525',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

instance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers['token'] = window.localStorage.getItem('token') as string;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export { instance };
