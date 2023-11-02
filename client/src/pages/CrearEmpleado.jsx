import { Form, Formik } from "formik";
import { useEmpleado } from "../context/EmpleadoProvider";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CrearEmpleado() {
  const { CrearEmpleado, EditarEmpleado, ActualizarEmpleado } = useEmpleado();
  const [empleado, setEmpleado] = useState({
    nombre: "",
    apellido: "",
    tipo_documento: "",
    numero_documento: "",
    fecha_nacimiento: "",
    tipo_contrato: "",
    direccion: "",
    telefono: "",
    id_sucursal: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadEmpleado = async () => {
      if (params.id_empleado) {
        const empleado = await EditarEmpleado(params.id_empleado);
        setEmpleado({
          nombre: empleado.data.nombre,
          apellido: empleado.data.apellido,
          tipo_documento: empleado.data.tipo_documento,
          numero_documento: empleado.data.numero_documento,
          fecha_nacimiento: empleado.data.fecha_nacimiento,
          tipo_contrato: empleado.data.tipo_contrato,
          direccion: empleado.data.direccion,
          telefono: empleado.data.telefono,
          id_sucursal: empleado.data.id_sucursal,
        });
      }
    };
    loadEmpleado();
  }, [params.id_empleado, EditarEmpleado]);

  return (
    <div>
      <Formik
        initialValues={empleado}
        enableReinitialize={true}
        onSubmit={async (values) => {
          navigate("/empleados");
          if (params.id_empleado) {
            await ActualizarEmpleado(params.id_empleado, values);
          } else {
            await CrearEmpleado(values);
          }

          setEmpleado({
            nombre: "",
            apellido: "",
            tipo_documento: "",
            numero_documento: "",
            fecha_nacimiento: "",
            tipo_contrato: "",
            direccion: "",
            telefono: "",
            id_sucursal: ""
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-yellow-300 max-w-md rounded-md p-3 mx-auto"
          >
            <h1 className="text-4xl font-bold u text-center">
              {params.id_empleado ? "Editar empleado" : "Crear empleado"}
            </h1>
            <h2 className="  u text-center">
              {params.id_empleado
                ? "Solo edita los campos necesarios"
                : "No olvides llenar todos los campos"}
            </h2>
            <label className="block p-2">Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="escribre tu nombres completos"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.nombre || ""}
            />
            <label className="block p-2">Apellido</label>
            <input
              type="text"
              name="apellido"
              placeholder="escribre tus apellidos completos"
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
            <label className="block p-2">Fecha de nacimiento</label>
            <input
              type="date"
              name="fecha_nacimiento"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.fecha_nacimiento || ""}
              // Agrega un evento onFocus para formatear la fecha al obtener el foco
              onFocus={(e) => {
                if (values.fecha_nacimiento) {
                  const [year, month, day] = values.fecha_nacimiento.split("-");
                  const formattedDate = `${year}-${month.padStart(
                    2,
                    "0"
                  )}-${day.padStart(2, "0")}`;
                  e.target.value = formattedDate;
                }
              }}
              // Agrega un evento onBlur para volver a convertir la fecha al perder el foco
              onBlur={(e) => {
                if (values.fecha_nacimiento) {
                  const [year, month, day] = values.fecha_nacimiento.split("-");
                  const formattedDate = `${year}-${month}-${day}`;
                  e.target.value = formattedDate;
                }
              }}
            />
            <label className="block p-2">Tipo de contrato</label>
            <select
              name="tipo_contrato"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.tipo_contrato || ""}
            >
              <option value="" disabled hidden>
                Selecciona tu tipo de contrato
              </option>
              <option value="TF">Termino Fijo</option>
              <option value="TI">Termino indefinido</option>
              <option value="PS">Prestación de servicios</option>
              <option value="PRACTICAS">Practicante</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
            <label className="block p-2">Telefono</label>
            <input
              type="number"
              name="telefono"
              className="text-sm p-2 py-1 rounded-md block w-full"
              placeholder="escribre tu numero de celular"
              onChange={handleChange}
              value={values.telefono || ""}
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
            <label className="block p-2">Sucursal</label>
            <select
              name="id_sucursal"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.id_sucursal || ""}
            >
              <option value="" disabled hidden>
                Selecciona la Sucursal a la que pertences
              </option>
              <option value="1">Sede Principal - Bogota</option>
              <option value="2">Sede Medellín</option>
              <option value="3">Sede Cali</option>
              <option value="4">Sede Barranquilla</option>
              <option value="5">Sede Cartagena</option>
              {/* Agrega más opciones según sea necesario */}
            </select>

            <button
              className=" bg-blue-600 px-2 py-2 text-white rounded-md font-medium w-full mt-4"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creando..." : "Guardar"}
            </button>

            {params.id_empleado && (
              <Link
                to={`/editEmpleado/${params.id_empleado}`}
                className="mt-4 block text-center"
              >
                
              </Link>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CrearEmpleado;

