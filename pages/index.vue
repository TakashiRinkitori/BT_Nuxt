<template>
    <div>
      <h1>Trang Chính</h1>
      <p>Chào mừng bạn đến với trang chính!</p>
      <button @click="logout">Đăng Xuất</button>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';
  
  const router = useRouter();
  
  const logout = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('role');
    router.push('/login');
  };
  
  definePageMeta({
    middleware: 'auth'
  });
  </script>
  