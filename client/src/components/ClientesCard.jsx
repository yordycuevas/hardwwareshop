import PropTypes from "prop-types";
import { useClientes } from "../context/ClienteProvider.jsx";
import { useNavigate } from "react-router-dom";

function ClientesCard({ cliente }) {
  const { deleteClientes } = useClientes();
  const navigate = useNavigate();

  return (
    <div>
      <h2>
        {cliente.nombre} {cliente.apellido}
      </h2>
      <p>{cliente.dni}</p>
      <p>{cliente.direccion}</p>
      <p>{cliente.telefono}</p>
      <p>{cliente.email}</p>
      <button onClick={( ) => navigate(`/edit/${cliente.clienteid}`)} >Editar</button>
      <button onClick={() => deleteClientes(cliente.clienteid)}>
        Eliminar
      </button>
    </div>
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
