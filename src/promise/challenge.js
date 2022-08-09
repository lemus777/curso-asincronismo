import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
    return fetch(urlApi); // fetch ya de por sí es una promesa, entonces al llamar fetchData no hay que declararla como new Promise porque ya sabe js que es una promesa
}

/* fetchData(`${API}/products`) // al ejecutar nos da un error y nos dice que agreguemos al json "type": "module", así que lo agregamos al final, antes de la última llave de cierre. Esto nos trae todos los productos de la API declarada, lo comentamos para que no interfiera con la siguiente petición, pero funciona bien
    .then(response => response.json()) // transforma lo recibido en objeto
    .then(products => {
        console.log(products);
    })
    .catch(error => console.log(error)); */


fetchData(`${API}/products`)
    .then(response => response.json()) // pasamos a objetos la respuesta, los productos
    .then(products => {
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`) // esta vez queremos sólo el primer producto
    })
    .then(response => response.json()) // pasamos a objeto la respuesta, que es el primer producto
    .then(product => {
        console.log(product.title);
        return fetchData(`${API}/categories/${product.category.id}`) // también queremos la categoría del producto seleccionado
    })
    .then(response => response.json()) // pasamos a objeto la respuesta, la categoría
    .then(category => {
        console.log(category.name); // finalmente retornamos el nombre de la categoría
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));