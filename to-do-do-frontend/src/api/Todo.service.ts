import axios from 'axios';
import { Todo } from '../global/interfaces';

const HOST = 'http://localhost:8080/api/todo';

export const TodoService = {
  getAll: () => axios.get(`${HOST}/get/all`),
  save: (todo: Todo) => axios.post(`${HOST}/save`, todo),
  toggle: (id: number) => axios.patch(`${HOST}/toggle/${id}`),
  remove: (id: number) => axios.delete(`${HOST}/remove/${id}`)
};
