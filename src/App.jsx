import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Empresa from "./pages/Empresa";
import Solucoes from "./pages/Solucoes";
import Portfolio from "./pages/Portfolio";
import Contato from "./pages/Contato";

function App() {
  return (
    <>
      <Navbar />

      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/empresa" element={<Empresa />} />

          <Route path="/solucoes" element={<Solucoes />} />

          <Route path="/portfolio" element={<Portfolio />} />

          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
    </>
  );
}

export default App;