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
    <div className="mx-2 ">
      <div className="border rounded-lg px-6 h-64">
        <h2 className="font-bold text-2xl text-left mt-6">{task.title}</h2>
        <p className="text-gray-500 mb-8">{task.description}</p>
        <div className="flex justify-beetwen">
          <span className="">Creada: {task.createdAt}</span>
          <span className="">
            {task.done == 1 ? <span className="px-2 bg-amber-200 rounded-2xl text-amber-700">Pendiente</span> : <span className="px-2 bg-green-200 rounded-2xl text-green-700">Completada</span>}
          </span>
        </div>
        <div className="space-x-2 mt-10">
          <button
            onClick={() => navigate(`/edit/${task.id}`)}
            className="bg-gray-800 text-white px-2 rounded-lg"
          >
            Editar
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="border-2 border-gray-400 text-gray-800 px-2 rounded-lg"
          >
            Eliminar
          </button>
          <button
            onClick={() => handleDone(task.id)}
            className="hover:underline"
          >
            {task.done == 1 ? "Tarea completada" : "Tarea No Completa" }
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
