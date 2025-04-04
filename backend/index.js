import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import { db } from "./config/db.js";
import servicesRoutes from "./routes/servicesRoutes.js";

// Variables de entorno
dotenv.config();

//Configurar la app
const app = express();

// Conectar a BD
db();

// Definir una ruta
app.use("/api/services", servicesRoutes);

// Definir puerto
const PORT = process.env.PORT || 4000;

// Arrancar la app
app.listen(PORT, () => {
  console.log(
    colors.blue("El servidor se está ejecutando en el puerto:"),
    colors.red(PORT),
  );
});
