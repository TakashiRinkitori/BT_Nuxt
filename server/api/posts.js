export default defineEventHandler(async (event) => {
    const response = await $fetch('https://jsonplaceholder.typicode.com/posts');
    return response;
  });
  