import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function updateData(urlApi, id, data) { // en este caso queremos actualizar datos de la API
    const response = fetch(`${urlApi}/${id}`, {
        method: 'PUT', // como argumento agregamos también un objeto con method: 'PUT' que quiere decir que actualizaremos datos
        mode: 'cors', // esto tiene que ir siempre así
        credentials: 'same-origin', // definimos credenciales
        headers: { //definimos la cabecera
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data), // para el body vamos a tener un objeto, así que lo pasamos a string con stringify y el contenido va a ser el argumento data aportado en postData
    });
    return response;
}

const data = {
    "price": 500,
  }

  updateData(`${API}/products`, 248, data)
    .then(response => response.json())
    .then(data => console.log(data));
