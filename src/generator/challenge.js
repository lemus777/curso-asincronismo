import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

export default async function fetchData(urlApi) {
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}


async function* iterData(urlApi) {
    try {
        const products = await fetchData(`${API}/products`);
        yield console.log(products[0]);

        const product = await fetchData(`${API}/products/${products[0].id}`);
        yield console.log(product.title);

        const category = await fetchData(`${API}/categories/${product.category.id}`);
        yield console.log(category.name);
    } catch (error) {
        console.error('Error', error);
    };
};


const dt = iterData(API);
dt.next();
dt.next();
dt.next();