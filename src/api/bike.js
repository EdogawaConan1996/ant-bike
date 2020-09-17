import httpRequest from '../libs/httpRequest';

export const getBikeList = () => {
  return httpRequest.request({
    method: 'get',
    url: '/bike/list'
  })
}
