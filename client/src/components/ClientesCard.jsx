import PropTypes from "prop-types";
import { useClientes } from "../context/ClienteProvider.jsx";
import { MagicMotion } from "react-magic-motion";
import { useNavigate } from "react-router-dom";

function ClientesCard({ cliente }) {
  const { deleteClientes } = useClientes();
  const navigate = useNavigate();

  const ciudades = {
    1: "Bogotá",
    2: "Medellín",
    3: "Cali",
    4: "Barranquilla",
    5: "Cartagena",
    6: "Bucaramanga",
    7: "Pereira",
    8: "Santa Marta",
    9: "Villavicencio",
    10: "Cúcuta",
    11: "Ibagué",
    12: "Manizales",
    13: "Neiva",
    14: "Pasto",
    15: "Armenia",
    16: "Popayán",
    17: "Tunja",
    18: "Riohacha",
    19: "Montería",
    20: "Valledupar",
    // Agrega más ciudades si es necesario
  };

  return (
    <MagicMotion>
      <div className="bg-green-300 rounded-md p-4">
        <h2 className="text-2xl font-bold ">
          {cliente.nombre} {cliente.apellido}
        </h2>
        <p>
          {cliente.tipo_documento} {cliente.numero_documento}
        </p>
        <p>{cliente.direccion}</p>
        <p>{cliente.telefono}</p>
        <p>{cliente.email}</p>
        <p>{ciudades[cliente.id_ciudad]}</p>{" "}
        {/* Mostrar el nombre de la ciudad */}
        <div className="flex gap-2 mt-4  ">
          <button
            className="bg-blue-600 px-2 py-1 text-white rounded-md font-medium "
            onClick={() => navigate(`/editCliente/${cliente.id_cliente}`)}
          >
            Editar
          </button>
          <button
            className="bg-red-500 px-2 py-1 text-white rounded-md font-medium "
            onClick={() => deleteClientes(cliente.id_cliente)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </MagicMotion>
  );
}

ClientesCard.propTypes = {
  cliente: PropTypes.shape({
    id_cliente: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    tipo_documento: PropTypes.string.isRequired,
    numero_documento: PropTypes.string.isRequired,
    direccion: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id_ciudad: PropTypes.number.isRequired,
  }).isRequired,
};

export default ClientesCard;
