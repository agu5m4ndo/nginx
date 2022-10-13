const { options } = require('./options/sqlite3')
const knex = require('knex')(options)

knex.schema.createTable('messages', table => {
        table.increments('id')
        table.string('email')
        table.string('content')
        table.integer('date')
    })
    .then(() => console.log('Table created'))
    .catch((err) => { console.log(err); throw err })
    .finally(() => knex.destroy());