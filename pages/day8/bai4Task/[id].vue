<template>
  <div v-if="task">
    <h1>{{ task.title }}</h1>
    <p>Đây là chi tiết nhiệm vụ.</p>
    <nuxt-link to="/day8/bai4Task">Trở lại danh sách nhiệm vụ</nuxt-link>
  </div>
  <div v-else>
    <p>Đang tải nhiệm vụ...</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTaskStore } from '@/store/taskStore';
import { useRoute } from 'vue-router';

const taskStore = useTaskStore();
const route = useRoute();

const task = computed(() => taskStore.tasks.find(t => t.id == route.params.id));
</script>

<style scoped>
/* Your styles here */
</style>
