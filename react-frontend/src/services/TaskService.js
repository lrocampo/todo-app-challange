import axios from "axios";

const TASKS_REST_API_URL = "http://localhost:8080/api/v1/task";

class TaskService {
    getTasks() {
        return axios.get(TASKS_REST_API_URL);
    }
}

export default new TaskService();