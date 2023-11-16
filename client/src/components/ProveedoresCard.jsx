import PropTypes from "prop-types";
import { useProveedor } from "../context/ProveedorProvider.jsx";
import { MagicMotion } from "react-magic-motion";
import { useNavigate } from "react-router-dom";

function ProveedoresCard({ proveedor }) {
  const { deleteProveedor } = useProveedor();
  const navigate = useNavigate();

  const imagenUrl = "https://i.pinimg.com/564x/c4/27/b9/c427b9a35897b4791c82e29dcc0b6484.jpg";


  const ciudades = {
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
          alt={`${proveedor.NOMBRE}`}
          className="mx-auto rounded-full border-4 border-white"
          style={{ width: "200px", height: "200px" }}
        />
        <h2 className="text-4xl font-bold text-center p-4">
          {proveedor.NOMBRE}
        </h2>
        <p>
          Nit: {proveedor.NIT_PROVEEDORES}
        </p>
        
        <p>Correo: {proveedor.CORREO}</p>
        <p>Dirección principal: {proveedor.DIRECCION}</p>
        <p>Persona de contacto: {proveedor.CONTACTO}</p>
        <p>{ciudades[proveedor.ID_CIUDAD]}</p>{" "}

        <div className="flex gap-2 mt-4  ">
          <button
            className="bg-blue-600 px-2 py-1 text-white rounded-md font-medium "
            onClick={() => navigate(`/editProveedor/${proveedor.NIT_PROVEEDORES}`)}
          >
            Editar
          </button>
          <button
            className="bg-red-500 px-2 py-1 text-white rounded-md font-medium "
            onClick={() => deleteProveedor(proveedor.NIT_PROVEEDORES)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </MagicMotion>
  );
}

ProveedoresCard.propTypes = {
  proveedor: PropTypes.shape({
    NIT_PROVEEDORES: PropTypes.number.isRequired,
    NOMBRE: PropTypes.string.isRequired,
    DIRECCION: PropTypes.string.isRequired,
    CORREO: PropTypes.string.isRequired,
    ID_CIUDAD: PropTypes.number.isRequired,
    CONTACTO: PropTypes.number.isRequired
  }).isRequired,
};

export default ProveedoresCard;
