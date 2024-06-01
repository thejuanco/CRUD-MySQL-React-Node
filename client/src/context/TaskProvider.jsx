import { useContext, useState } from "react";
import {
  getTasksRequest,
  deleteTaskRequest,
  createTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  toogleTaskDoneRequest
} from "../api/task.api.js";
import { TaskContext } from "./TaskContext.jsx";

//Creando nuestro propio hook
export const useTask = () => {
  const context = useContext(TaskContext);
  //Verficando
  if (!context) {
    throw new Error(
      "TaskContext no está disponible o el useTask debe de ser usado con un TaskContextProvider"
    );
  } else {
    return context;
  }
};

//Creando componente
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = async () => {
    const response = await getTasksRequest();
    setTasks(response); // Guarda los datos en el estado
    //console.log(response);
  };

  //Funcion para elimiar una tarea por id
  const deleteTask = async (id) => {
    try {
      const res = await deleteTaskRequest(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (task) => {
    try {
      await createTaskRequest(task);
      //console.log(response);
      //setTasks([...tasks, response.data])
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const res = await getTaskRequest(id);
      return res.data;
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  const toogleTaskDone = async (id) => {
    try {
      const taskFound = tasks.find(task => task.id === id);
      await toogleTaskDoneRequest(id, taskFound.done === 0 ? true : false);
      tasks.map(task => task.id === id ? task.done = task.done === 0 ? 1 : 0 : task.done);
      setTasks([...tasks]);
    } catch (error) {
      console.error(error);
    }
  }

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields)
      console.log(response)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loadTasks,
        deleteTask,
        createTask,
        getTask,
        updateTask,
        toogleTaskDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
