import Mock from 'mockjs';
import {tableBasic, tableHigh} from "./table";
import {cityList, openCityList} from "./city";
import {bikeList} from "./bike";

Mock.mock( tableBasic.url, tableBasic.method, tableBasic.template)
Mock.mock(tableHigh.url, tableHigh.method, tableHigh.template)
Mock.mock(cityList.url, cityList.method, cityList.template)
Mock.mock(openCityList.url, openCityList.method, openCityList.template)
Mock.mock(bikeList.url, bikeList.method, bikeList.template)

export default Mock
