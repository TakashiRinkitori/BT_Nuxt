<!-- pages/day8/bai4Task.vue -->
<template>
  <div>
    <h1>Danh sách nhiệm vụ</h1>
    <form @submit.prevent="addNewTask">
      <input v-model="newTask.title" placeholder="Tiêu đề nhiệm vụ" required />
      <button type="submit">Thêm nhiệm vụ</button>
    </form>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Tiêu đề</th>
          <th>Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasks" :key="task.id">
          <td>{{ task.id }}</td>
          <td>
            <nuxt-link :to="`/bai4Task/${task.id}`">{{ task.title }}</nuxt-link>
          </td>
          <td>
            <button @click.prevent="deleteTask(task.id)">Xóa</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useTaskStore } from '@/store/taskStore';

const taskStore = useTaskStore();
const newTask = ref({ title: '' });

const addNewTask = () => {
  taskStore.addTask(newTask.value);
  newTask.value = { title: '' };
};

const deleteTask = (id) => {
  taskStore.deleteTask(id);
};

const tasks = computed(() => taskStore.tasks);
</script>

<style scoped>
/* Your styles here */
</style>
