<template>
  <NuxtPage />
</template>

<script setup>
definePageMeta({
  middleware: ['auth', 'role'] 
});
</script>
