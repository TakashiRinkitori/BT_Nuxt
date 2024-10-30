<template>
    <div>
      <h1>B4: Quản lý Mục</h1>
      <form @submit.prevent="isEditing ? updateItem() : createItem()">
        <input v-model="newItem.name" placeholder="Tên mục" required />
        <button type="submit">{{ isEditing ? 'Cập nhật mục' : 'Thêm mục' }}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Tên mục</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.id">
            <td>{{ item.name }}</td>
            <td>
              <button @click="editItem(item)">Sửa</button>
              <button @click="deleteItem(item.id)">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const items = ref([]);
  const newItem = ref({ id: null, name: '' });
  const isEditing = ref(false); 
  
  const fetchItems = async () => {
    const response = await fetch('/api/items');
    items.value = await response.json();
  };
  
  const createItem = async () => {
    await fetch('/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem.value),
    });
    resetForm();
    fetchItems();
  };
  
  const editItem = (item) => {
    newItem.value = { ...item }; 
    isEditing.value = true; 
  };
  
  const updateItem = async () => {
    await fetch('/api/items', {
      method: 'PUT', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newItem.value),
    });
    resetForm();
    fetchItems(); 
  };
  
  const deleteItem = async (id) => {
    await fetch('/api/items', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });
    fetchItems(); 
  };
  
  const resetForm = () => {
    newItem.value = { id: null, name: '' }; 
    isEditing.value = false;
  };
  
  onMounted(fetchItems);
  </script>
  
  <style scoped>
  h1 {
    font-size: 2rem;
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
  