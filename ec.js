function reconocerPalabrasClave(texto, palabrasClave) {
  var resultado = [];
  
  palabrasClave.forEach(function(palabra) {
    var patron = new RegExp("\\b" + palabra + "\\b", "gi");
    var coincidencias = texto.match(patron);
    
    if (coincidencias) {
      resultado.push({
        palabra: palabra,
        cantidad: coincidencias.length
      });
    }
  });
  
  return resultado;
}

// Ejemplo de uso
var textoEjemplo = "La casa es de color rojo y tiene un jardín grande. La casa es hermosa.";
var palabrasClave = ["casa", "rojo", "jardín"];

var resultado = reconocerPalabrasClave(textoEjemplo, palabrasClave);
console.log(resultado);




var cadena = "Nombre: Pedro Edad: 35 Ciudad: Buenos Aires OtroDato: Valor1 Algo: Valor2";

// Expresión regular para buscar patrón atributo: valor
var regex = /(\w+):\s*(\w+)/g;

// Objeto para almacenar los atributos y valores
var objetoAtributos = {};

// Buscar y almacenar los atributos y valores en el objeto
var match;
while ((match = regex.exec(cadena)) !== null) {
  // match[1] es el atributo y match[2] es el valor
  objetoAtributos[match[1]] = match[2];
}

console.log(objetoAtributos);
