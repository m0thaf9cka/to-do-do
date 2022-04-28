import axios from "axios";

export default class TodoService {
  static async getAll() {
    return await axios.get("http://localhost:8080/api/todo/all/");
  }
  static async create(todo) {
    return await axios.post("http://localhost:8080/api/todo/", todo);
  }
}
