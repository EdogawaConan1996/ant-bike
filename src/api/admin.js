import axios from 'axios';

export const getWeatherDetail = () => {
  return axios.request({
    baseURL: '/telematics',
    method: 'get',
    url: '/v3/weather',
    params: {
      location: 'beijing',
      output: 'json',
      ak: '3p49MVra6urFRGOT9s8UBWr2'
    }
  })
};
