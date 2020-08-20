import httpRequest from '../libs/httpRequest'

export const getTableBasic = (params) => {
  return httpRequest.request({
    method: 'get',
    url: '/table/basic',
    params
  })
}

export const getTableHigh = (params) => {
  return httpRequest.request({
    method: 'get',
    url: '/table/high',
    params
  })
}
