import { Route, Routes } from "react-router-dom";
import ClientesPage from "./pages/ClientesPage";
import CrearClientes from "./pages/CrearClientes";
import NotFound from "./pages/NotFound";
import { ClienteContextProvider } from "./context/ClienteProvider";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className= "bg-zinc-900 h-screen">
        <Navbar />
      <div className="container mx-auto py-4 px-12">
      <ClienteContextProvider>
        <Routes>
          <Route path="/" element={<ClientesPage />} />
          <Route path="/new" element={<CrearClientes />} />
          <Route path="/edit/:clienteid" element={<CrearClientes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ClienteContextProvider>
      </div>
    </div>
  );
}

export default App;
