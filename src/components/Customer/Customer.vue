<template>
  <ul>
    <li 
      v-for = "item of data"
      :key = "item.id"
    >
      <p>ID: {{ item.id }}</p>
      <p>NAME: {{ item.name }}</p>
      <p>
        AGE: 
        <span>{{ item.age }}</span>
        &nbsp;
        <span>
          <input type="number" :value="item.age" @input="setAge(item.id, $event.target.value)" />
        </span>
      </p>
      <!-- <ul> -->
      <customer v-if="item.children" :data = "item.children" @set-age="setAge"></customer>
      <!-- </ul> -->
  </li>

  </ul>

</template>

<script setup>
const props = defineProps({ 
  data: Array 
});

const emit = defineEmits(["setAge"]);
const setAge = (id, age) => { 
  // console.log(id, age)
  emit('setAge', id, age); 
}


</script>

<style scoped>
</style> 