import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000'
  },
  env: {
    GET_TODO_LIST_ENDPOINT:
      '/api/todo/list?query=&filter=all&sort=createdAt-desc&page=1',
    TOGGLE_TODO_ENDPOINT: '/api/todo/toggle/'
  }
});
