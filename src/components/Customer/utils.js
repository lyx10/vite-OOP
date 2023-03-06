// 遍历数组，找到对应id的项

export function getCustomer(value, data, field) {
  let result = null;
  
  for(let i = 0; i < data.length; i++){
    let item = data[i];

    const condition = field === 'name' 
                    ? item.name.toLowerCase().includes(value.toLowerCase()) 
                    : item.id === Number(value);
    // 条件为true，匹配成功
    if(condition){
      result = item;
      // 判断在第一维是否匹配到，result存在，说明找到了，就返回结果，终止循环
      if(result){
        return result;
      }

    }

    // 如果没有找到，就会继续往下执行
    // 找当前item的children
    if(item.children && item.children.length > 0){
      // 递归
      result = getCustomer(value, item.children, field);

      if(result){
        return result;
      }

    }
  }
}
