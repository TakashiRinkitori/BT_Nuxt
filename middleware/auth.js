export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.client) {
      const isAuthenticated = localStorage.getItem('authenticated') === 'true';
  
      if (!isAuthenticated && to.path !== '/login') {
        return navigateTo('/login');
      }
    }
  });
  