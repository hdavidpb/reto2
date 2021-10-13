function consultar() {
  console.log("Consultando orthesis");
  $.ajax({
    url: "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/orthesis/orthesis",
    type: "GET",
    dataType: "json",
    success: function (respuesta) {
      console.log(respuesta.items);
      showOrthesis(respuesta.items);
    },
    error: function (xhr, status) {
      alert("ha sucedido un problema");
    },
  });
}

function showOrthesis(items) {
  var tabla = `
  <div class="tab">
  <table  class="table table-striped ">
                  <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>MARCA</th>
                    <th>MODELO</th>
                    <th>ID CATEGORIA</th>
                    <th>ACCIONES</th>
                  </tr>
                  `;

  if (items.length === 0) {
    tabla += `<tr>
                                      <p> No hay elementos en la tabla de Orthesis</p>
                                      </tr>`;
  } else {
    for (var i = 0; i < items.length; i++) {
      tabla += `
                     
                      <tr>
                                     <td>${items[i].id}</td>
                                     <td>${items[i].name}</td>
                                     <td>${items[i].brand}</td>
                                     <td>${items[i].model}</td>
                                     <td>${items[i].category_id}</td>
                                     <td class="actions_container">
                                     <button class="btns btns_delete" onclick="eliminar(${items[i].id})">Eliminar</button>
                                     <a class="edit_btn" href="detalleOrthesis.html?id=${items[i].id}" >Editar</a>
                                     </td> 
                                     </tr>
                                    `;
    }
  }

  tabla += `
  
  </table>
  </div>
  `;

  $("#tabla").html(tabla);
}
