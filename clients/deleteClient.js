// import { getClients } from "./getclients";

function deleteClient(id_client) {
  console.log("ejecutando funcion para eliminar");

  let client = {
    id: +id_client,
  };

  console.log(client);

  $.ajax({
    url: "https://geef34caf2c2a1c-orthesis.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/client/client",
    type: "DELETE",
    dataType: "json",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(client),
    statusCode: {
      204: function () {
        alert(`Se ha eliminado el cliente ${id_client}`);
        getClients();
      },
    },
  });
}
