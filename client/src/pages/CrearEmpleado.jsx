import { Form, Formik } from "formik";
import { useEmpleado } from "../context/EmpleadoProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function CrearEmpleado() {
  const { CrearEmpleado, EditarEmpleado, ActualizarEmpleado } = useEmpleado();
  const [empleado, setEmpleado] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    direccion: "",
    telefono: "",
    email: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmpleado = async () => {
      if (params.empleadoid) {
        const empleado = await EditarEmpleado(params.empleadoid);
        setEmpleado({
          nombre: empleado.data.nombre,
          apellido: empleado.data.apellido,
          dni: empleado.data.dni,
          direccion: empleado.data.direccion,
          telefono: empleado.data.telefono,
          email: empleado.data.email,
        });
      }
    };
    loadEmpleado();
  }, [params.empleadoid, EditarEmpleado]);

  return (
    <div>
      
      <Formik
        initialValues={empleado}
        enableReinitialize={true}
        onSubmit={async (values) => {
          navigate("/empleados");
          if (params.empleadoid) {
            await ActualizarEmpleado(params.empleadoid, values);
          } else {
            await CrearEmpleado(values);
          }

          setEmpleado({
            nombre: "",
            apellido: "",
            dni: "",
            direccion: "",
            telefono: "",
            email: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit} className="bg-yellow-300 max-w-md rounded-md p-4" >
          <h1 className="text-4xl font-bold u text-center">{params.empleadoid ? "Editar empleado" : "Crear empleado"}</h1>
            <label className="block p-2" >Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="escribre tu nombre"
              className="p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.nombre || ""}
            />
            <label className="block p-2">Apellido</label>
            <input
              type="text"
              name="apellido"
              placeholder="escribre tus apellidos"
              className="p-2 py-1 rounded-md block w-full"

              onChange={handleChange}
              value={values.apellido || ""}
            />
            <label className="block p-2">N Documento</label>
            <input
              type="number"
              name="dni"
              className="p-2 py-1 rounded-md block w-full"

              onChange={handleChange}
              value={values.dni || ""}
            />
            <label className="block p-2">Direccion</label>
            <input
              type="text"
              name="direccion"
              className="p-2 py-1 rounded-md block w-full"

              onChange={handleChange}
              value={values.direccion || ""}
            />
            <label className="block p-2">Telefono</label>
            <input
              type="number"
              name="telefono"
              className="p-2 py-1 rounded-md block w-full"

              onChange={handleChange}
              value={values.telefono || ""}
            />
            <label className="block p-2">email</label>
            <input
              type="text"
              name="email"
              className="p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.email || ""}
            />

            <button className=" bg-blue-600 px-2 py-2 text-white rounded-md font-medium w-full mt-4" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creando..." : "Guardar"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CrearEmpleado;
