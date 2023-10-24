import { useEffect} from "react";
import ClientesCard from "../components/ClientesCard.jsx";
import { useClientes } from "../context/ClienteProvider.jsx";

function ClientesPage() {
  const { clientes, loadClientes } = useClientes();

  useEffect(() => {
    loadClientes();
  }, [loadClientes]);

  function renderClientes() {
    if (clientes.length === 0) {
      return <p>No hay clientes agregados</p>;
    }

    return clientes.map((cliente) => (
      <ClientesCard cliente={cliente} key={cliente.clienteid} />
    ));
  }

  return (
    <>
      <h1>Listado de clientes</h1>
      {renderClientes()}
    </>
  );
}

export default ClientesPage;
