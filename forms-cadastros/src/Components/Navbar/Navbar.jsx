import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Mantenha o import para a estilização

const Navbar = () => {
  return (
        <header className="navbar-header">
            <nav className="navbar-container">
                {/* Link para a Página Inicial (Home) */}
                <NavLink to="/" className="navbar-logo">
                Sistema de Gestão
                </NavLink>

                <ul className="navbar-links">
                    <li>
                        <NavLink to="/CadProdutos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Produtos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/CadPessoas" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Pessoas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/CadNotas" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Notas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/CadCursos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Cursos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/CadAlunos" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Alunos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;