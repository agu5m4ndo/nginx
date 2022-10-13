const socket = io(`http://localhost/info`);

const getData = async() => {
    const result = await fetch(`http://localhost/info/data`)
        .then(res => res.json())
        .then(result => { return result.data })
    renderData(result)
}

const renderData = async(data) => {
    return await fetch('../views/info.hbs')
        .then(res => res.text())
        .then(plantilla => {
            const template = Handlebars.compile(plantilla)
            const html = template({ data })
            const span = document.getElementById('data')
            span.innerHTML = html;
        })
}

socket.on('info', () => getData())