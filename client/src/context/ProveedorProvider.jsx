import { useContext, useState } from "react";
import {
  obtenerProveedoresRequest,
  EliminarProveedorRequest,
  CrearProveedorRequest,
  EditarProveedorRequest,
  ActualizarProveedorRequest,
} from "../api/proveedores.api";
import { ProveedorContext } from "./ProveedorContex.jsx";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const useProveedor = () => {
  const context = useContext(ProveedorContext);
  if (!context) {
    throw new Error(
      "useProveedor debe estar dentro del proveedor ProveedorContextProvider"
    );
  }
  return context;
};

export const ProveedorContextProvider = ({ children }) => {
  const [proveedores, setProveedores] = useState([]);

  async function loadProveedores() {
    const response = await obtenerProveedoresRequest();
    setProveedores(response.data);
  }

  const deleteProveedor = async (NIT_PROVEEDORES) => {
    try {
      const response = await EliminarProveedorRequest(NIT_PROVEEDORES);
      setProveedores(
        proveedores.filter((proveedor) => proveedor.NIT_PROVEEDORES !== NIT_PROVEEDORES)
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const CrearProveedor = async (proveedor) => {
    try {
      const response = await CrearProveedorRequest(proveedor);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const EditarProveedor = async (NIT_PROVEEDORES) => {
    try {
      const response = await EditarProveedorRequest(NIT_PROVEEDORES);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const ActualizarProveedor = async (NIT_PROVEEDORES, newFields) => {
    try {
      await ActualizarProveedorRequest(NIT_PROVEEDORES, newFields);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProveedorContext.Provider
      value={{
        proveedores,
        loadProveedores,
        deleteProveedor,
        CrearProveedor,
        EditarProveedor,
        ActualizarProveedor,
      }}
    >
      {children}
    </ProveedorContext.Provider>
  );
};

ProveedorContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
