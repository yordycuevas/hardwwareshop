import { Route, Routes } from "react-router-dom";
import ClientesPage from "./pages/ClientesPage";
import CrearClientes from "./pages/CrearClientes";
import NotFound from "./pages/NotFound";
import { ClienteContextProvider } from "./context/ClienteProvider"; 

import Navbar from "./components/Navbar";

function App() {
  return (
     <ClienteContextProvider>
     <Navbar />
      <Routes>
        <Route path="/" element={<ClientesPage />} />
        <Route path="/new" element={<CrearClientes />} />
        <Route path="/edit/:clienteid" element={<CrearClientes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
     </ClienteContextProvider>
    
  );
}

export default App;
