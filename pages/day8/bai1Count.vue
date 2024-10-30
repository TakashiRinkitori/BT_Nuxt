<template>
    <div>
      <h1>Giá trị đếm: {{ count }}</h1>
      <button @click="increment">Tăng</button>
      <button @click="decrement">Giảm</button>
    </div>
  </template>
  
  <script setup>
  import { useCounterStore } from '@/store/counterStore';
  import { computed } from 'vue';
  
  const counterStore = useCounterStore();
  const count = computed(() => counterStore.count);
  
  const increment = () => {
    counterStore.increment();
  };
  
  const decrement = () => {
    counterStore.decrement();
  };
  </script>
  
  <style scoped>
  button {
    margin: 5px;
  }
  </style>
  