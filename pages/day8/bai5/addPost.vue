<template>
    <div>
      <h1>Thêm Bài Viết</h1>
      <form @submit.prevent="submitPost">
        <input v-model="title" placeholder="Tiêu đề bài viết" required />
        <textarea v-model="content" placeholder="Nội dung bài viết" required></textarea>
        <select v-model="categoryId" required>
          <option v-for="category in categories" :key="category.id" :value="category.id">
            {{ category.name }}
          </option>
        </select>
        <button type="submit">Thêm bài viết</button>
      </form>
      <router-link to="/day8/bai5/Post">Quay lại danh sách bài viết</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { usePostsStore } from '@/store/posts';
  
  const router = useRouter();
  const postsStore = usePostsStore();
  
  const title = ref('');
  const content = ref('');
  const categoryId = ref(null);
  const categories = ref([]);
  
  onMounted(() => {
    postsStore.fetchCategories();
    categories.value = postsStore.categories;
  });
  
  const submitPost = () => {
    if (!title.value || !content.value || !categoryId.value) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }
    
    const newPost = {
      id: postsStore.posts.length + 1,
      title: title.value,
      content: content.value,
      categoryId: categoryId.value,
    };
    
    postsStore.addPost(newPost);
    router.push('/day8/bai5/Post'); 
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 2rem;
  }
  </style>
  