import { useEffect} from "react";
import ProveedoresCard from "../components/ProveedoresCard.jsx";
import { useProveedor } from "../context/ProveedorProvider.jsx";

function ProveedoresPage() {
  const { proveedores, loadProveedores } = useProveedor();

  useEffect(() => {
    loadProveedores();
  }, [loadProveedores]);

  function renderProveedores() {
    if (proveedores.length === 0) {
      return <p className="text-5xl font-bold bg-yellow-500 font text-center p-8  ">No hay proveedores agregados</p>;
    }

    return proveedores.map((proveedor) => (
      <ProveedoresCard proveedor={proveedor} key={proveedor.NIT_PROVEEDORES} />
    ));
  }

  return (
    <>
      <h1 className="text-5xl text-white font-bold text-center p-8 tracking-wider" >- Listado de proveedores -</h1>
      <div className="grid grid-cols-3 gap-4">
      {renderProveedores()}

      </div>
    </>
  );
}

export default ProveedoresPage;
