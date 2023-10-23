import axios from 'axios';

export const CrearClientesRequest = async (data) => {
   await axios.post('http://localhost:4000/clientes', data);
}