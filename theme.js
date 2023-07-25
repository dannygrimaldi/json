// mi_script.js
function loadSelectedTheme() {
  const body = document.body;
  const selectedTheme = localStorage.getItem('selectedTheme');

  if (selectedTheme === 'dark') {
    body.classList.add('bootstrap-dark');
    body.classList.add('dark-theme');
  } else {
    body.classList.add('bootstrap');
  }
}

function toggleTheme() {
  const body = document.body;

  body.classList.toggle('bootstrap');
  body.classList.toggle('bootstrap-dark');
  body.classList.toggle('dark-theme');

  // Verificar qué tema se ha aplicado y almacenarlo en el localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('selectedTheme', 'dark');
  } else {
    localStorage.setItem('selectedTheme', 'light');
  }
}

document.addEventListener('DOMContentLoaded', loadSelectedTheme);
