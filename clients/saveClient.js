function saveClient() {
  console.log("ejecutando funcion guardar");

  let client = {
    id: +$("#id_client").val(),
    name: $("#name_client").val(),
    email: $("#email_client").val(),
    age: +$("#age_client").val(),
  };

  console.log(client);

  $.ajax({
    url: "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: "POST",
    dataType: "json",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(client),
    statusCode: {
      201: function () {
        alert("Se ha registrado el cliente");
        getClients();
      },
    },
  });
}
