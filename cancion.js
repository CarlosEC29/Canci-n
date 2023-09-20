// Defino la clase Canción
var Cancion = /** @class */ (function () {
    function Cancion(título, interprete) {
        if (título === void 0) { título = ""; }
        if (interprete === void 0) { interprete = ""; }
        this.título = título;
        this.interprete = interprete;
    }
    // Defino el método mostrar titulo
    Cancion.prototype.mostrarTitulo = function () {
        return this.título;
    };
    // Defino el método mostrar Interprete
    Cancion.prototype.mostrarInterprete = function () {
        return this.interprete;
    };
    // Defino el método poner titulo
    Cancion.prototype.ponerTitulo = function (título) {
        this.título = título;
    };
    // Defino el método poner interprete
    Cancion.prototype.ponerInterprete = function (interprete) {
        this.interprete = interprete;
    };
    return Cancion;
}());
// Ejemplo de uso
var cancion = new Cancion("La razon que te demora", "La Renga");
console.log("Título: ", cancion.mostrarTitulo());
console.log("Autor: ", cancion.mostrarInterprete());
cancion.ponerTitulo("El barrio en tus puños");
cancion.ponerInterprete("Piti Fernandez");
console.log("Título actualizado: ", cancion.mostrarTitulo());
console.log("Autor actualizado: ", cancion.mostrarInterprete());
