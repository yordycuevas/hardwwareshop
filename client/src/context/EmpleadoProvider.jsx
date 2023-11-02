import { useContext, useState } from "react";
import {
  obtenerEmpleadosRequest,
  EliminarEmpleadoRequest,
  CrearEmpleadoRequest,
  EditarEmpleadoRequest,
  ActualizarEmpleadoRequest,
} from "../api/empleados.api";
import { EmpleadoContext } from "./EmpleadoContex.jsx";
import PropTypes from "prop-types";

// eslint-disable-next-line react-refresh/only-export-components
export const useEmpleado = () => {
  const context = useContext(EmpleadoContext);
  if (!context) {
    throw new Error(
      "useEmpleado debe estar dentro del proveedor EmpleadoContextProvider"
    );
  }
  return context;
};

export const EmpleadoContextProvider = ({ children }) => {
  const [empleados, setEmpleados] = useState([]);

  async function loadEmpleados() {
    const response = await obtenerEmpleadosRequest();
    setEmpleados(response.data);
  }

  const deleteEmpleado = async (id_empleado) => {
    try {
      const response = await EliminarEmpleadoRequest(id_empleado);
      setEmpleados(
        empleados.filter((empleado) => empleado.id_empleado !== id_empleado)
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const CrearEmpleado = async (empleado) => {
    try {
      const response = await CrearEmpleadoRequest(empleado);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const EditarEmpleado = async (id_empleado) => {
    try {
      const response = await EditarEmpleadoRequest(id_empleado);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const ActualizarEmpleado = async (id_empleado, newFields) => {
    try {
      await ActualizarEmpleadoRequest(id_empleado, newFields);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EmpleadoContext.Provider
      value={{
        empleados,
        loadEmpleados,
        deleteEmpleado,
        CrearEmpleado,
        EditarEmpleado,
        ActualizarEmpleado,
      }}
    >
      {children}
    </EmpleadoContext.Provider>
  );
};

EmpleadoContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
