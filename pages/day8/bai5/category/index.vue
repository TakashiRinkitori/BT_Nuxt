<template>
    <div>
      <h1>Danh mục bài viết</h1>
      <ul>
        <li v-for="category in categories" :key="category.id">
          <router-link :to="`/day8/bai5/category/${category.id}`">{{ category.name }}</router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { usePostsStore } from '@/store/posts';
  
  const postsStore = usePostsStore();
  postsStore.fetchCategories();
  const categories = postsStore.categories;
  </script>
  
  <style scoped>
  h1 {
    font-size: 2rem;
  }
  </style>
  