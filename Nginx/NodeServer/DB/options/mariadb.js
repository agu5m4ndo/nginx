const options = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE
    }
}

module.exports = { options };