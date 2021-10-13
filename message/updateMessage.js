function updateMessage() {
  console.log("ejecutando funcion para actualizar Mensaje");

  let message = {
    id: +$("#message_id").val(),
    messagetext: $("#msg_text").val(),
  };

  console.log(message);

  $.ajax({
    url: "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: "PUT",
    dataType: "json",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(message),
    statusCode: {
      201: function () {
        alert("Se ha actualizado el mensaje");
      },
    },
  });
}
