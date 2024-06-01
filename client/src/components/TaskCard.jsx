import React from "react";
import { useTask } from "../context/TaskProvider";
import { useNavigate } from "react-router-dom";

const TaskCard = ({task}) => {

    const navigate = useNavigate()

    const {deleteTask, toogleTaskDone} = useTask();

    const handleDone = async () => {
      await toogleTaskDone(task.id)
    }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✔️" : "❌"}</span>
      <span>{task.createdAt}</span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      <button onClick={() => navigate(`/edit/${task.id}`)}>Editar</button>
      <button onClick={() => handleDone(task.id)}>Tarea Completada</button>
    </div> 
  );
};

export default TaskCard;
