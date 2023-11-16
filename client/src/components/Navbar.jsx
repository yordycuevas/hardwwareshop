import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className= "bg-teal-500 flex justify-between px-20 py-8" >
      <Link to="/clientes" className="text-6xl font-bold text-white tracking-tighter ">
      <h1 >Ferreteria</h1>
      </Link>
      <ul className="flex gap-x-2">
        <li className="text-xl font-bold " >
          <Link to="/clientes" className="bg-teal-300 px-4 py-2 rounded-md "> Listado de clientes </Link>
        </li>
        <li className="text-xl font-bold">
          <Link to="/newCliente" className="bg-teal-300 px-4 py-2 rounded-md "> Crear Cliente </Link>
        </li>

        <li className="text-xl font-bold " >
          <Link to="/proveedores" className="bg-yellow-300 px-4 py-2 rounded-md "> Listado de Proveedores </Link>
        </li>
        <li className="text-xl font-bold">
          <Link to="/newProveedor" className="bg-yellow-300 px-4 py-2 rounded-md "> Crear Proveedores </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
