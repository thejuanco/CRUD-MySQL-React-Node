import { createContext, useContext, useState } from "react";
import { getTaskRequest, deleteTaskRequest, createTaskRequest } from "../api/task.api.js";
import { TaskContext } from "./TaskContext.jsx";


//Creando nuestro propio hook
export const useTask = () => {
    const context = useContext(TaskContext)
    //Verficando
    if(!context){
        throw new Error("TaskContext no está disponible o el useTask debe de ser usado con un TaskContextProvider")
    } else {
        return context;
    }
}

//Creando componente
export const TaskContextProvider = ({ children }) => {

    const [tasks, setTasks] = useState([]);

    const loadTasks = async () => {
        const response = await getTaskRequest();
        setTasks(response); // Guarda los datos en el estado
        //console.log(response);
    };
    
    //Funcion para elimiar una tarea por id
    const deleteTask = async (id) => {
        try {
            const res = await deleteTaskRequest(id)
            setTasks(tasks.filter(task => task.id !== id))
        } catch (error) {
            console.log(error)
        }
    }

    const createTask = async (task) => {
        try {
            await createTaskRequest(task);
            console.log(response);
            //setTasks([...tasks, response.data])
          } catch (error) {
            console.log(error);
          }
    }

  return (
    <TaskContext.Provider value={{ tasks, loadTasks, deleteTask, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};
