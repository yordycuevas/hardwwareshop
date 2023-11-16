import PropTypes from "prop-types";
import { useClientes } from "../context/ClienteProvider.jsx";
import {MagicMotion} from "react-magic-motion"
import { useNavigate } from "react-router-dom";

function ClientesCard({ cliente }) {
  const { deleteClientes } = useClientes();
  const navigate = useNavigate();

  const imagenUrl = "https://i.pinimg.com/564x/bc/fb/10/bcfb10a0c409974ccd882736385c37b9.jpg";

  const documento = {
    1: "Cedula de ciudadania",
    2: "Tarjeta de identidad",
    3: "Cedula de extranjeria",
    4: "Pasaporte",
    // Agrega más ciudades si es necesario
  };
  

  return (
    <MagicMotion>
    <div className="bg-green-300 rounded-md p-4" >
    <img
          src={imagenUrl} 
          alt={`${cliente.NOMBRE} ${cliente.APELLIDO}`}
          className="mx-auto rounded-full border-4 border-white"
          style={{ width: "200px", height: "200px" }}
        />
      <h2 className="text-4xl font-bold text-center p-6" >
        {cliente.NOMBRE} {cliente.APELLIDO}
      </h2>
      <div className="text-left ">
        
      <p>{documento[cliente.ID_DOCUMENTO]} {cliente.ID_CLIENTE}</p>
      <p>Direccion de contacto: {cliente.DIRECCION}</p>
      <p>Numero de celular: {cliente.TELEFONO}</p>
      <p>Correo de contacto: {cliente.CORREO}</p>
      </div>

      <div className="flex gap-2 mt-6">
      <button className="bg-blue-600 px-2 py-1 text-white rounded-md font-medium "  onClick={( ) => navigate(`/editCliente/${cliente.ID_CLIENTE}`)} >Editar</button>
      <button className="bg-red-500 px-2 py-1 text-white rounded-md font-medium " onClick={() => deleteClientes(cliente.ID_CLIENTE)}>
        Eliminar
      </button>
      </div>
    </div>
    </MagicMotion>
  );
}

ClientesCard.propTypes = {
  cliente: PropTypes.shape({
    ID_CLIENTE: PropTypes.string.isRequired,
    NOMBRE: PropTypes.string.isRequired,
    APELLIDO: PropTypes.string.isRequired,
    TELEFONO: PropTypes.string.isRequired,
    DIRECCION: PropTypes.string.isRequired,
    ID_DOCUMENTO: PropTypes.string.isRequired,
    CORREO: PropTypes.string.isRequired,
    FECHA_NACIMIENTO: PropTypes.string.isRequired,
    ID_GENERO: PropTypes.string.isRequired,

  }).isRequired,
};

export default ClientesCard;
