import { useEffect, useState } from "react";
import { obtenerClientesRequest } from "../api/clientes.api.js";
import ClientesCard from "../components/ClientesCard.jsx";

function ClientesPage() {

  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    async function loadClientes() {
      const response = await obtenerClientesRequest();
      setClientes(response.data);
    }

    loadClientes();
  }, []);

  return (
    <>
      <h1>Listado de clientes</h1>
      {clientes.map((cliente) =>
       <ClientesCard cliente={cliente} key={cliente.clienteid}/>)}
    </>
  );
}

export default ClientesPage;
