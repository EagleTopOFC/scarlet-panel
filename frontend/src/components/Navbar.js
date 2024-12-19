import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ apiKey }) {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/orders">Órdenes</Link></li>
        <li>{apiKey ? <span>Conectado</span> : <Link to="/login">Iniciar sesión</Link>}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
