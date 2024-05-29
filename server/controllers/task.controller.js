import { pool } from "../db.js"

const getTasks = async (req, res) => {
    //Consulta
    const [result] = await pool.query("SELECT * FROM tasks ORDER BY createdAt ASC")
    //Mostrando el resultado
    res.json(result)
}

const getTask = async (req, res) => {
    //Consulta
    const [result] = await pool.query("SELECT * FROM tasks WHERE id = ?", [
        req.params.id,
    ]);

    //Si no existe el resultado
    result.length == 0 ? res.status(404).json({ message: "Tarea no encontrada"}) : null

    //Mostrando el resultado
    res.json(result[0]);
};

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