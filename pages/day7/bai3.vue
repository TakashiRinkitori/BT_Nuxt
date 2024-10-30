<template>
    <div>
      <h1>B3: Thông tin người dùng</h1>
      <div v-if="user">
        <p><strong>Tên:</strong> {{ user.name }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p v-if="user.age"><strong>Tuổi:</strong> {{ user.age }}</p>
        <p><strong>SĐT:</strong> {{ user.phone }}</p>
        <p><strong>Thông tin bổ sung:</strong> {{ user.additionalInfo }}</p>
      </div>
      <div v-else>
        <p>Đang tải dữ liệu người dùng...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const user = ref(null);
  
  onMounted(async () => {
    try {
      const response = await fetch('/api/user');
      if (response.ok) {
        user.value = await response.json(); 
      }
    } catch (error) {
      console.error('Lỗi khi tải dữ liệu người dùng:', error);
    }
  });
  </script>
  
  <style scoped>
  h1 {
    font-size: 2rem;
  }
  </style>
  