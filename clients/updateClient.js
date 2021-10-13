function updateClient() {
  console.log("ejecutando funcion para actualizar");

  let client = {
    id: +$("#id_client").val(),
    name: $("#name_client").val(),
    email: $("#email_client").val(),
    age: +$("#age_client").val(),
  };

  console.log(client);

  $.ajax({
    url: "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: "PUT",
    dataType: "json",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(client),
    statusCode: {
      201: function () {
        alert("Se ha actualizado el cliente");
      },
    },
  });
}
