import React, { useEffect, useState } from "react";
import { getTaskRequest } from "../api/task.api";
import TaskCard from "../components/TaskCard";

function TasksPage() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      const response = await getTaskRequest();
      setTasks(response); // Guarda los datos en el estado
      //console.log(response);
    };

    loadTasks();
  }, []);

  return (
    <div>
      <h1>Tareas</h1>

      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TasksPage;
