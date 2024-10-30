<template>
    <div>
      <h1>Chi tiết bài viết</h1>
      <div v-if="post">
        <h2>{{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <router-link to="/day8/bai5/Post">Quay lại danh sách bài viết</router-link>
      </div>
      <div v-else>
        <p>Bài viết không tồn tại.</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { usePostsStore } from '@/store/posts';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const postsStore = usePostsStore();
  const postId = parseInt(route.params.id);
  const post = postsStore.posts.find(p => p.id === postId);
  </script>
  
  <style scoped>
  h1 {
    font-size: 2rem;
  }
  </style>
  