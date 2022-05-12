import axios from 'axios';

const HOST = 'http://localhost:8080/api/todo';

export const TodoService = {
  getAll: () => axios.get(`${HOST}/get/all`),
  toggle: (id: number) => axios.patch(`${HOST}/toggle/${id}`),
  remove: (id: number) => axios.delete(`${HOST}/remove/${id}`)
};
