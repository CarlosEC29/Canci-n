// Defino la clase Canción
class Cancion {
  private título: string;
  private interprete: string;

  public constructor(título: string = "", interprete: string = "") {
    this.título = título;
    this.interprete = interprete;
  }

  // Defino el método mostrar titulo
  public mostrarTitulo(): string {
    return this.título;
  }

  // Defino el método mostrar Interprete
  public mostrarInterprete(): string {
    return this.interprete;
  }

  // Defino el método poner titulo
  public ponerTitulo(título: string): void {
    this.título = título;
  }

  // Defino el método poner interprete
  public ponerInterprete(interprete: string): void {
    this.interprete = interprete;
  }
}

// Ejemplo de uso
const cancion = new Cancion("La razon que te demora", "La Renga");

console.log("Título: ", cancion.mostrarTitulo());
console.log("Autor: ", cancion.mostrarInterprete());

cancion.ponerTitulo("El barrio en tus puños");
cancion.ponerInterprete("Piti Fernandez");

console.log("Título actualizado: ", cancion.mostrarTitulo());
console.log("Autor actualizado: ", cancion.mostrarInterprete());