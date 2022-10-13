const port = process.argv[3];

const loadName = (session) => {
    return fetch('../views/login.hbs')
        .then(response => response.text())
        .then(plantilla => {
            const template = Handlebars.compile(plantilla);
            const html = template({ session });
            const login = document.getElementById('login');
            login.innerHTML = html;
        })
        .catch(err => console.log(err))
}

const getSessionInfo = async() => {
    const session = await fetch(`http://localhost:${port}/login/session`)
        .then(res => res.json())
        .then(data => { return data; })
    loadName(session);
}

socket.on('login', () => getSessionInfo())