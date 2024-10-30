<template>
    <div>
      <h1>Các bài viết</h1>
      <ul v-if="data">
        <li v-for="post in data" :key="post.id">{{ post.title }}</li>
      </ul>
      <p v-else>Đang tải dữ liệu...</p>
      <p v-if="error">Có lỗi xảy ra: {{ error.message }}</p>
    </div>
</template>
  
<script setup>
  const { data, error } = await useAsyncData('posts', () => $fetch('/api/posts'));
  
  if (error.value) {
    console.error('Lỗi:', error.value);
  }
</script>
  