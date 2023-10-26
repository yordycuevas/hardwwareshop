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
      return <p className="text-5xl font-bold bg-yellow-500 font text-center p-8  ">No hay clientes agregados</p>;
    }

    return clientes.map((cliente) => (
      <ClientesCard cliente={cliente} key={cliente.clienteid} />
    ));
  }

  return (
    <>
      <h1 className="text-5xl text-white font-bold text-center p-8 tracking-wider" >- Listado de clientes -</h1>
      <div className="grid grid-cols-3 gap-4">
      {renderClientes()}

      </div>
    </>
  );
}

export default ClientesPage;
