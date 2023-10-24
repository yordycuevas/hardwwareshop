import { Form, Formik } from "formik";
import { useClientes } from "../context/ClienteProvider";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

function CrearClientes() {
  const { CrearCliente, EditarCliente } = useClientes();
  const params = useParams();
  


  useEffect(() => {
    const loadCliente = async () => {
      if (params.clienteid) {
        const cliente = await EditarCliente(params.clienteid);
        console.log(cliente);
      }
    };
    loadCliente();
  }, [EditarCliente, params.clienteid]);

  return (
    <div>

      <h1>{
        params.clienteid ? "Editar Cliente" : "Crear Cliente"
      }</h1>
      <Formik
        initialValues={{
          nombre: "",
          apellido: "",
          dni: "",
          direccion: "",
          telefono: "",
          email: "",
        }}
        onSubmit={async (values, actions) => {
          console.log(values);
          CrearCliente(values);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="escribre tu nombre"
              onChange={handleChange}
              value={values.nombre}
            />
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              placeholder="escribre tus apellidos"
              onChange={handleChange}
              value={values.apellido}
            />
            <label>DNI</label>
            <input
              type="number"
              name="dni"
              onChange={handleChange}
              value={values.dni}
            />
            <label>Direccion</label>
            <input
              type="text"
              name="direccion"
              onChange={handleChange}
              value={values.direccion}
            />
            <label>Telefono</label>
            <input
              type="number"
              name="telefono"
              onChange={handleChange}
              value={values.telefono}
            />
            <label>email</label>
            <input
              type="text"
              name="email"
              onChange={handleChange}
              value={values.email}
            />

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Creando..." : "Crear cliente"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CrearClientes;
