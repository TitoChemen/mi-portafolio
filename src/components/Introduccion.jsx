import React from 'react';

const Introduccion = ({ nombre, bio, githubUrl, imagen }) => {
  return (
    <section id="inicio" className="container my-5">
      <div className="row align-items-center">
        
        <div className="col-md-4 text-center">
          <img
            src={imagen}
            alt={`Foto de ${nombre}`}
            className="img-fluid rounded-circle"
          />
        </div>

        <div className="col-md-8">
          <h2>{nombre}</h2>


          <p>{bio}</p>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
          >
            Ver GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default Introduccion;
