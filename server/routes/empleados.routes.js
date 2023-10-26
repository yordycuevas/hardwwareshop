import { Router } from "express";
import {
  getEmpleados,
  getEmpleado,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado,
} from "../controllers/empleados.controllers.js";

const empleadosRoutes = Router();

empleadosRoutes.get("/empleados", getEmpleados);

empleadosRoutes.get("/empleados/:empleadoid", getEmpleado);

empleadosRoutes.post("/empleados", createEmpleado);

empleadosRoutes.put("/empleados/:empleadoid", updateEmpleado);

empleadosRoutes.delete("/empleados/:empleadoid", deleteEmpleado);

export default empleadosRoutes;
