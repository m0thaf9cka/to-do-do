import axios from "axios";

export default class TodoService {
  static async getAll() {
    return await axios.get("http://localhost:8080/api/todo/all");
  }
}
