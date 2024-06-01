import { useEffect, useState } from "react";
import { Formik, Form } from "formik";
import { useTask } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";

const TaskForm = () => {
  //Extraer los datos desde el context
  const { createTask, getTask, updateTask } = useTask();
  const params = useParams()
  const navigate = useNavigate()

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
    <div>

      <h1>{params.id ? "Editar Tarea": "Crear una Tarea"}</h1>

      <Formik
        //En lugar de crear un componente personalizado utlizamos formik para el formulario
        initialValues={task}
        //Reiniciar los valores de formik
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          
          if (params.id) {
            await updateTask(params.id, values)
            navigate("/");
          } else {
            await createTask(values)
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
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              //Llenando el evento onChange con los datos que introduce el usuario
              onChange={handleChange}
              value={values.title}
            />

            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardar Cambios" : "Crear Tarea"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
