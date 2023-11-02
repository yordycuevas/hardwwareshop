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

empleadosRoutes.get("/empleados/:id_empleado", getEmpleado);

empleadosRoutes.post("/empleados", createEmpleado);

empleadosRoutes.put("/empleados/:id_empleado", updateEmpleado);

empleadosRoutes.delete("/empleados/:id_empleado", deleteEmpleado);

export default empleadosRoutes;
