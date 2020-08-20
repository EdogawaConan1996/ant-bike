import Mock from 'mockjs';
import {tableBasic, tableHigh} from "./table";

Mock.mock( tableBasic.url, tableBasic.method, tableBasic.template)
Mock.mock(tableHigh.url, tableHigh.method, tableHigh.template)

export default Mock
