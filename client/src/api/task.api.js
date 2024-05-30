//Este archivo nos permite comunicar los modulos
import axios from "axios";

const createTaskRequest = async (task) => {
  return await axios.post("http://localhost:4000/tasks", task);
};

export { createTaskRequest };
