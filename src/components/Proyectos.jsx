import React from 'react';

const Proyectos = () => {
  const listaProyectos = [
    {
      id: 1,
      titulo: "API Microservicios Spring Boot",
      descripcion: "Arquitectura backend con Spring Cloud Gateway, Eureka y seguridad OAuth2 JWT.",
      tecnologias: "Java, Spring Boot, Docker",
      link: "https://github.com/pedrohacker20"
    },
    {
      id: 2,
      titulo: "Despliegue con Terraform y AWS",
      descripcion: "Automatización de infraestructura en la nube y contenedores en clústeres Kubernetes.",
      tecnologias: "Terraform, AWS, Kubernetes",
      link: "https://github.com/pedrohacker20"
    },
    {
      id: 3,
      titulo: "Sistema de Gestión Veterinaria",
      descripcion: "Desarrollo fullstack con frontend en React y backend conectado a base de datos relacional.",
      tecnologias: "React, Spring Boot, MySQL",
      link: "https://github.com/pedrohacker20"
    }
  ];

  return (
    <section id="proyectos" className="container my-5">
      <h2 className="text-center mb-4">Proyectos</h2>

      <div className="row">
        {listaProyectos.map((proy) => (
          <div className="col-md-4 mb-4" key={proy.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">{proy.titulo}</h3>

                <p className="card-text">
                  {proy.descripcion}
                </p>

                <p className="card-text">
                  <strong>Tecnologías:</strong> {proy.tecnologias}
                </p>

                <a
                  href={proy.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Ver Repositorio
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;

