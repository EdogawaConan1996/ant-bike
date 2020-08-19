import Mock from 'mockjs';
import {tableList1} from "./table";

Mock.mock(tableList1.url, tableList1.method, tableList1.template)

export default Mock
