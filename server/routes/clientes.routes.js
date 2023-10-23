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

clientesRoutes.get("/clientes/:clienteid", getCliente);

clientesRoutes.post("/clientes", createCliente);

clientesRoutes.put("/clientes/:clienteid", updateCliente);

clientesRoutes.delete("/clientes/:clienteid", deleteCliente);

export default clientesRoutes;
