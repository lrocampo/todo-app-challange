import axios from "axios";

class TaskService {
    getTasks() {
        return axios.get("http://localhost:8080/api/v1/task");
    }

    completeTask(task) {
        if(!task.done) return axios.put("http://localhost:8080/api/v1/task/" + task.id + "?isDone=true").then(response => response.data)
        else return axios.put("http://localhost:8080/api/v1/task/" + task.id + "?isDone=false").then(response => response.data)
    }

    deleteTask(task) {
        return axios.delete("http://localhost:8080/api/v1/task/" + task.id);
    }

    addTask(newTask) {
        return axios.post('http://localhost:8080/api/v1/task/', {
            description: newTask,
          })
          .then((response) => console.log(response));
    }

    editTask(newTask, taskId) {
        return axios.put('http://localhost:8080/api/v1/task/' + taskId + "?"+"description="+newTask)
          .then((response) => console.log(response));
    }
}

export default new TaskService();