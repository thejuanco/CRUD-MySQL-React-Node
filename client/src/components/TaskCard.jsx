import React from "react";
import { deleteTaskRequest } from '../api/task.api' 

const TaskCard = ({task}) => {

    //Funcion para elimiar una tarea por id
    const handleDelete = async (id) => {
        try {
            const res = await deleteTaskRequest(id)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✔️" : "❌"}</span>
      <span>{task.createdAt}</span>
      <button onClick={() => handleDelete(task.id)}>Eliminar</button>
      <button>Editar</button>
    </div>
  );
};

export default TaskCard;
