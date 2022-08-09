import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

// para borrar
function delData(urlApi, id) { // en este caso queremos borrar un id de la API
    const response = fetch(`${urlApi}/${id}`, {
        method: 'DELETE', // como argumento agregamos también un objeto con method: 'DELETE' que quiere decir que borraremos la id de la API
    });
    return response;
}

  delData(`${API}/products`, '247')
    .then(response => response.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));