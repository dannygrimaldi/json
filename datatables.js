<!-- Agrega las librerías necesarias -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.min.js"></script>
<script src="https://cdn.jsdelivr.net/momentjs/2.29.1/moment.min.js"></script>
<script src="https://cdn.datatables.net/plug-ins/1.11.5/sorting/datetime-moment.js"></script>
    <script type="text/javascript" src="https://cdn.datatables.net/plug-ins/1.10.13/dataRender/datetime.js"></script>


<!-- Configura tu datatable -->
<script>
$(document).ready(function() {
  $('#miTabla').DataTable({
    columnDefs: [{
      targets: 0, // Índice de la columna fecha (0 es la primera columna)
      type: 'datetime-moment', // Usa el plugin de DataTables Moment para ordenar por fechas
      render: function (data, type, full, meta) {
        // Formatea la fecha para que se muestre correctamente
        return moment(data, 'DD/MM/YYYY').format('DD/MM/YYYY'); // Ajusta el formato según tus necesidades
      }
    }],
    // Resto de configuraciones de tu datatable
  });
});
</script>
