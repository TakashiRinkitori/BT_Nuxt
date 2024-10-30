<template>
    <form @submit.prevent="submit">
      <input v-model="title" placeholder="Tiêu đề" required />
      <textarea v-model="body" placeholder="Nội dung" required></textarea>
      <button type="submit">Lưu</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const props = defineProps({
    initialContent: Object,
    onSave: Function,
  });
  
  const title = ref(props.initialContent ? props.initialContent.title : '');
  const body = ref(props.initialContent ? props.initialContent.body : '');
  
  const submit = () => {
    onSave({ title: title.value, body: body.value });
  };
  </script>
  