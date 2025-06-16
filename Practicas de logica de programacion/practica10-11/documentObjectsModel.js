const ListPersons = [{
    name: "Dereck",
    age: "18"
}, {
    name: "Alexa",
    age: "35"
}, {
    name: "Darios",
    age: "23"
}, {
    name: "John Doe",
    age: "65"
}]
let app = document.getElementById("app")

ListPersons.forEach(person => {
    const persona = document.createElement("div")

    persona.innerHTML = `
    <p>${person.name}</p>
    <p>${person.age}</p>
    `
    app.appendChild(persona)

})











// let parrafo = document.createElement("p")
// parrafo.textContent = "Hola soy un parrafo subNodo del div con el id app"

// app.appendChild(parrafo)