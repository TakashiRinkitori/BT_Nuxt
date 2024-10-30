<template>
    <div>
      <h1>Bài 1: Danh sách mèo</h1>
      <div class="cat-list">
        <div v-for="cat in cats" :key="cat.id" class="cat-item">
          <img :src="cat.url" alt="Cat" />
        </div>
      </div>
    </div>
</template>
  
<script setup>
  const { data: cats, error } = await useAsyncData('cats', async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10');
    if (!res.ok) throw new Error('Failed to fetch cats');
    return await res.json();
  });
</script>
  
<style scoped>
  .cat-list {
    display: flex;
    flex-wrap: wrap;
  }
  .cat-item {
    margin: 10px;
  }
  .cat-item img {
    max-width: 200px;
    border-radius: 8px;
  }
</style>
  