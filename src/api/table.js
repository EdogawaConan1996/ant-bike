import httpRequest from '../libs/httpRequest'

export const getTableList1 = (params) => {
  return httpRequest.request({
    method: 'get',
    url: '/table/list1',
    params
  })
}
