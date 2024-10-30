<template>
    <div>
      <h1>Đăng Nhập</h1>
      <form @submit.prevent="login">
        <input type="text" v-model="username" placeholder="Tên đăng nhập" />
        <input type="password" v-model="password" placeholder="Mật khẩu" />
        <button type="submit">Đăng Nhập</button>
      </form>
      <div v-if="error">{{ error }}</div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const username = ref('');
  const password = ref('');
  const error = ref('');
  const router = useRouter();
  
  const login = () => {
    if (username.value === 'admin' && password.value === 'password') {
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('role', 'admin'); 
      router.push('/admin');
    } else if (username.value === 'user' && password.value === 'password') {
      localStorage.setItem('authenticated', 'true');
      localStorage.setItem('role', 'user'); 
      router.push('/');
    } else {
      error.value = 'Thông tin đăng nhập không chính xác!';
    }
  };
  </script>
  