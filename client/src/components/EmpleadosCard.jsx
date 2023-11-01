import PropTypes from "prop-types";
import { useEmpleado } from "../context/EmpleadoProvider.jsx";
import { useNavigate } from "react-router-dom";

function EmpleadosCard({ empleado }) {
  const { deleteEmpleado } = useEmpleado();
  const navigate = useNavigate();

  return (
    <div className="bg-yellow-200 rounded-md p-4" >
      <h2 className="text-2xl font-bold " >
        {empleado.nombre} {empleado.apellido}
      </h2>
      <p>N documento: {empleado.dni}</p>
      <p>{empleado.direccion}</p>
      <p>{empleado.telefono}</p>
      <p>{empleado.email}</p>
      <div className="flex gap-2 mt-4  ">
      <button className="bg-blue-600 px-2 py-1 text-white rounded-md font-medium "  onClick={( ) => navigate(`/editEmpleado/${empleado.empleadoid}`)} >Editar</button>
      <button className="bg-red-500 px-2 py-1 text-white rounded-md font-medium " onClick={() => deleteEmpleado(empleado.empleadoid)}>
        Eliminar
      </button>
      </div>
    </div>
  );
}

EmpleadosCard.propTypes = {
  empleado: PropTypes.shape({
    empleadoid: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    direccion: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default EmpleadosCard;
