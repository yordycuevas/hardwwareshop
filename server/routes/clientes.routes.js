import { Router } from "express";
import {
  getClientes,
  getCliente,
  createCliente,
  updateCliente,
  deleteCliente,
} from "../controllers/clientes.controllers.js";

const clientesRoutes = Router();

clientesRoutes.get("/clientes", getClientes);

clientesRoutes.get("/clientes/:ID_CLIENTE", getCliente);

clientesRoutes.post("/clientes", createCliente);

clientesRoutes.put("/clientes/:ID_CLIENTE", updateCliente);

clientesRoutes.delete("/clientes/:ID_CLIENTE", deleteCliente);

export default clientesRoutes;
