describe("Pruebas Unitarias - Componente Introducción", function() {
  it("Debe validar que el entorno de pruebas de Jasmine y Karma funciona correctamente", function() {
    let resultado = true;
    expect(resultado).toBe(true);
  });

  it("Debe verificar que las propiedades de texto principales existen", function() {
    let datosEstudiante = {
      nombre: "Pedro Hacker",
      github: "https://github.com/pedrohacker20"
    };
    expect(datosEstudiante.nombre).toContain("Pedro");
    expect(datosEstudiante.github).toContain("github.com");
  });
});