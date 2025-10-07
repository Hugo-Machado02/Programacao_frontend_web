// src/App.jsx

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx';

// Corrija os caminhos de importação aqui!
import Home from './Pages/Home/Home.jsx';
import CadastroProdutos from './Pages/CadastroProdutos/CadastroProdutos.jsx';
import CadastroPessoas from './Pages/CadastroPessoas/CadastroPessoas.jsx';
import CadastroNotas from './Pages/CadastroNotas/CadastroNotas.jsx';
import CadastroCursos from './Pages/CadastroCursos/CadastroCursos.jsx';
import CadastroAlunos from './Pages/CadastroAlunos/CadastroAlunos.jsx';

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CadProdutos" element={<CadastroProdutos />} />
            <Route path="/CadPessoas" element={<CadastroPessoas />} />
            <Route path="/CadNotas" element={<CadastroNotas />} />
            <Route path="/CadCursos" element={<CadastroCursos />} />
            <Route path="/CadAlunos" element={<CadastroAlunos />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;