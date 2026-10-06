import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#inicio">
          Mi Portafolio
        </a>

        <div className="navbar-nav">
          <a className="nav-link" href="#inicio">
            Introducción
          </a>

          <a className="nav-link" href="#proyectos">
            Proyectos
          </a>

          <a className="nav-link" href="#noticias">
            Noticias
          </a>

          <a className="nav-link" href="#contacto">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
