import PropTypes from "prop-types";
import { useEmpleado } from "../context/EmpleadoProvider.jsx";
import { MagicMotion } from "react-magic-motion";
import { useNavigate } from "react-router-dom";

function formatDateToSpanish(date) {
  // Convierte la fecha al formato "día, mes año"
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(date).toLocaleDateString("es-ES", options);
}

function EmpleadosCard({ empleado }) {
  const { deleteEmpleado } = useEmpleado();
  const navigate = useNavigate();

  const imagenUrl = "https://i.pinimg.com/564x/c4/27/b9/c427b9a35897b4791c82e29dcc0b6484.jpg";


  const sucursales = {
    1: "Sede principal - Bogotá",
    2: "Sede Medellín",
    3: "Sede Cali",
    4: "Sede Barranquilla",
    5: "Sede Cartagena",
  }

  return (
    
    <MagicMotion>
      <div className="bg-yellow-200 rounded-md p-4">
      <img
          src={imagenUrl} 
          alt={`${empleado.nombre} ${empleado.apellido}`}
          className="mx-auto rounded-full border-4 border-white"
          style={{ width: "200px", height: "200px" }}
        />
        <h2 className="text-4xl font-bold text-center p-4">
          {empleado.nombre} {empleado.apellido}
        </h2>
        <p>
          {empleado.tipo_documento} {empleado.numero_documento}
        </p>
        
        <p>Fecha de nacimiento: {formatDateToSpanish(empleado.fecha_nacimiento)}</p>
        <p>Tipo de contrato: {empleado.tipo_contrato}</p>
        <p>Dirección de residencia: {empleado.direccion}</p>
        <p>Numero Celular:{empleado.telefono}</p>
        <p>{sucursales[empleado.id_sucursal]}</p>{" "}

        <div className="flex gap-2 mt-4  ">
          <button
            className="bg-blue-600 px-2 py-1 text-white rounded-md font-medium "
            onClick={() => navigate(`/editEmpleado/${empleado.id_empleado}`)}
          >
            Editar
          </button>
          <button
            className="bg-red-500 px-2 py-1 text-white rounded-md font-medium "
            onClick={() => deleteEmpleado(empleado.id_empleado)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </MagicMotion>
  );
}

EmpleadosCard.propTypes = {
  empleado: PropTypes.shape({
    id_empleado: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    tipo_documento: PropTypes.string.isRequired,
    numero_documento: PropTypes.string.isRequired,
    fecha_nacimiento: PropTypes.string.isRequired,
    tipo_contrato: PropTypes.string.isRequired,
    direccion: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    id_sucursal: PropTypes.number.isRequired,
  }).isRequired,
};

export default EmpleadosCard;
