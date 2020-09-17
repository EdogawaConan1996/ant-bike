export const cityList = {
  url: /\/city\/list/,
  method: 'get',
  template: {
    "code": "000000",
    "result": [{
      "id": 1,
      "name": "北京"
    }, {
      "id": 2,
      "name": "上海"
    }, {
      "id": 3,
      "name": "天津"
    }, {
      "id": 5,
      "name": "广州"
    }, {
      "id": 6,
      "name": "深圳"
    }, {
      "id": 7,
      "name": "杭州"
    }, {
      "id": 8,
      "name": "成都"
    }, {
      "id": 9,
      "name": "南京"
    }, {
      "id": 10,
      "name": "苏州"
    }],
    "message": "操作成功"
  }

}

export const openCityList = {
  url: /\/city\/open_city/,
  method: 'post',
  template: {
    "code": "000000",
    "result": {
      "pageNo": 1,
      "pageSize": 10,
      "totalCount": 60,
      "list|10": [
        {
          "id|+1": 1,
          "name": "@city",
          "model|1-2": 1,
          "op_model|1-2": 1,
          "franchisee_id": 77,
          "franchisee_name": "松果自营",
          "city_admin|1-2": [
            {
              "user_name": "@cname",
              "user_id|+1": 10001
            }
          ],
          "open_time": "@datetime",
          "sys_user_name": "@cname",
          "update_time": 1520476737000
        }
      ]
    }
  }
}
