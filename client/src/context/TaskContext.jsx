import { createContext, useContext, useState } from "react";
import { getTaskRequest } from "../api/task.api.js";

export const TaskContext = createContext();

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

  return (
    <TaskContext.Provider value={{ tasks, loadTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
