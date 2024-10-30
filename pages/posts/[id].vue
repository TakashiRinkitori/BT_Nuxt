<template>
    <div v-if="post">
      <h1>Chi tiết Bài viết</h1>
      <table>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Nội dung</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ post.title }}</td>
            <td>{{ post.body }}</td>
          </tr>
        </tbody>
      </table>
      <nuxt-link to="/">Trở lại danh sách bài viết</nuxt-link>
    </div>
    <div v-else>
      <p>Đang tải dữ liệu bài viết...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const post = ref(null);
  const route = useRoute();
  
  const fetchPost = async () => {
    const response = await fetch(`/api/posts/${route.params.id}`);
    post.value = await response.json();
  };
  
  onMounted(fetchPost);
  </script>
  
  <style scoped>
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  th, td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
  }
  th {
    background-color: #f2f2f2;
  }
  </style>
  