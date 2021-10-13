function deleteMessage(id) {
  console.log("ejecutando funcion para eliminar message");

  let message = {
    id: +id,
  };

  console.log(message);

  $.ajax({
    url: "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/message/message",
    type: "DELETE",
    dataType: "json",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(message),
    statusCode: {
      204: function () {
        alert("Se ha eliminado el mensaje");
        getMessages();
      },
    },
  });
}
