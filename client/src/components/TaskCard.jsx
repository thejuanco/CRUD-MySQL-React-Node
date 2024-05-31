import React from "react";

const TaskCard = ({task}) => {
  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <span>{task.done == 1 ? "✔️" : "❌"}</span>
      <span>{task.createdAt}</span>
      <button>Eliminar</button>
      <button>Editar</button>
    </div>
  );
};

export default TaskCard;
