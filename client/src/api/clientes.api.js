import axios from "axios";

export const obtenerClientesRequest = async () => {
   const response = await axios.get("http://localhost:4000/clientes");
   return response
    
  //  console.log(response.data);
 };

export const CrearClientesRequest = async (data) => {
  await axios.post("http://localhost:4000/clientes", data);
};
