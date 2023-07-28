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
