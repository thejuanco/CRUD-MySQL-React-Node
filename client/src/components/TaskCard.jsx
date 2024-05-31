import React from "react";
import { useTask } from "../context/TaskProvider";

const TaskCard = ({task}) => {

    const {deleteTask} = useTask();

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✔️" : "❌"}</span>
      <span>{task.createdAt}</span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
      <button>Editar</button>
    </div>
  );
};

export default TaskCard;
