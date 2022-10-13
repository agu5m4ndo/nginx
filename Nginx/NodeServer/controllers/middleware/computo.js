process.on('message', amount => {
    const object = {}
    for (let index = 1; index <= amount; index++) {
        const number = Math.round(Math.random() * 1000)
        object[number] ? (object[number] += 1) : (object[number] = 1);
    }
    process.send(object)
    process.exit()
})