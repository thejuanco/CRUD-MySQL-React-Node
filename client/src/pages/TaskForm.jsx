import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useTask } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";

const TaskForm = () => {
  //Extraer los datos desde el context
  const { createTask, getTask, updateTask } = useTask();
  const params = useParams();
  const navigate = useNavigate();

  //Creando una useState para cargar la tarea al momento de actualizar
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    const loadTasks = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTasks();
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-rows rounded-lg border border-gray-300 w-1/3">
        <h1 className="font-bold text-2xl mx-4 mt-5">{params.id ? "Editar Tarea" : "Crear nueva tarea"}</h1>
        <h2 className="mx-4 text-gray-400">{params.id ? "Actualiza los detalles de la tarea actual" : "Ingresa los detalles de la tarea que deseas agregar a tu lista."}</h2>

        <Formik
          //En lugar de crear un componente personalizado utlizamos formik para el formulario
          initialValues={task}
          //Reiniciar los valores de formik
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            console.log(values);

            if (params.id) {
              await updateTask(params.id, values);
              navigate("/");
            } else {
              await createTask(values);
            }
            //actions.resetForm();
            setTask({
              title: "",
              description: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            //Utilizando la propiedad handleChange para ver que tipea el usario en el formulario
            <Form onSubmit={handleSubmit} className="m-4 flex-col mt-8">
              <label className="my-3">Título</label>
              <input
                type="text"
                name="title"
                placeholder="Título de la tarea"
                //Llenando el evento onChange con los datos que introduce el usuario
                onChange={handleChange}
                value={values.title}
                className="w-full py-2 border my-2 rounded-lg px-2"
              />

              <label className="mt-6">Descripción</label>
              <textarea
                name="description"
                rows="3"
                placeholder="Descripción detallada de la tarea"
                onChange={handleChange}
                value={values.description}
                className="w-full border rounded-lg px-2 my-2 py-2 h-32"
              ></textarea>

              <button type="submit" disabled={isSubmitting}
                className="bg-gray-800 text-white py-2 px-5 rounded-lg hover:bg-gray-700 mt-10"
              >
                {isSubmitting ? "Guardar cambios" : "Crear tarea"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default TaskForm;
