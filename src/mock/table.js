export const tableBasic = {
  url: /\/table\/basic/,
  method: 'get',
  template: {
    "code": '000000',
    "message": "",
    "result": {
      "list|10": [{
        "id|+1": 1,
        "username": "@cname",
        "sex|1-2": 1,
        "state|1-5": 1,
        "interest|1-8": 1,
        "isMarried|0-1": 1,
        "birthday": "2000-01-01",
        "address": "北京市海淀区",
        "time": "09:00:00"
      }],
      "page": 1,
      "pageSize": 10,
      "totalCount": 30
    }
  }
}

export const tableHigh = {
  url: /\/table\/high/,
  method: 'get',
  template: {
    "code": "000000",
    "message": "",
    "result": {
      "list|10": [{
        "id|+1": 1,
        "username": "@cname",
        "sex|1-2": 1,
        "age|10-50": 0,
        "state|1-5": 1,
        "interest|1-8": 1,
        "birthday": "1997-06-02",
        "address": "北京市海淀区",
        "time": "09:00:00"
      }],
      "page": 2,
      "pageSize": 10,
      "totalCount": 30
    }
  }
}
