import { useContext, useState } from "react";
import {
  obtenerClientesRequest,
  EliminarClientesRequest,
  CrearClientesRequest,
  EditarClienteRequest,
  ActualizarClienteRequest,
} from "../api/clientes.api";
import { ClienteContext } from "./ClienteContext";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const useClientes = () => {
  const context = useContext(ClienteContext);
  if (!context) {
    throw new Error(
      "useClientes debe estar dentro del proveedor ClienteContextProvider"
    );
  }
  return context;
};

export const ClienteContextProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);

  async function loadClientes() {
    const response = await obtenerClientesRequest();
    setClientes(response.data);
  }

  const deleteClientes = async (ID_CLIENTE) => {
    try {
      const response = await EliminarClientesRequest(ID_CLIENTE);
      setClientes(
        clientes.filter((cliente) => cliente.ID_CLIENTE !== ID_CLIENTE)
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const CrearCliente = async (cliente) => {
    try {
      const response = await CrearClientesRequest(cliente);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const EditarCliente = async (ID_CLIENTE) => {
    try {
      const response = await EditarClienteRequest(ID_CLIENTE);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const ActualizarCliente = async (ID_CLIENTE, newFields) => {
    try {
      await ActualizarClienteRequest(ID_CLIENTE, newFields);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <ClienteContext.Provider
      value={{
        clientes,
        loadClientes,
        deleteClientes,
        CrearCliente,
        EditarCliente,
        ActualizarCliente,
    
      }}
    >
      {children}
    </ClienteContext.Provider>
  );
};

ClienteContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
