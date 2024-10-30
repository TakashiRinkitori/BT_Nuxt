<template>
    <div>
      <h1>Danh sách công việc</h1>
      <form @submit.prevent="submitForm">
        <input v-model="newTodoTitle" placeholder="Tiêu đề công việc" required />
        <button type="submit">Thêm công việc</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todos" :key="todo.id">
            <td>
              <NuxtLink :to="`/bt_nuxt/bai5/${todo.id}`">{{ todo.title }}</NuxtLink>
            </td>
            <td>
              <button @click="removeTodo(todo.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <div v-if="selectedTodo">
        <h1>Chi tiết công việc</h1>
        <h2>{{ selectedTodo.title }}</h2>
        <p>{{ selectedTodo.description }}</p>
        <button @click="selectedTodo = null">Quay lại</button>
      </div>
    </div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const todos = ref([
    { id: 1, title: 'Đi chợ', description: 'Mua thực phẩm' },
    { id: 2, title: 'Học lập trình', description: 'Học Vue.js' }
  ]);
  const newTodoTitle = ref('');
  const selectedTodo = ref(null);
  const route = useRoute();
  
  function submitForm() {
    const newTodo = { id: Date.now(), title: newTodoTitle.value, description: 'Chưa có mô tả' };
    todos.value.push(newTodo);
    newTodoTitle.value = '';
  }
  
  function removeTodo(id) {
    todos.value = todos.value.filter(todo => todo.id !== id);
  }
  
  onMounted(() => {
    if (route.params.id) {
      selectedTodo.value = todos.value.find(t => t.id == route.params.id);
    }
  });
</script>
  
<style scoped>
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
  button {
    background-color: #f44336;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
  button:hover {
    opacity: 0.8;
  }
</style>
  