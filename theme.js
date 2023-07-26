function loadSelectedTheme() {
  const body = document.body;
  const selectedTheme = localStorage.getItem('selectedTheme');
  var table = document.querySelector('#albums_by_decade');

  if (selectedTheme === 'dark') {
    body.classList.add('bootstrap-dark');
    body.classList.add('dark-theme');
    table.classList.add('table-dark');

  } else {
    //body.classList.add('bootstrap');
  }
}

function toggleTheme() {
  const body = document.body;
  var table = document.querySelector('#example');


  body.classList.toggle('bootstrap-dark');
  body.classList.toggle('dark-theme');
  table.classList.toggle('table-dark');

  // Verificar qué tema se ha aplicado y almacenarlo en el localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('selectedTheme', 'dark');
  } else {
    localStorage.setItem('selectedTheme', 'light');
  }
}

document.addEventListener('DOMContentLoaded', loadSelectedTheme);
