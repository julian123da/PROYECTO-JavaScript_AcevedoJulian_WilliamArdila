// Crear estudiante

const crearEstudiante = document.getElementById("crearEstudiante")
let inputNombreEstudiante = document.getElementById("inputNombreEstudiante")
let inputCorreoEstudiante = document.getElementById("inputCorreoEstudiante")
let inputClaveEstudiante = document.getElementById("inputClaveEstudiante")

crearEstudiante.addEventListener("click", function () {
    let nombreEstudiante = inputNombreEstudiante.value
    let correoEstudiante = inputCorreoEstudiante.value
    let claveEstudiante = inputClaveEstudiante.value

    let llamadaApiEstudiantes = new XMLHttpRequest;
    llamadaApiEstudiantes.open("POST", "https://68a88e91a7e3ec06c2fc4249.mockapi.io/estudiantes/datosEstudiante");
    llamadaApiEstudiantes.setRequestHeader("Content-Type", "application/json");



    let nuevoEstudiante = {
        "nombre": nombreEstudiante,
        "clave": claveEstudiante,
        "correo": correoEstudiante
    }

    llamadaApiEstudiantes.onreadystatechange = function(){
        if (llamadaApiEstudiantes.readyState === 4) {
            if (llamadaApiEstudiantes.status === 201) {
                alert("Estudiante Creado");
            } 
        }
    };

    llamadaApiEstudiantes.send(JSON.stringify(nuevoEstudiante));

})