<template>
<div>
  <input type="text" placeholder="输入id或者name查询" @input="search($event.target.value)">
  <div>
    <p>NAME:{{ searchedData.name }}</p>
    <p>AGE:{{ searchedData.age }}</p>
  </div>
  <hr />
  <!-- <ul> -->
  <Customer :data = "data" @set-age="setAge"></Customer>
  <!-- </ul> -->
</div>

</template>

<script setup >
import { customerData } from './data';
// import { reactive } from 'vue';
import { 
  Customer,
  Customers
} from './components/Customer';
import { toRefs } from '@vue/reactivity';

const customers = new Customers({
  data: customerData,
  searchedData: {}
})

const { data, searchedData } = toRefs(customers.state);

const { setAge, search } = customers;

// ---------------------------------------------
// const state = reactive({
//   data: customerData,
//   searchedData: {}
// });

// const setAge = (id, age) => {
//   // 找到对应id所在的项
//   const customer = getCustomer(id, state.data);
//   // console.log(customer);

//   // 修改这一项中的age
//   customer.age = age;
// }

// 搜索
// const searchData = (value) => {
//   // 如果输入的值转成number类型不是NaN,说明是通过id查询
//   if(!isNaN(value)) {
//     const customer = getCustomer(value, state.data, 'id') || {};
//     state.searchedData = customer;
//     return;
//   }

//   // 能执行到这里，说明不是通过id查询，那就是通过name查询
//   const customer = getCustomer(value, state.data, 'name') || {};
//   state.searchedData = customer;
// }

// // 遍历数组，找到对应id的项
// function getCustomer(value, data, field) {
//   let result = null;
  
//   for(let i = 0; i < data.length; i++){
//     let item = data[i];

//     const condition = field === 'name' 
//                     ? item.name.toLowerCase().includes(value.toLowerCase()) 
//                     : item.id === Number(value);
//     // 条件为true，匹配成功
//     if(condition){
//       result = item;

//       // 判断在第一维是否匹配到，result存在，说明找到了，就返回结果，终止循环
//       if(result){
//         return result;
//       }

//     }

//     // 如果没有找到，就会继续往下执行
//     // 找当前item的children
//     if(item.children && item.children.length > 0){
//       // 递归
//       result = getCustomer(value, item.children, field);

//       if(result){
//         return result;
//       }

//     }
//   }
// }

</script>

<style scoped>
</style> 