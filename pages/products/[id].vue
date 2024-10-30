<template>
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p>ID sản phẩm: {{ productId }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute } from 'vue-router'; 
  
  const route = useRoute();
  const productId = route.params.id; 
  </script>
  
  <style>
  /* Thêm CSS nếu cần */
  </style>
  