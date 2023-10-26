import axios from "axios";

export const obtenerEmpleadosRequest = async () => {
  const response = await axios.get("http://localhost:4000/empleados");
  return response;
};

export const CrearEmpleadoRequest = async (data) => {
  await axios.post("http://localhost:4000/empleados", data);
};

export const EliminarEmpleadoRequest = async (id) => {
  await axios.delete(`http://localhost:4000/empleados/${id}`);
  return "Empleado eliminado";
};

export const EditarEmpleadoRequest = async (id) => {
  const response = await axios.get(`http://localhost:4000/empleados/${id}`);
  return response;
};

export const ActualizarEmpleadoRequest = async (id, newFields) => {
   await axios.put(`http://localhost:4000/empleados/${id}`, newFields)
}