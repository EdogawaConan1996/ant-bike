import httpRequest from '../libs/httpRequest';

export const getCityList = () => {
  return httpRequest.request({
    method: 'get',
    url: 'city/list'
  })
};
