const { faker } = require('@faker-js/faker');
const path = require('path')

const testAPI = (req, res) => {
    const array = [];
    for (let i = 0; i < 5; i++) {
        const object = {
            name: faker.commerce.product(),
            price: faker.commerce.price(),
            thumbnail: faker.image.business(undefined, undefined, true) //el último true permite que se randomicen las imágenes
        }
        array.push(object);
    }
    res.status(200).json({ array });
}

const showView = async(req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'productsTest.html'))
}

module.exports = {
    testAPI,
    showView
}