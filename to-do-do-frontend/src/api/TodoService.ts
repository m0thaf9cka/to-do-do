import axios from "axios";

export default class TodoService {
  static getAll = () =>
    axios
      .get("http://localhost:8080/api/todo/get/all")
      .then((response) => response.data);
}
