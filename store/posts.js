import { defineStore } from 'pinia';

export const usePostsStore = defineStore('posts', {
  state: () => ({
    posts: [],
    categories: [],
  }),
  actions: {
    fetchPosts() {
      this.posts = [
        { id: 1, title: 'Bài viết 1', content: 'Nội dung bài viết 1', categoryId: 1 },
        { id: 2, title: 'Bài viết 2', content: 'Nội dung bài viết 2', categoryId: 2 },
      ];
    },
    addPost(newPost) {
      this.posts.push(newPost);
    },
    fetchCategories() {
      this.categories = [
        { id: 1, name: 'Danh mục 1' },
        { id: 2, name: 'Danh mục 2' },
      ];
    }
  }
});
