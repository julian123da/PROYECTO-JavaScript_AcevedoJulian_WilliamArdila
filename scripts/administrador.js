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

    llamadaApiEstudiantes.onreadystatechange = function () {
        if (llamadaApiEstudiantes.readyState === 4) {
            if (llamadaApiEstudiantes.status === 201) {
                alert("Estudiante Creado");
                inputNombreEstudiante.value = ""
                inputCorreoEstudiante.value = ""
                inputClaveEstudiante.value = ""
            }
        }
    };

    llamadaApiEstudiantes.send(JSON.stringify(nuevoEstudiante));

})

// Crear Profesor

const crearProfesor = document.getElementById("crearProfesor")
let inputNombreProfesor = document.getElementById("inputNombreProfesor")
let inputCorreoProfesor = document.getElementById("inputCorreoProfesor")
let inputClaveProfesor = document.getElementById("inputClaveProfesor")

crearProfesor.addEventListener("click", function () {
    let nombreProfesor = inputNombreProfesor.value
    let correoProfesor = inputCorreoProfesor.value
    let claveProfesor = inputClaveProfesor.value

    let llamadaApiProfesor = new XMLHttpRequest;
    llamadaApiProfesor.open("POST", "https://68a8a66bb115e67576e978b3.mockapi.io/profesores/datosProfesores");
    llamadaApiProfesor.setRequestHeader("Content-Type", "application/json");



    let nuevoProfesor = {
        "nombre": nombreProfesor,
        "clave": claveProfesor,
        "correo": correoProfesor
    }

    llamadaApiProfesor.onreadystatechange = function () {
        if (llamadaApiProfesor.readyState === 4) {
            if (llamadaApiProfesor.status === 201) {
                alert("Profesor Creado");
                inputNombreProfesor.value = ""
                inputCorreoProfesor.value = ""
                inputClaveProfesor.value = ""
            }
        }
    };

    llamadaApiProfesor.send(JSON.stringify(nuevoProfesor));

})

// Crear o Borrar estudiante

const listaEstudiantes = document.getElementById("listaEstudiantes")

let llamadaApiEstudiantes = new XMLHttpRequest();
llamadaApiEstudiantes.open("GET", "https://68a88e91a7e3ec06c2fc4249.mockapi.io/estudiantes/datosEstudiante")
llamadaApiEstudiantes.onreadystatechange = function () {
    if (llamadaApiEstudiantes.readyState === 4 && llamadaApiEstudiantes.status === 200) {
        try {
            let datosEstudiantes = JSON.parse(llamadaApiEstudiantes.responseText);
            for (let i = 0; i < datosEstudiantes.length; i++) {
                listaEstudiantes.innerHTML += `
                <div class="estudiantes">
                    <p>${datosEstudiantes[i]["nombre"]}</p>
                    <a href="">Editar</a>
                    <a href="">Borrar</a>
                    
                    
                    
                </div>`
            }
        }

        catch (err) {

            console.log(err.message);
        }
    }
}
llamadaApiEstudiantes.send();


// Crear o Borrar Profesor

const listaProfesores = document.getElementById("listaProfesores")

let llamadaApiProfesores = new XMLHttpRequest();
    llamadaApiProfesores.open("GET", "https://68a8a66bb115e67576e978b3.mockapi.io/profesores/datosProfesores")
    llamadaApiProfesores.onreadystatechange = function(){
        if(llamadaApiProfesores.readyState === 4 && llamadaApiProfesores.status === 200){
            try{
                let datosProfesores = JSON.parse(llamadaApiProfesores.responseText);
                for (let i = 0; i < datosProfesores.length; i++) {
                listaProfesores.innerHTML += `
                <div class="profesores">
                    <p>${datosProfesores[i]["nombre"]}</p>
                    <a href="">Editar</a>
                    <a href="">Borrar</a>
                    
                    
                    
                </div>`
            }
            }

            catch(err){

                console.log(err.message);
            }
        }
    }
    llamadaApiProfesores.send();
