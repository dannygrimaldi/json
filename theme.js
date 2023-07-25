function toggleTheme() {
  const body = document.body;
  body.classList.toggle('bootstrap');
  body.classList.toggle('bootstrap-dark');
  body.classList.toggle('dark-theme');

  // Aplicar el tema almacenado a las tablas
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    table.classList.toggle('table-dordered');
    table.classList.toggle('table-dark');
  });

  // Obtener el tema actual después de los cambios
  const currentTheme = body.classList.contains('bootstrap-dark') ? 'dark' : 'light';

  // Guardar el tema seleccionado en el localStorage
  localStorage.setItem('selectedTheme', currentTheme);
}

document.addEventListener('DOMContentLoaded', function() {
  // Al cargar la página, aplicar el tema almacenado en el localStorage
  const selectedTheme = localStorage.getItem('selectedTheme');
  if (selectedTheme) {
    const body = document.body;
    body.classList.add('bootstrap-' + selectedTheme);
    if (selectedTheme === 'dark') {
      body.classList.add('dark-theme');
    }

    // Aplicar el tema almacenado a las tablas
    const tables = document.querySelectorAll('table');
    tables.forEach(table => {
      table.classList.add('table-' + selectedTheme);
      if (selectedTheme === 'dark') {
        table.classList.add('table-dark');
      }
    });
  }

  // Agregar evento al botón para cambiar el tema
  document.getElementById('theme-switch').addEventListener("click", toggleTheme);
});
