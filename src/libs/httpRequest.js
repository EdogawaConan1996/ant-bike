import axios from 'axios';

axios.defaults.baseURL = '/';
axios.defaults.timeout = 30000;

axios.interceptors.request.use(config => {
  return config;
}, error => {});
axios.interceptors.response.use(response => {
  const SUCCESS_CODE = '000000';
  const code = response.data.code;
  if (code) {
    if (code === SUCCESS_CODE) {
      return response.data.result
    } else {
      return Promise.reject({message: response.data.message});
    }
  } else {
    return Promise.reject({message: '前端请求失败'});
  }
});

export default axios;
