import React, { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTask } from "../context/TaskProvider";

function TasksPage() {
  
  const { tasks, loadTasks } = useTask();

  useEffect(() => {

    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 mx-10">

      {tasks.length == 0 ? (
        <h1>No hay tareas por hacer</h1>
      ) : (
        tasks.map((task) => <TaskCard task={task} key={task.id} />)
      )}
    </div>
  );
}

export default TasksPage;
