function getClients() {
  $.ajax({
    url: "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: "GET",
    dataType: "json",
    success: function (respuesta) {
      console.log(respuesta.items);
      showClients(respuesta.items);
    },
    error: function (xhr, status) {
      alert("ha sucedido un problema");
    },
  });
}

function showClients(items) {
  var tabla = `
  <div class="tab">
  <table class=" table table-striped">
                    <tr>
                      <th>ID</th>
                      <th>NOMBRE</th>
                      <th>EMAIL</th>
                      <th>AÑOS</th>
                      <th>ACCIONES</th>
                    </tr>`;

  if (items.length === 0) {
    tabla += `<tr>
                      <p> No hay elementos en la tabla Cliente</p>
                      </tr>`;
  } else {
    for (var i = 0; i < items.length; i++) {
      tabla += `<tr>
                                         <td>${items[i].id}</td>
                                         <td>${items[i].name}</td>
                                         <td>${items[i].email}</td>
                                         <td>${items[i].age}</td>
                                         <td class="actions_container">
                                         <button class="btns btns_delete" onclick="deleteClient(${items[i].id})">Eliminar</button>
                                         <a class="edit_btn" href="detalleClient.html?id=${items[i].id}" >Editar</a>
                                         </td> 
                                         </tr>`;
    }
  }

  tabla += `</table>
  </div>`;

  $("#clients__table__container").html(tabla);
}
