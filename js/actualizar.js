function actualizar() {
  console.log("ejecutando funcion para actualizar Orthesis");

  let orthesis = {
    id: +$("#orthesis_id").val(),
    name: $("#orthesis_name").val(),
    brand: $("#orthesis_brand").val(),
    category_id: +$("#orthesis_category").val(),
    model: +$("#orthesis__model").val(),
  };

  console.log(orthesis);

  $.ajax({
    url: "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/orthesis/orthesis",
    type: "PUT",
    dataType: "json",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(orthesis),
    statusCode: {
      201: function () {
        alert("Se ha actualizado la orthesis");
      },
    },
  });
}
