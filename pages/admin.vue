<template>
    <div>
      <h1>Quản Lý Người Dùng</h1>
      <p>Chỉ dành cho admin!</p>
      <ul>
        <li>Người dùng 1</li>
        <li>Người dùng 2</li>
      </ul>
      <router-link to="/manage-content">Quản lý nội dung</router-link>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: ['auth', 'role'],
    permission: 'manage_users' 
  });
  </script>
  