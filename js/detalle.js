$(document).ready(function () {
  console.log("document ready!");
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("id")) {
    let id = searchParams.get("id");
    getOrthesisByID(id);
  }
});

function getOrthesisByID(id) {
  $.ajax({
    url:
      "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/orthesis/orthesis/" +
      id,
    type: "GET",
    dataType: "json",
    success: function (respuesta) {
      console.log(respuesta.items);
      if (respuesta.items.length == 1) {
        llenarDatosOrthesis(respuesta.items[0]);
      } else {
        $("#boton").hide();
        alert("No se encuentra la orthesis con el id " + id);
      }
    },
    error: function (xhr, status) {
      alert("ha sucedido un problema");
    },
  });
}

function llenarDatosOrthesis(item) {
  $("#orthesis_id").val(item.id);
  $("#orthesis_name").val(item.name);
  $("#orthesis_brand").val(item.brand);
  $("#orthesis_category").val(item.category_id);
  $("#orthesis__model").val(item.model);
}
