//https://geef34caf2c2a1c-message.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message

function saveMessage() {
  console.log("ejecutando funcion guardar mensaje");

  let message = {
    id: +$("#id__msg").val(),
    messagetext: $("#msj").val(),
  };
  console.log(message);
  $.ajax({
    url: "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: "POST",
    dataType: "json",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(message),
    statusCode: {
      201: function () {
        alert("Se ha registrado el mensaje");

        getMessages();
      },
    },
  });
}
