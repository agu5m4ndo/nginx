const port = process.argv[3];
const socket = io(`http://localhost:${port}/logout`);

const closingMessage = (session) => {
    return fetch('../views/logout.hbs')
        .then(response => response.text())
        .then(plantilla => {
            const template = Handlebars.compile(plantilla);
            const html = template({ session });
            const span = document.getElementById('logout');
            span.innerHTML = html;
        })
        .catch(err => console.log(err))
}

const sessionInfo = async() => {
    const session = await fetch(`http://localhost:${port}/login/session`)
        .then(res => res.json())
        .then(data => { return data; })
    closingMessage(session);
}

setTimeout(() => {
    window.location = '/login'; //Luego de 3 segundos, elimina la sesión y redirige a login
}, 3000);

socket.on('logout', () => sessionInfo())