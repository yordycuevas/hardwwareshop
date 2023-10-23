import { Route, Routes } from "react-router-dom";
import ClientesPage from "./pages/ClientesPage";
import CrearClientes from "./pages/CrearClientes";
import NotFound from "./pages/NotFound";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ClientesPage />} />
        <Route path="/new" element={<CrearClientes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
