const mongoose = require('../../DB/options/mongodb'); //Esto llama a la configuración de mongoose y se conecta
const User = require('../../models/user.js');
const bcrypt = require('bcrypt')

//sirve en login si el usuario no es correcto o en register si el usuario ya existe
const userExists = async(username) => {
    const user = await User.findOne({ username })
    if (user) return true;
    else return false;
}

//Registra el usuario hasheando la contraseña
const saveUser = async(username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        username,
        password: hashedPassword
    })

    await newUser.save()

    console.log('Usuario guardado con éxito: ', username, '@', hashedPassword);
}

module.exports = { userExists, saveUser };