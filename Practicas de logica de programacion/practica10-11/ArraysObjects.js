const ListaDePersonas = [{
        name: "Dereck",
        correo: "dereck@gmail.com"
    }, {
        name: "Alexa",
        correo: "ale@gmail.com"
    },
    {
        name: "Darios",
        correo: "darios@gmail.com"
    },
    {
        name: "John Doe",
        correo: "johndoe@gmail.com"
    }
]


ListaDePersonas.forEach(persona => {
    console.log(persona.name);
    console.log(persona.correo);
})