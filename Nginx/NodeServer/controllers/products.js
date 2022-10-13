const { options } = require('../DB/options/mariadb')
const knex = require('knex')(options);

//Me permite controlar las tablas
const Contenedor = require('../DB/contenedores/knexSQL');

//creo la tabla para productos en mysql si esta no existe
if (!knex.schema.hasTable('productos')) {
    knex.schema.createTable('products', table => {
            table.increments('id')
            table.string('name')
            table.integer('price')
            table.string('thumbnail')
        })
        .then(() => console.log('Table created'))
        .catch((err) => { console.log(err); throw err })
        .finally(() => knex.destroy());
}

//creo una instancia de contenedor para acceder a la base de datos desde ahí
const container = new Contenedor('products', options);

const getAllProducts = async(req, res, next) => {
    const result = await container.getAll()
    res.status(200).json({ result })
}

const getOneProduct = async(req, res, next) => {
    const result = await container.getById(Number(req.params['id']));
    res.status(200).json({ result });
}

const postProduct = (req, res, next) => {
    container.save(req.body)
    res.status(200).redirect('/');
}

const deleteProduct = async(req, res, next) => {
    await container.deleteById(Number(req.params['id']))
    res.status(200).json({ success: 'true' })
}

module.exports = {
    getAllProducts,
    getOneProduct,
    postProduct,
    deleteProduct
};