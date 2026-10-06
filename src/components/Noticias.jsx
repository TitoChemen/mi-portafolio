import React, { useState, useEffect } from 'react';
import noticiasData from '../data/noticias.json';

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Cargamos los datos del JSON local
    setNoticias(noticiasData);
  }, []);

  return (
    <section id="noticias" className="container my-5">
      <h2 className="text-center mb-4">Noticias Recientes</h2>

      <div className="row">
        {noticias.map((item) => (
          <div className="col-md-4 mb-4" key={item.id}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title">{item.titulo}</h3>

                <p className="text-muted">
                  {item.fecha}
                </p>

                <p className="card-text">
                  {item.contenido}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Noticias;
