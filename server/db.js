import mysql from 'mysql2/promise';

//Configurando la base de datos
export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'Pcv1433x$',
    database: 'taskdb_crud'
});
