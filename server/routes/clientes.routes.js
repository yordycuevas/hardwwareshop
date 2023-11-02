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

clientesRoutes.get("/clientes/:id_cliente", getCliente);

clientesRoutes.post("/clientes", createCliente);

clientesRoutes.put("/clientes/:id_cliente", updateCliente);

clientesRoutes.delete("/clientes/:id_cliente", deleteCliente);

export default clientesRoutes;
