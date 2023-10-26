import axios from "axios";

export const obtenerClientesRequest = async () => {
  const response = await axios.get("http://localhost:4000/clientes");
  return response;
};

export const CrearClientesRequest = async (data) => {
  await axios.post("http://localhost:4000/clientes", data);
};

export const EliminarClientesRequest = async (id) => {
  await axios.delete(`http://localhost:4000/clientes/${id}`);
  return "Cliente eliminado";
};

export const EditarClienteRequest = async (id) => {
  const response = await axios.get(`http://localhost:4000/clientes/${id}`);
  return response;
};

export const ActualizarClienteRequest = async (id, newFields) => {
   await axios.put(`http://localhost:4000/clientes/${id}`, newFields)
}