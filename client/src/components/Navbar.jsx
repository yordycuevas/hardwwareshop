import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className= "bg-teal-500 flex justify-between px-20 py-8" >
      <Link to="/clientes" className="text-4xl font-bold text-white tracking-tighter ">
      <h1 > Hardware Shop</h1>
      </Link>
      <ul className="flex gap-x-2">
        <li className="text-xl font-bold " >
          <Link to="/clientes" className="bg-teal-300 px-2 py-1 rounded-md "> Listado de clientes </Link>
        </li>
        <li className="text-xl font-bold">
          <Link to="/newCliente" className="bg-teal-300 px-2 py-1 rounded-md "> Crear Cliente </Link>
        </li>

        <li className="text-xl font-bold " >
          <Link to="/empleados" className="bg-yellow-300 px-2 py-1 rounded-md "> Listado de Empleados </Link>
        </li>
        <li className="text-xl font-bold">
          <Link to="/newEmpleado" className="bg-yellow-300 px-2 py-1 rounded-md "> Crear Empleados </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
