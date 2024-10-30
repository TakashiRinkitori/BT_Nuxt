<template>
    <div>
      <h1>Bài viết trong danh mục: {{ categoryName }}</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tiêu đề</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in filteredPosts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>
              <router-link :to="`/day8/bai5/${post.id}`">Xem chi tiết</router-link>
            </td>
          </tr>
        </tbody>
      </table>
      <router-link to="/day8/bai5/category">Quay lại danh sách danh mục</router-link>
    </div>
  </template>
  
  <script setup>
  import { usePostsStore } from '@/store/posts';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const postsStore = usePostsStore();
  const categoryId = parseInt(route.params.id);
  const categoryName = postsStore.categories.find(c => c.id === categoryId)?.name;
  
  const filteredPosts = postsStore.posts.filter(post => post.categoryId === categoryId);
  </script>
  
  <style scoped>
  h1 {
    font-size: 2rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
  </style>
  