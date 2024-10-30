<template>
  <div>
    <h1>Hệ thống Blog</h1>
    
    <h2>Danh sách Bài viết</h2>
    <table>
      <thead>
        <tr>
          <th>Tiêu đề</th>
          <th>Nội dung</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
          <td>
            <nuxt-link :to="`/posts/${post.id}`">Chi tiết bài viết</nuxt-link> 
            <button @click="deletePost(post.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <h2>Thêm Bài viết</h2>
    <form @submit.prevent="createPost">
      <input v-model="newPost.title" placeholder="Tiêu đề bài viết" required />
      <textarea v-model="newPost.body" placeholder="Nội dung bài viết" required></textarea>
      <button type="submit">Thêm Bài viết</button>
    </form>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const posts = ref([]);
const newPost = ref({ title: '', body: '' });

const fetchPosts = async () => {
  const response = await fetch('/api/posts'); 
  posts.value = await response.json();
};

const createPost = async () => {
  await fetch('/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost.value),
  });
  fetchPosts(); 
  newPost.value = { title: '', body: '' };
};


const deletePost = async (id) => {
  await fetch(`/api/posts/${id}`, {
    method: 'DELETE',
  });
  fetchPosts(); 
};

onMounted(fetchPosts);
</script>

<style scoped>
h1 {
  font-size: 2rem;
}
h2 {
  margin-top: 20px;
}
form {
  margin-top: 20px;
}
input, textarea {
  width: 100%;
  margin-bottom: 10px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 8px 12px;
  border: 1px solid #ddd;
}
th {
  background-color: #f2f2f2;
}
button {
  margin-left: 5px;
}
</style>
