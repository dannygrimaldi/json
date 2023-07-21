function abrirModal() {
        document.getElementById('myModal').style.display = 'block';
    }

    // Función para cerrar la ventana modal
    function cerrarModal() {
        document.getElementById('myModal').style.display = 'none';
    }

    // Evento para abrir la ventana modal al hacer clic en el botón
    document.getElementById('btnAbrirModal').addEventListener('click', abrirModal);

    // Evento para cerrar la ventana modal al hacer clic en el botón de cerrar
    document.getElementById('btnCerrarModal').addEventListener('click', cerrarModal);
