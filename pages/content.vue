<template>
    <div>
      <h1>Nội Dung</h1>
      <p>Đây là trang nội dung.</p>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: ['auth', 'role'],
    permission: 'view_content' 
  });
  </script>
  