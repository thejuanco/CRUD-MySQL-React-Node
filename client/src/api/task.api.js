//Este archivo nos permite comunicar los modulos
import axios from "axios";

const getTasksRequest = async () => {
  try {
    const response = await axios.get("http://localhost:4000/tasks");
    return response.data; // Retorna los datos obtenidos de la solicitud
  } catch (error) {
    console.error(error);
    throw error; // Opcional: relanza el error para manejarlo en otro lugar si es necesario
  }
};

const createTaskRequest = async (task) => {
  return await axios.post("http://localhost:4000/tasks", task);
};

const deleteTaskRequest = async (id) => {
  return await axios.delete(`http://localhost:4000/tasks/${id}`);
};

const getTaskRequest = async (id) => {
    return await axios.get(`http://localhost:4000/tasks/${id}`); // Retorna los datos obtenidos de la solicitud
};

const updateTaskRequest = async (id, newFields) => {
    return await axios.put(`http://localhost:4000/tasks/${id}`, newFields); // Retorna los datos obtenidos de la solicitud
};

export { createTaskRequest, getTasksRequest, deleteTaskRequest, getTaskRequest, updateTaskRequest };
