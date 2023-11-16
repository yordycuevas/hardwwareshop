import { Form, Formik } from "formik";
import { useProveedor } from "../context/ProveedorProvider";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

function CrearProveedor() {
  const { CrearProveedor, EditarProveedor, ActualizarProveedor } = useProveedor();
  const [proveedor, setProveedor] = useState({
    NIT_PROVEEDORES: "",
    NOMBRE: "",
    DIRECCION: "",
    CORREO: "",
    ID_CIUDAD: "",
    CONTACTO: ""
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadProveedor = async () => {
      if (params.NIT_PROVEEDORES) {
        const proveedor = await EditarProveedor(params.NIT_PROVEEDORES);
        setProveedor({
          NIT_PROVEEDORES: proveedor.data.NIT_PROVEEDORES,
          NOMBRE: proveedor.data.NOMBRE,
          DIRECCION: proveedor.data.DIRECCION,
          CORREO: proveedor.data.CORREO,
          ID_CIUDAD: proveedor.data.ID_CIUDAD,
          CONTACTO: proveedor.data.CONTACTO
        });
      }
    };
    loadProveedor();
  }, [params.NIT_PROVEEDORES, EditarProveedor]);

  return (
    <div>
      <Formik
        initialValues={proveedor}
        enableReinitialize={true}
        onSubmit={async (values) => {
          navigate("/proveedores");
          if (params.NIT_PROVEEDORES) {
            await ActualizarProveedor(params.NIT_PROVEEDORES, values);
          } else {
            await CrearProveedor(values);
          }

          setProveedor({
            NIT_PROVEEDORES: "",
            NOMBRE: "",
            DIRECCION: "",
            CORREO: "",
            ID_CIUDAD: "",
            CONTACTO: ""
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-yellow-300 max-w-md rounded-md p-3 mx-auto"
          >
            <h1 className="text-4xl font-bold u text-center">
              {params.NIT_PROVEEDORES ? "Editar proveedor" : "Crear proveedor"}
            </h1>
            <h2 className="  u text-center">
              {params.NIT_PROVEEDORES
                ? "Solo edita los campos necesarios"
                : "No olvides llenar todos los campos"}
            </h2>
            <label className="block p-2">Nit proveedor</label>
            <input
              type="int"
              name="NIT_PROVEEDORES"
              placeholder="escribre el NIT del proveedor"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.NIT_PROVEEDORES || ""}
            />
            <label className="block p-2">Nombre del proveedor</label>
            <input
              type="text"
              name="NOMBRE"
              placeholder="escribre tu nombres completos"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.NOMBRE || ""}
            />
          
            <label className="block p-2">Dirección principal</label>
            <input
              type="text"
              name="DIRECCION"
              className="text-sm p-2 py-1 rounded-md block w-full"
              placeholder="escribre tu direccion"
              onChange={handleChange}
              value={values.DIRECCION || ""}
            />
            <label className="block p-2">Correo</label>
            <input
              type="text"
              name="CORREO"
              className="text-sm p-2 py-1 rounded-md block w-full"
              placeholder="escribre tu correo electronico"
              onChange={handleChange}
              value={values.CORREO || ""}
            />
            <label className="block p-2">Ciudad</label>
            <select
              name="ID_CIUDAD"
              className="text-sm p-2 py-1 rounded-md block w-full"
              onChange={handleChange}
              value={values.ID_CIUDAD || ""}
            >
              <option value="" disabled hidden>
                Selecciona la ciudad
              </option>
              <option value="1">Sede Principal - Bogota</option>
              <option value="2">Sede Medellín</option>
              <option value="3">Sede Cali</option>
              <option value="4">Sede Barranquilla</option>
              <option value="5">Sede Cartagena</option>
              {/* Agrega más opciones según sea necesario */}
            </select>
            <label className="block p-2">Nombre del comercial</label>
            <input
              type="text"
              name="CONTACTO"
              className="text-sm p-2 py-1 rounded-md block w-full"
              placeholder="escribre el nombre del comercial"
              onChange={handleChange}
              value={values.CONTACTO || ""}
            />

            <button
              className=" bg-blue-600 px-2 py-2 text-white rounded-md font-medium w-full mt-4"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creando..." : "Guardar"}
            </button>

            {params.NIT_PROVEEDORES && (
              <Link
                to={`/editProveedor/${params.NIT_PROVEEDORES}`}
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

export default CrearProveedor;

