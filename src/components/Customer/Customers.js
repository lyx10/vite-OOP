import { reactive } from 'vue'
import { getCustomer } from './utils'

export default class Customers {
  constructor ({data, searchedData}) {
    this.state = reactive({
      data,
      searchedData
    })
  }

  get data () {
    return this.state.data;
  }

  get searchedData () {
    return this.state.searchedData;
  }

  // 修改年龄
  setAge = (id, age) => {
    const customer = getCustomer(id, this.data, 'id');
    customer.age = age;
  }

  // 搜索
  search (value) {
    if(!isNaN(value)){
      this.searchedData  = getCustomer(value, this.data, 'id') || {};
    }else{
      this.searchedData  = getCustomer(value, this.data, 'name') || {};
    }
  }
}