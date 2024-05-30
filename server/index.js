import express from 'express';
import cors from 'cors';
import { PORT } from './config.js';
import indexRoutes from './routes/index.routes.js';
import taskRoutes from './routes/task.routes.js';

const app = express();

//Habilitar cors para permitir que se conecte el servidor del client
app.use(cors());

//Procesar los datos del cliente
app.use(express.json());

app.use(indexRoutes)
app.use(taskRoutes)

app.listen(PORT);
console.log(`El servidor esta funcionando en el puerto: ${PORT}`)