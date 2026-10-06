import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Introduccion from './components/Introduccion';
import Proyectos from './components/Proyectos';
import Noticias from './components/Noticias';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Introduccion
        nombre="Pedro Hacker"
        bio="Estudiante de Ingeniería en Informática y entusiasta de la tecnología."
        githubUrl="https://github.com/pedrohacker20"
        imagen="https://pedrohacker20.github.io/138630362.png"
      />

      <Proyectos />

      <Noticias />
    </div>
  );
}

export default App;
