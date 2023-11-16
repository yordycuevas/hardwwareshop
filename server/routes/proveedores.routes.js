import { Router } from "express";
import {
  getProveedores,
  getProveedor,
  createProveedor,
  updateProveedor,
  deleteProveedor,
} from "../controllers/proveedores.controllers.js";

const proveedoresRoutes = Router();

proveedoresRoutes.get("/proveedores", getProveedores);

proveedoresRoutes.get("/proveedores/:NIT_PROVEEDORES", getProveedor);

proveedoresRoutes.post("/proveedores", createProveedor);

proveedoresRoutes.put("/proveedores/:NIT_PROVEEDORES", updateProveedor);

proveedoresRoutes.delete("/proveedores/:NIT_PROVEEDORES", deleteProveedor);

export default proveedoresRoutes;
