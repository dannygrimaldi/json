function toggleTheme() {
  var body = document.querySelector('body');
  body.classList.toggle('bootstrap');
  body.classList.toggle('bootstrap-dark');

  var table = document.querySelector('#example');
  table.classList.toggle('table-bordered');
  table.classList.toggle('table-dark');

  // Obtener el tema actual después de los cambios
  var currentTheme = body.classList.contains('bootstrap-dark') ? 'dark' : 'light';

  // Guardar el tema seleccionado en el localStorage
  localStorage.setItem('selectedTheme', currentTheme);
}

// Al cargar la página, aplicar el tema almacenado en el localStorage
document.addEventListener('DOMContentLoaded', function() {
  var selectedTheme = localStorage.getItem('selectedTheme');
  if (selectedTheme) {
    var body = document.querySelector('body');
    body.classList.add('bootstrap-' + selectedTheme);

    var table = document.querySelector('#example');
    table.classList.add('table-' + selectedTheme);
  }
});
