export default defineNuxtRouteMiddleware((to, from) => {
    if (import.meta.client) {
      const role = localStorage.getItem('role');
      const userPermissions = {
        admin: ['manage_users', 'view_reports', 'manage_content'],
        user: ['view_reports'],
      };
  
      const requiredPermission = to.meta.permission;
  
      if (requiredPermission && (!role || !userPermissions[role]?.includes(requiredPermission))) {
        return navigateTo('/unauthorized');
      }
    }
  });
  