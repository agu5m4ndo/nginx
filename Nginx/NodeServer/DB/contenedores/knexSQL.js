const knex = require('knex')
class Contenedor {
    constructor(tableName, options) {
        this.tableName = tableName;
        this.options = options;
    }


    save = (object) => {
        return knex(this.options)(`${this.tableName}`).insert(object)
            .then(() => console.log('Data insertada correctamente'))
            .catch((error) => console.log(`Se ha producido un error al añadir el archivo, ${error}`))
    }


    getById = (id) => {
        return knex(this.options)(`${this.tableName}`).select('*').where('id', id)
            .then(result => {
                return result[0];
            })
            .catch((err) => {
                console.log(`No se ha encontrado un objeto con el id ${id}`);
                console.log(err);
                return null;
            })
    }

    getAll = () => {
        return knex(this.options)(`${this.tableName}`).select('*')
            .then(res => { return res })
            .catch(err => console.log(err))
    }

    // update = (original, edited) => {
    //     Object.keys(original).forEach(key => original.key = edited.key);
    //     knex(`${this.tableName}`).where(id).update(original)
    //         .then(() => console.log('Data modificada correctamente'))
    //         .catch((error) => console.log(`Se ha producido un error al modificar el archivo, ${error}`))
    // }

    deleteById = async(id) => {
        return knex(this.options)(`${this.tableName}`).del().where('id', id)
            .then(() => console.log('Data eliminada correctamente'))
            .catch((error) => console.log(`Se ha producido un error al eliminar el archivo, ${error}`))
    }
}

module.exports = Contenedor;