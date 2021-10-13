function eliminar(identificador) {
  console.log("ejecutando funcion para eliminar orthesis");

  let orthesis = {
    id: +identificador,
  };

  console.log(orthesis);

  $.ajax({
    url: "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/orthesis/orthesis",
    type: "DELETE",
    dataType: "json",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(orthesis),
    statusCode: {
      204: function () {
        alert("Se ha eliminado la orthesis");
        consultar();
      },
    },
  });
}
