import axios from 'axios';
import { message } from '@/components/Message';

// create an axios instance
const service = axios.create({
  baseURL: 'http://api.kodax.cn/swagger',
  timeout: 5000,
});

service.interceptors.request.use(
  (config) => {
    config.headers['accessToken'] = localStorage.getItem('accessToken') || '';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;

    if (res.code !== 200) {
      message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      });

      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    console.log('err' + error);
    message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
