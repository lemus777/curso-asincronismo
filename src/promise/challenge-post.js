import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function postData(urlApi, data) { // en este caso queremos agregar datos a la API
    const response = fetch(urlApi, {
        method: 'POST', // como argumento agregamos también un objeto con method: 'POST' que quiere decir que agregaremos a la API datos
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
    "title": "New Product fresh",
    "price": 968,
    "description": "Just a fresh product",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
  }

  postData(`${API}/products`, data)
    .then(response => response.json())
    .then(data => console.log(data));


