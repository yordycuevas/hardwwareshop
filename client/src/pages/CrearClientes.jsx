import { Form, Formik } from "formik";
import { useClientes } from "../context/ClienteProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import Footer from "../components/Footer";

function CrearClientes() {
  const { CrearCliente, EditarCliente, ActualizarCliente } = useClientes();
  const [cliente, setCliente] = useState({
    ID_CLIENTE: "",
    NOMBRE: "",
    APELLIDO: "",
    TELEFONO: "",
    DIRECCION: "",
    ID_DOCUMENTO: "",
    CORREO: "",
    FECHA_NACIMIENTO: "",
    ID_GENERO: ""
  });
  const params = useParams();
  const navigate = useNavigate();

   // Función para formatear la fecha para el campo de entrada de fecha
   const formatDateForInput = (dateString) => {
    if (!dateString) return "";

    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  

  useEffect(() => {
    const loadCliente = async () => {
      if (params.ID_CLIENTE) {
        const cliente = await EditarCliente(params.ID_CLIENTE);
        setCliente({
          ID_CLIENTE: cliente.data.ID_CLIENTE,
          NOMBRE: cliente.data.NOMBRE,
          APELLIDO: cliente.data.APELLIDO,
          TELEFONO: cliente.data.TELEFONO,
          DIRECCION: cliente.data.DIRECCION,
          ID_DOCUMENTO: cliente.data.ID_DOCUMENTO,
          CORREO: cliente.data.CORREO,
          FECHA_NACIMIENTO: cliente.data.FECHA_NACIMIENTO,
          ID_GENERO: cliente.data.ID_GENERO
        });
        
      }
    };
    loadCliente();
  }, [params.ID_CLIENTE, EditarCliente]);

  return (
    <div>
      <Formik
        initialValues={cliente}
        enableReinitialize={true}
        onSubmit={async (values) => {
          navigate("/clientes");
          if (params.ID_CLIENTE) {
            await ActualizarCliente(params.ID_CLIENTE, values);
          } else {
            await CrearCliente(values);
          }

          setCliente({
            ID_CLIENTE: "",
            NOMBRE: "",
            APELLIDO: "",
            TELEFONO: "",
            DIRECCION: "",
            ID_DOCUMENTO: "",
            CORREO: "",
            FECHA_NACIMIENTO: "",
            ID_GENERO: ""
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
              {params.ID_CLIENTE ? "Editar Cliente" : "Crear Cliente"}
            </h1>
            <h2 className="text-center">
              {params.ID_CLIENTE
                ? "Solo edita los campos necesarios"
                : "No olvides llenar todos los campos"}
            </h2>
            <label className="block p-2">Documento del cliente</label>
            <input
              type="int"
              name="ID_CLIENTE"
              placeholder="escribre el numero de documento del cliente"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.ID_CLIENTE || ""}
            />
            <label className="block p-2">Tipo de documento</label>
            <select
              name="ID_DOCUMENTO"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.ID_DOCUMENTO || ""}
            >
              <option value="" disabled hidden>
                Selecciona tu tipo de documento
              </option>
              <option value="1">Cédula de Ciudadanía</option>
              <option value="2">Tarjeta de Identidad</option>
              <option value="3">Cédula de Extranjería</option>
              <option value="4">Pasaporte</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
            <label className="block p-2">Nombre</label>
            <input
              type="text"
              name="NOMBRE"
              placeholder="escribre tu nombre"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.NOMBRE || ""}
            />
            <label className="block p-2">Apellido</label>
            <input
              type="text"
              name="APELLIDO"
              placeholder="escribre tus apellidos"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.APELLIDO || ""}
            />
            <label className="block p-2">Telefono</label>
            <input
              type="number"
              name="TELEFONO"
              className="text-sm p-2 py-1 rounded-md block w-full"
              placeholder="escribre tu numero de celular"
              onChange={handleChange}
              value={values.TELEFONO || ""}
            />
            <label className="block p-2">Dirección</label>
            <input
              type="text"
              name="DIRECCION"
              className="text-sm p-2 py-1 rounded-md block w-full"
              placeholder="escribre tu direccion"
              onChange={handleChange}
              value={values.DIRECCION || ""}
            />
            <label className="block p-2">Email</label>
            <input
              type="text"
              name="CORREO"
              className="text-sm p-2 py-1 rounded-md block w-full"
              placeholder="prueba@prueba.com"
              onChange={handleChange}
              value={values.CORREO || ""}
            />
            
            <label className="block p-2">Fecha de nacimiento</label>
      <input
        type="date"
        name="FECHA_NACIMIENTO"
        className="text-sm p-2 py-1 rounded-md block w-full"
        onChange={(e) => {
          const selectedDate = e.target.value;
          const [year, month, day] = selectedDate.split("-");
          const formattedDate = `${year}-${month}-${day}`;
          handleChange({ target: { name: "FECHA_NACIMIENTO", value: formattedDate } });
        }}
        value={formatDateForInput(values.FECHA_NACIMIENTO) || ""}
      />

            <label className="block p-2">Genero</label>
            <select
              name="ID_GENERO"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.ID_GENERO || ""}
            >
              <option value="" disabled hidden>
                Selecciona su genero
              </option>
              <option value="1">Masculino</option>
              <option value="2">Femenino</option>
              <option value="3">No binario</option>
              <option value="4">Prefiero no decirlo</option>
             

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
