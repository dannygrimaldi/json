<!DOCTYPE html>
<html>
<head>
  <title>Mostrar JSON en HTML con JSONView</title>
</head>
<body>
  <h1>Contenido del JSON:</h1>
  <div id="jsonContent"></div>

  <script src="https://cdn.jsdelivr.net/npm/jsonview@0.0.13/dist/jsonview.min.js"></script>
  <script>
    // Tu JSON
    var miJson = {
      "nombre": "John Doe",
      "edad": 30,
      "ciudad": "New York",
      "hobbies": ["fútbol", "música", "lectura"]
    };

    // Mostrar el contenido del JSON utilizando JSONView
    JSONView(miJson, document.getElementById('jsonContent'));
  </script>
</body>
</html>



function mostrarAtributos(obj) {
      var table = document.getElementById('atributosTable');
      for (var key in obj) {
        var row = table.insertRow();
        var atributoCell = row.insertCell(0);
        var valorCell = row.insertCell(1);

        atributoCell.textContent = key;
        valorCell.textContent = obj[key];
      }
    }
