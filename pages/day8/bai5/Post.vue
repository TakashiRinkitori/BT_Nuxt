<template>
    <div>
      <h2>Danh sách bài viết</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tiêu đề</th>
            <th>Danh mục</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="post in posts" :key="post.id">
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ getCategoryName(post.categoryId) }}</td>
            <td>
                <router-link to="/day8/bai5/addPost">Thêm bài viết</router-link>
                <router-link :to="`/day8/bai5/${post.id}`">Xem chi tiết</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { usePostsStore } from '@/store/posts';
  
  const postsStore = usePostsStore();
  postsStore.fetchPosts(); 
  const posts = postsStore.posts; 


  const getCategoryName = (categoryId) => {
  const category = postsStore.categories.find(c => c.id === categoryId);
  return category ? category.name : 'Không xác định';
};
</script>
  
  <style scoped>
  h2 {
    font-size: 1.5rem;
  }
  </style>
  