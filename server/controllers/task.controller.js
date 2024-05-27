import { pool } from "../db.js"

const getTasks = (req, res) => {
    res.send("Obteniendo tareas")
}

const getTask = (req, res) => {
    res.send("Obteniendo una tarea")
}

const createTask = async (req, res) => {
    //Extraer los datos del body
    const { title, description } = req.body;
    //Extrayendo el resultado de la query
    const [result] = await pool.query(
        // Query para insertar datos a la tabla
      "INSERT INTO tasks (title, description) VALUES (?, ?)",
      [
        title,
        description
      ]
    );
    
    //Mostrarndo el resultado
    res.json({
        id: result.insertId,
        title,
        description
    })
}

const updateTask = (req, res) => {
    res.send("Actualizando tarea")
}
const deleteTask = (req, res) => {
    res.send("Eliminando tarea")
}

export {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}