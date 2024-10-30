<template>
    <div class="content-card">
      <h3>{{ content.title }}</h3>
      <p>{{ content.body }}</p>
      <button @click="editContent">Chỉnh sửa</button>
      <button @click="deleteContent">Xóa</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    content: Object,
    onEdit: Function,
    onDelete: Function,
  });
  
  const editContent = () => {
    props.onEdit(props.content);
  };
  
  const deleteContent = () => {
    props.onDelete(props.content.id);
  };
  </script>
  
  <style scoped>
  .content-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
  }
  </style>
  