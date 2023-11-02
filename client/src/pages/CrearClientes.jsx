import { Form, Formik } from "formik";
import { useClientes } from "../context/ClienteProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import Footer from "../components/Footer";

function CrearClientes() {
  const { CrearCliente, EditarCliente, ActualizarCliente } = useClientes();
  const [cliente, setCliente] = useState({
    nombre: "",
    apellido: "",
    tipo_documento: "",
    numero_documento: "",
    direccion: "",
    telefono: "",
    email: "",
    id_ciudad: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCliente = async () => {
      if (params.id_cliente) {
        const cliente = await EditarCliente(params.id_cliente);
        setCliente({
          nombre: cliente.data.nombre,
          apellido: cliente.data.apellido,
          tipo_documento: cliente.data.tipo_documento,
          numero_documento: cliente.data.numero_documento,
          direccion: cliente.data.direccion,
          telefono: cliente.data.telefono,
          email: cliente.data.email,
          id_ciudad: cliente.data.id_ciudad,
        });
      }
    };
    loadCliente();
  }, [params.id_cliente, EditarCliente]);

  return (
    <div>
      <Formik
        initialValues={cliente}
        enableReinitialize={true}
        onSubmit={async (values) => {
          navigate("/clientes");
          if (params.id_cliente) {
            await ActualizarCliente(params.id_cliente, values);
          } else {
            await CrearCliente(values);
          }

          setCliente({
            nombre: "",
            apellido: "",
            tipo_documento: "",
            numero_documento: "",
            direccion: "",
            telefono: "",
            email: "",
            id_ciudad: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <div className=" " >

          <Form
            onSubmit={handleSubmit}
            className="bg-yellow-300 max-w-md rounded-md p-12  mx-auto"
          >
            <h1 className="text-4xl font-bold u text-center">
              {params.id_cliente ? "Editar Cliente" : "Crear Cliente"}
            </h1>
            <h2 className="text-center">
              {params.id_cliente
                ? "Solo edita los campos necesarios"
                : "No olvides llenar todos los campos"}
            </h2>

            <label className="block p-2">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="escribre tu nombre"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.nombre || ""}
            />
            <label className="block p-2">Apellido</label>
            <input
              type="text"
              name="apellido"
              placeholder="escribre tus apellidos"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.apellido || ""}
            />
            <label className="block p-2">Tipo de documento</label>
            <select
              name="tipo_documento"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.tipo_documento || ""}
            >
              <option value="" disabled hidden>
                Selecciona tu tipo de documento
              </option>
              <option value="CC">Cédula de Ciudadanía</option>
              <option value="TI">Tarjeta de Identidad</option>
              <option value="CE">Cédula de Extranjería</option>
              <option value="PAS">Pasaporte</option>
              {/* Agrega más opciones según sea necesario */}
            </select>

            <label className="block p-2">Numero de documento</label>
            <input
              type="text"
              name="numero_documento"
              className="text-sm p-2 py-1 rounded-md block w-full"
              placeholder="escribre tu numero de documento"
              onChange={handleChange}
              value={values.numero_documento || ""}
            />
            <label className="block p-2">Dirección</label>
            <input
              type="text"
              name="direccion"
              className="text-sm p-2 py-1 rounded-md block w-full"
              placeholder="escribre tu direccion"
              onChange={handleChange}
              value={values.direccion || ""}
            />

            <label className="block p-2">Telefono</label>
            <input
              type="number"
              name="telefono"
              className="text-sm p-2 py-1 rounded-md block w-full"
              placeholder="escribre tu numero de celular"
              onChange={handleChange}
              value={values.telefono || ""}
            />
            <label className="block p-2">email</label>
            <input
              type="text"
              name="email"
              className="text-sm p-2 py-1 rounded-md block w-full"
              placeholder="prueba@prueba.com"
              onChange={handleChange}
              value={values.email || ""}
            />

            <label className="block p-2">Ciudades</label>
            <select
              name="id_ciudad"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.id_ciudad || ""}
            >
              <option value="" disabled hidden>
                Selecciona la ciudad
              </option>
              <option value="1">Bogotá</option>
              <option value="2">Medellín</option>
              <option value="3">Cali</option>
              <option value="4">Barranquilla</option>
              <option value="5">Cartagena</option>
              <option value="6">Bucaramanga</option>
              <option value="7">Pereira</option>
              <option value="8">Santa Marta</option>
              <option value="9">Villavicencio</option>
              <option value="10">Cúcuta</option>
              <option value="11">Ibagué</option>
              <option value="12">Manizales</option>
              <option value="13">Neiva</option>
              <option value="14">Pasto</option>
              <option value="15">Armenia</option>
              <option value="16">Popayán</option>
              <option value="17">Tunja</option>
              <option value="18">Riohacha</option>
              <option value="19">Montería</option>
              <option value="20">Valledupar</option>

              {/* Agrega más opciones según sea necesario */}
            </select>

            <button
              className=" bg-blue-600 px-2 py-2 text-white rounded-md font-medium w-full mt-4"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creando..." : "Guardar"}
            </button>
          </Form>
          </div>
        )}
      </Formik>
      {/* <Footer /> */}
    </div>
  );
}

export default CrearClientes;
