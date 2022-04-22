import axios from 'axios';

export default class TaskService {

  static async getAll() {
    return await axios.get('http://localhost:8080/api/task/all');
  }

}
