const options = {
    client: 'sqlite3',
    connection: {
        filename: process.env.FILENAME //No se si esto es necesario
    },
    useNullAsDefault: true
}

module.exports = { options }