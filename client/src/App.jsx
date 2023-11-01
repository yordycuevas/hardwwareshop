import { Route, Routes } from "react-router-dom";
import ClientesPage from "./pages/ClientesPage";
import CrearClientes from "./pages/CrearClientes";
import EmpleadosPage from "./pages/EmpleadosPage";
import CrearEmpleados from "./pages/CrearEmpleado";
import NotFound from "./pages/NotFound";
import { ClienteContextProvider } from "./context/ClienteProvider";
import { EmpleadoContextProvider } from "./context/EmpleadoProvider";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className= "bg-zinc-900 h-screen">
        <Navbar />
      <div className="container mx-auto py-4 px-12">
      <ClienteContextProvider>
      <EmpleadoContextProvider>

        <Routes>
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/newCliente" element={<CrearClientes />} />
          <Route path="/editCliente/:clienteid" element={<CrearClientes />} />

          <Route path="/empleados" element={<EmpleadosPage />} />
          <Route path="/newEmpleado" element={<CrearEmpleados />} />
          <Route path="/editEmpleado/:empleadoid" element={<CrearEmpleados />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </EmpleadoContextProvider>
      </ClienteContextProvider>
      </div>
    </div>
  );
}

export default App;
