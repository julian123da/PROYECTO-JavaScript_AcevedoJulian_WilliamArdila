// Crear estudiante

const crearEstudiante = document.getElementById("crearEstudiante")
let inputNombreEstudiante = document.getElementById("inputNombreEstudiante")
let inputCorreoEstudiante = document.getElementById("inputCorreoEstudiante")
let inputClaveEstudiante = document.getElementById("inputClaveEstudiante")

crearEstudiante.addEventListener("click", function () {
    let nombreEstudiante = inputClaveEstudiante.value
    let correoEstudiante = inputCorreoEstudiante.value
    let claveEstudiante = inputClaveEstudiante.value

    let llamadaApiEstudiantes = new XMLHttpRequest;
    llamadaApiEstudiantes.open("POST", "https://68a8a66bb115e67576e978b3.mockapi.io/profesores/datosEstudiantes");



    let nuevoEstudiante = {
        "nombre": nombreEstudiante,
        "clave": claveEstudiante,
        "correo": correoEstudiante
    }

    llamadaApiEstudiantes.send(JSON.stringify(nuevoEstudiante));

})