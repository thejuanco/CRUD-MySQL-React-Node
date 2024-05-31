import { Formik, Form } from "formik";
import { useTask } from "../context/TaskProvider";

const TaskForm = () => {

  //Extraer los datos desde el context
  const { createTask } = useTask();

  return (
    <div>
      <Formik
        //En lugar de crear un componente personalizado utlizamos formik para el formulario
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          createTask(values)
          actions.resetForm();
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
              {isSubmitting ? "Loading..." : "Create Task"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
