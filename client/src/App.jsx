import { Route, Routes } from "react-router-dom";
import ClientesPage from "./pages/ClientesPage";
import CrearClientes from "./pages/CrearClientes";
import ProveedoresPage from "./pages/ProveedoresPage";
import CrearProveedores from "./pages/CrearProveedor";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
import { ClienteContextProvider } from "./context/ClienteProvider";
import { ProveedorContextProvider } from "./context/ProveedorProvider";
import "./index.css";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className= "bg-zinc-900  h-full-screen">
        <Navbar />
      <div className="container mx-auto py-4 px-12">
      <ClienteContextProvider>
      <ProveedorContextProvider>

        <Routes>
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/newCliente" element={<CrearClientes />} />
          <Route path="/editCliente/:ID_CLIENTE" element={<CrearClientes />} />

          <Route path="/proveedores" element={<ProveedoresPage />} />
          <Route path="/newProveedor" element={<CrearProveedores />} />
          <Route path="/editProveedor/:NIT_PROVEEDORES" element={<CrearProveedores />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </ProveedorContextProvider>
      </ClienteContextProvider>
      </div>
        <Footer />
    </div>
  );
}

export default App;
