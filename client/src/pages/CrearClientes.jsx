import { Form, Formik } from "formik";
import { useClientes } from "../context/ClienteProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function CrearClientes() {
  const { CrearCliente, EditarCliente, ActualizarCliente } = useClientes();
  const [cliente, setCliente] = useState({
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
    const loadCliente = async () => {
      if (params.clienteid) {
        const cliente = await EditarCliente(params.clienteid);
        setCliente({
          nombre: cliente.data.nombre,
          apellido: cliente.data.apellido,
          dni: cliente.data.dni,
          direccion: cliente.data.direccion,
          telefono: cliente.data.telefono,
          email: cliente.data.email,
        });
      }
    };
    loadCliente();
  }, [params.clienteid, EditarCliente]);

  return (
    <div>
      
      <Formik
        initialValues={cliente}
        enableReinitialize={true}
        onSubmit={async (values) => {
          navigate("/");
          if (params.clienteid) {
            await ActualizarCliente(params.clienteid, values);
          } else {
            await CrearCliente(values);
          }

          setCliente({
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
          <Form onSubmit={handleSubmit} className="bg-yellow-300 max-w-md rounded-md p-4 mt-12" >
          <h1 className=" text-4xl font-bold u text-center">{params.clienteid ? "Editar Cliente" : "Crear Cliente"}</h1>
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

export default CrearClientes;
