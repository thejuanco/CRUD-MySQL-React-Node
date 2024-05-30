import React from "react";
import { Formik, Form } from "formik";

const TaskForm = () => {
  return (
    <div>
      <Formik
        //En lugar de crear un componente personalizado utlizamos formik para el formulario
        initialValues={{
          title: "",
          description: "",
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {({ handleChange, handleSubmit }) => (
          //Utilizando la propiedad handleChange para ver que tipea el usario en el formulario
          <Form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Write a title"
              //Llenando el evento onChange con los datos que introduce el usuario
              onChange={handleChange}
            />

            <label>Description</label>
            <textarea
              name="description"
              rows="3"
              placeholder="Write a description"
              onChange={handleChange}
            ></textarea>

            <button type="submit">Save</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
