import { useEffect} from "react";
import EmpleadosCard from "../components/EmpleadosCard.jsx";
import { useEmpleado } from "../context/EmpleadoProvider.jsx";

function EmpleadosPage() {
  const { empleados, loadEmpleados } = useEmpleado();

  useEffect(() => {
    loadEmpleados();
  }, [loadEmpleados]);

  function renderEmpleados() {
    if (empleados.length === 0) {
      return <p className="text-5xl font-bold bg-yellow-500 font text-center p-8  ">No hay empleados agregados</p>;
    }

    return empleados.map((empleado) => (
      <EmpleadosCard empleado={empleado} key={empleado.empleadoid} />
    ));
  }

  return (
    <>
      <h1 className="text-5xl text-white font-bold text-center p-8 tracking-wider" >- Listado de empleados -</h1>
      <div className="grid grid-cols-3 gap-4">
      {renderEmpleados()}

      </div>
    </>
  );
}

export default EmpleadosPage;
