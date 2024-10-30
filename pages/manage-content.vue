<template>
    <div>
      <h1>Quản Lý Nội Dung</h1>
      <ContentForm :initialContent="currentContent" @onSave="saveContent" />
      <div>
        <h2>Nội Dung</h2>
        <ContentCard
          v-for="content in contents"
          :key="content.id"
          :content="content"
          @onEdit="editContent"
          @onDelete="deleteContent"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import ContentCard from '@/components/ContentCard.vue';
  import ContentForm from '@/components/ContentForm.vue';
  
  const contents = ref([]);
  const currentContent = ref(null);
  
  const saveContent = (content) => {
    if (currentContent.value) {
      const index = contents.value.findIndex(c => c.id === currentContent.value.id);
      contents.value[index] = { ...currentContent.value, ...content };
    } else {
      contents.value.push({ id: Date.now(), ...content });
    }
    currentContent.value = null; 
  };
  
  const editContent = (content) => {
    currentContent.value = content;
  };
  
  const deleteContent = (id) => {
    contents.value = contents.value.filter(c => c.id !== id);
  };
  
  definePageMeta({
    middleware: ['auth', 'role'],
    permission: 'manage_content' 
  });
  </script>
  