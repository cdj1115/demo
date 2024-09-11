<template>
  <div @click="a++">{{ a }}</div>
  <div @click="b.reverse">{{ b }}</div>
  <div @click="c.name = 'lisi'">{{ c.name }}</div>
  <hr>
  <!-- <div @click="d.value++">{{ d }}</div> -->
  <div @click="value++">value:{{ value }}</div>
  <div>key1:{{ key1 }}</div>
  <div>key2:{{ key2 }}</div>
</template>

<script setup>
  import { reactive, ref } from 'vue';
  // 定义一个响应式数据
  const a = ref(1);
  const b = ref([1, 2, 3]);
  const c = ref({
    name: 'zhangsan',
    age: 18
  });
  const { value, key1, key2} = reactive({
    value : 1234,
    key1: 'key1',
    key2: 'key2'
  })
  
  console.log(a.value)
  // console.log(d)
  // ref可以将任意数据类型的数据转化为响应式数据
  // ref在除模板之外的地方使用的时候需要使用.value取值
  // reactive经常用于定义对象类型的响应式数据，但是我们不能对其进行解构赋值 会让其失去响应式
</script>