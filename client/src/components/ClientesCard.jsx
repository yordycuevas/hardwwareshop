import PropTypes from "prop-types";
import { useClientes } from "../context/ClienteProvider.jsx";
import {MagicMotion} from "react-magic-motion"
import { useNavigate } from "react-router-dom";

function ClientesCard({ cliente }) {
  const { deleteClientes } = useClientes();
  const navigate = useNavigate();

  return (
    <MagicMotion>
    <div className="bg-green-300 rounded-md p-4" >
      <h2 className="text-2xl font-bold " >
        {cliente.nombre} {cliente.apellido}
      </h2>
      <p>N documento: {cliente.dni}</p>
      <p>{cliente.direccion}</p>
      <p>{cliente.telefono}</p>
      <p>{cliente.email}</p>
      <div className="flex gap-2 mt-4  ">
      <button className="bg-blue-600 px-2 py-1 text-white rounded-md font-medium "  onClick={( ) => navigate(`/editCliente/${cliente.clienteid}`)} >Editar</button>
      <button className="bg-red-500 px-2 py-1 text-white rounded-md font-medium " onClick={() => deleteClientes(cliente.clienteid)}>
        Eliminar
      </button>
      </div>
    </div>
    </MagicMotion>
  );
}

ClientesCard.propTypes = {
  cliente: PropTypes.shape({
    clienteid: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string.isRequired,
    dni: PropTypes.string.isRequired,
    direccion: PropTypes.string.isRequired,
    telefono: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default ClientesCard;
