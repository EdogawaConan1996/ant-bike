import httpRequest from '../libs/httpRequest';

export const getCityList = () => {
  return httpRequest.request({
    method: 'get',
    url: 'city/list'
  })
};

export const getOpenCityList = () => {
  return httpRequest.request({
    method: 'post',
    url: 'city/open_city'
  })
}
