function getMessages() {
  $.ajax({
    url: "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: "GET",
    dataType: "json",
    success: function (respuesta) {
      console.log(respuesta.items);
      mostrarRespuesta(respuesta.items);
    },
    error: function (xhr, status) {
      alert("ha sucedido un problema");
    },
  });
}

function mostrarRespuesta(items) {
  var tabla = `
  <div class="tab">
  <table class=" table table-striped">
                      <tr>
                        <th>ID</th>
                        <th>MENSAJE</th>
                        <th>ACCIONES</th>
                      </tr>`;

  if (items.length === 0) {
    tabla += `<tr>
                                    <p> No hay elementos en la tabla de Mensajes</p>
                                       </tr>`;
  } else {
    for (var i = 0; i < items.length; i++) {
      tabla += `<tr>
                       <td>${items[i].id}</td>
                       <td>${items[i].messagetext}</td>
                       
                       <td class="actions_container">
                       
                       <button class="btns btns_delete" onclick="deleteMessage(${items[i].id})">Eliminar</button>
                       <a class="edit_btn" href="detalleMessages.html?id=${items[i].id}" >Editar</a>
                       </td> 
                       </tr>`;
    }
  }
  tabla += `</table>
  </div>`;

  $("#messages__table").html(tabla);
}
