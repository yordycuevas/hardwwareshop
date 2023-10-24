import { Form, Formik } from "formik";
import { CrearClientesRequest } from "../api/clientes.api.js";

function CrearClientes() {
  return (
    <div>
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
          try {
            const response = await CrearClientesRequest(values);
            console.log(response);
            actions.resetForm();
          } catch (error) {
            console.log(error);
          }
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

            <button type="submit" disabled={isSubmitting}>{isSubmitting ? "Creando..." : "Crear cliente"}</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CrearClientes;
