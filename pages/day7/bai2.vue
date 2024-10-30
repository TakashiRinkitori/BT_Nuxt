<template>
    <div>
      <h1>Bai2 Danh sách người dùng</h1>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
</template>
  
<script setup>
  const { data: users, error } = await useFetch('/api/hello');
</script>
  
<style scoped>
  h1 {
    font-size: 2rem;
  }
</style>
  