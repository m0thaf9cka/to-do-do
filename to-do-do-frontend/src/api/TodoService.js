import axios from "axios";

export default class TodoService {
  static async getAll() {
    return await axios.get(`http://localhost:8080/api/todo/get/all`);
  }
  static async save(todo) {
    return await axios.post(`http://localhost:8080/api/todo/save`, todo);
  }
  static async toggle(id) {
    return await axios.patch(`http://localhost:8080/api/todo/toggle/${id}`);
  }
  static async remove(id) {
    return await axios.delete(`http://localhost:8080/api/todo/remove/${id}`);
  }
}
