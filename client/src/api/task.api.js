//Este archivo nos permite comunicar los modulos
import axios from "axios";

const getTaskRequest = async () => {
  try {
    const response = await axios.get("http://localhost:4000/tasks");
    return response.data; // Retorna los datos obtenidos de la solicitud
  } catch (error) {
    console.error(error);
    throw error; // Opcional: relanza el error para manejarlo en otro lugar si es necesario
  }
}


const createTaskRequest = async (task) => {
  return await axios.post("http://localhost:4000/tasks", task);
};

export { createTaskRequest, getTaskRequest };
