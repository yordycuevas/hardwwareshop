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
        onSubmit={async (values) => {
          console.log(values);
          try {
            const response = await CrearClientesRequest(values);
            console.log(response);
          } catch (error) {
            console.log(error);
          }
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="escribre tu nombre"
              onChange={handleChange}
            />
            <label>Apellido</label>
            <input
              type="text"
              name="apellido"
              placeholder="escribre tus apellidos"
              onChange={handleChange}
            />
            <label>DNI</label>
            <input type="number" name="dni" onChange={handleChange} />
            <label>Direccion</label>
            <input type="text" name="direccion" onChange={handleChange} />
            <label>Telefono</label>
            <input type="number" name="telefono" onChange={handleChange} />
            <label>email</label>
            <input type="text" name="email" onChange={handleChange} />

            <button type="submit">Crear Cliente</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CrearClientes;
