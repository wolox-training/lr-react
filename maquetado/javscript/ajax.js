$(document).ready(function() {
  $.getJSON('http://demo8272131.mockable.io/', function(data) {
      $.each( data, function( index, value ) {
        $('#msg').append('<tr>','<td>' + value.id + '</td>', '<td>' +value.name + '</td>', '<td>' + "sss" + '</td>','<tr>');
    });
  });
});
