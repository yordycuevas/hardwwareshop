import PropTypes from "prop-types";
import { useClientes } from "../context/ClienteProvider.jsx";
import {MagicMotion} from "react-magic-motion"
import { useNavigate } from "react-router-dom";

function ClientesCard({ cliente }) {
  const { deleteClientes } = useClientes();
  const navigate = useNavigate();

  const imagenUrl = "https://i.pinimg.com/564x/bc/fb/10/bcfb10a0c409974ccd882736385c37b9.jpg";

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
    <div className="bg-green-300 rounded-md p-4" >
    <img
          src={imagenUrl} 
          alt={`${cliente.nombre} ${cliente.apellido}`}
          className="mx-auto rounded-full border-4 border-white"
          style={{ width: "200px", height: "200px" }}
        />
      <h2 className="text-4xl font-bold text-center p-6" >
        {cliente.nombre} {cliente.apellido}
      </h2>
      <div className="text-left ">
        
      <p>{cliente.tipo_documento} {cliente.numero_documento}</p>
      <p>Direccion de contacto: {cliente.direccion}</p>
      <p>Numero de celular: {cliente.telefono}</p>
      <p>Correo de contacto: {cliente.email}</p>
      <p>{ciudades[cliente.id_ciudad]}</p> {/* Mostrar el nombre de la ciudad */}
      </div>

      <div className="flex gap-2 mt-6">
      <button className="bg-blue-600 px-2 py-1 text-white rounded-md font-medium "  onClick={( ) => navigate(`/editCliente/${cliente.id_cliente}`)} >Editar</button>
      <button className="bg-red-500 px-2 py-1 text-white rounded-md font-medium " onClick={() => deleteClientes(cliente.id_cliente)}>
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
