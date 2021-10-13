$(document).ready(function () {
  console.log("document ready!");
  let searchParams = new URLSearchParams(window.location.search);
  if (searchParams.has("id")) {
    let id = searchParams.get("id");
    getById(id);
  }
});

function getById(id) {
  $.ajax({
    url:
      "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client/" +
      id,
    type: "GET",
    dataType: "json",
    success: function (respuesta) {
      console.log(respuesta.items);
      if (respuesta.items.length == 1) {
        updateClientField(respuesta.items[0]);
      } else {
        $("#boton").hide();
        alert("No se encuentra el client con el id " + id);
      }
    },
    error: function (xhr, status) {
      alert("ha sucedido un problema");
    },
  });
}

function updateClientField(item) {
  $("#id_client").val(item.id);
  $("#name_client").val(item.name);
  $("#email_client").val(item.email);
  $("#age_client").val(item.age);
}
