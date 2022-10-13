const port = process.argv[3];
const socket = io(`http://localhost:${port}/test`);
const table = document.getElementById('table');

const createTable = (productos) => {
    return fetch('../views/productsTest.hbs')
        .then(response => response.text())
        .then(plantilla => {
            const template = Handlebars.compile(plantilla);
            const html = template({ productos });
            const table = document.getElementById('table');
            table.innerHTML = html;
        })
        .catch(err => console.log(err))
}

const createProductList = async() => {
    const productos = await fetch(`http://localhost:${port}/api/productos-test`)
        .then(res => res.json())
        .then(data => { return data; })
    createTable(productos.array);
}

socket.on('testing', () => {
    createProductList()
})