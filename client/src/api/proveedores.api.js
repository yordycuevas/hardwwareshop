import axios from "axios";

export const obtenerProveedoresRequest = async () => {
  const response = await axios.get("http://localhost:4000/proveedores");
  return response;
};

export const CrearProveedorRequest = async (data) => {
  await axios.post("http://localhost:4000/proveedores", data);
};

export const EliminarProveedorRequest = async (id) => {
  await axios.delete(`http://localhost:4000/proveedores/${id}`);
  return "Proveedor eliminado";
};

export const EditarProveedorRequest = async (id) => {
  const response = await axios.get(`http://localhost:4000/proveedores/${id}`);
  return response;
};

export const ActualizarProveedorRequest = async (id, newFields) => {
   await axios.put(`http://localhost:4000/proveedores/${id}`, newFields)
}