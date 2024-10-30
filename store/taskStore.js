import { defineStore } from 'pinia';

export const useTaskStore = defineStore('task', {
  state: () => ({
    tasks: [],
  }),
  actions: {
    addTask(task) {
      this.tasks.push({ id: Date.now(), ...task });
    },
    editTask(updatedTask) {
      const index = this.tasks.findIndex(task => task.id === updatedTask.id);
      if (index !== -1) {
        this.tasks[index] = updatedTask;
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
  },
});
