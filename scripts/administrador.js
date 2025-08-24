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

// Editar o Borrar estudiante



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
                    <p>${`id:${datosEstudiantes[i]["id"]}`}</p>
                    <a href="#" class="editarEstudiante" data-idEstudiantes="${datosEstudiantes[i]["id"]}">Editar</a>
                    <a href="#" class="borrarEstudiante" data-idEstudiantes="${datosEstudiantes[i]["id"]}">Borrar</a>
                    
                    
                    
                </div>`
            }

            // Borrar Estudiante

            let botonesDeBorradoEstudiantes = document.querySelectorAll(".borrarEstudiante")


            botonesDeBorradoEstudiantes.forEach(function (botonEstudiante) {
                botonEstudiante.addEventListener("click", function () {
                    let llamadaApiEstudiantes = new XMLHttpRequest;
                    llamadaApiEstudiantes.open("DELETE", `https://68a88e91a7e3ec06c2fc4249.mockapi.io/estudiantes/datosEstudiante/${botonEstudiante.dataset.idestudiantes}`);
                    llamadaApiEstudiantes.onreadystatechange = function () {
                        if (llamadaApiEstudiantes.readyState === 4) {
                            if (llamadaApiEstudiantes.status === 200) {
                                botonEstudiante.parentElement.remove()
                                alert("Estudiante Eliminado");

                            }
                            else { alert("no") }
                        }
                    };


                    llamadaApiEstudiantes.send();
                })

            })

            // Editar Estudiante

            let botonesDeEditarEstudiantes = document.querySelectorAll(".editarEstudiante")
            let cancelarEditarEstudiante = document.getElementById("cancelarEditarEstudiante")

            botonesDeEditarEstudiantes.forEach(function (botonEditarEstudiante) {
                botonEditarEstudiante.addEventListener("click", function () {
                    document.querySelector(".modalEstudiante").style.display = "block"
                    let actualizarEstudiante = document.getElementById("editarEstudiante")
                    let inputNombreEstudiante = document.getElementById("inputActualizarNombreEstudiante")
                    let inputCorreoEstudiante = document.getElementById("inputActualizarCorreoEstudiante")
                    let inputClaveEstudiante = document.getElementById("inputActualizarClaveEstudiante")

                    actualizarEstudiante.addEventListener("click", function () {
                        let nuevoNombreEstudiante = inputNombreEstudiante.value
                        let nuevoCorreoEstudiante = inputCorreoEstudiante.value
                        let nuevoClaveEstudiante = inputClaveEstudiante.value
                        let llamadaApiEstudiantes = new XMLHttpRequest;
                        llamadaApiEstudiantes.open("PUT", `https://68a88e91a7e3ec06c2fc4249.mockapi.io/estudiantes/datosEstudiante/${botonEditarEstudiante.dataset.idestudiantes}`);
                        llamadaApiEstudiantes.setRequestHeader("Content-Type", "application/json")
                        let estudianteEditado = {
                            "nombre": nuevoNombreEstudiante,
                            "clave": nuevoClaveEstudiante,
                            "correo": nuevoCorreoEstudiante
                        }
                        document.querySelector(".modalEstudiante").style.display = "none"
                        alert("Estudiante Editado")

                        llamadaApiEstudiantes.send(JSON.stringify(estudianteEditado));
                    })

                    cancelarEditarEstudiante.addEventListener("click", function () {
                        document.querySelector(".modalEstudiante").style.display = "none"
                    })
                })

            })
        }

        catch (err) {

            console.log(err.message);
        }
    }
}
llamadaApiEstudiantes.send();


// Editar o Borrar Profesor



const listaProfesores = document.getElementById("listaProfesores")

let llamadaApiProfesores = new XMLHttpRequest();
llamadaApiProfesores.open("GET", "https://68a8a66bb115e67576e978b3.mockapi.io/profesores/datosProfesores")
llamadaApiProfesores.onreadystatechange = function () {
    if (llamadaApiProfesores.readyState === 4 && llamadaApiProfesores.status === 200) {
        try {
            let datosProfesores = JSON.parse(llamadaApiProfesores.responseText);
            for (let i = 0; i < datosProfesores.length; i++) {
                listaProfesores.innerHTML += `
                <div class="profesores">
                    <p>${datosProfesores[i]["nombre"]}</p>
                    <p>${`id:${datosProfesores[i]["id"]}`}</p>
                    <a href="#" class="editarProfesor" data-idProfesor="${datosProfesores[i]["id"]}">Editar</a>
                    <a href="#" class="borrarProfesor" data-idProfesor="${datosProfesores[i]["id"]}">Borrar</a>
                    
                    
                    
                </div>`





            }

            // Borrar Profesor

            let botonesDeBorradoProfesores = document.querySelectorAll(".borrarProfesor")
            

            botonesDeBorradoProfesores.forEach(function (botonProfesor) {
                botonProfesor.addEventListener("click", function () {
                    let llamadaApiProfesores = new XMLHttpRequest;
                    llamadaApiProfesores.open("DELETE", `https://68a8a66bb115e67576e978b3.mockapi.io/profesores/datosProfesores/${botonProfesor.dataset.idprofesor}`);
                    llamadaApiProfesores.onreadystatechange = function () {
                        if (llamadaApiProfesores.readyState === 4) {
                            if (llamadaApiProfesores.status === 200) {
                                botonProfesor.parentElement.remove()
                                alert("Profesor Eliminado");

                            }
                            else { alert("no") }
                        }
                    };


                    llamadaApiProfesores.send();
                })
            })

            // Editar Profesor

            let botonesDeEditarProfesores = document.querySelectorAll(".editarProfesor")
            let cancelarEditarProfesor = document.getElementById("cancelarEditarProfesor")

            botonesDeEditarProfesores.forEach(function (botonEditarProfesor) {
                botonEditarProfesor.addEventListener("click", function () {
                    document.querySelector(".modalProfesor").style.display = "block"
                    let actualizarProfesor = document.getElementById("editarProfesor")
                    let inputNombreProfesor = document.getElementById("inputActualizarNombreProfesor")
                    let inputCorreoProfesor = document.getElementById("inputActualizarCorreoProfesor")
                    let inputClaveProfesor = document.getElementById("inputActualizarClaveProfesor")

                    actualizarProfesor.addEventListener("click", function () {
                        let nuevoNombreProfesor = inputNombreProfesor.value
                        let nuevoCorreoProfesor = inputCorreoProfesor.value
                        let nuevoClaveProfesor = inputClaveProfesor.value
                        let llamadaApiProfesores = new XMLHttpRequest;
                        llamadaApiProfesores.open("PUT", `https://68a8a66bb115e67576e978b3.mockapi.io/profesores/datosProfesores/${botonEditarProfesor.dataset.idprofesor}`);
                        llamadaApiProfesores.setRequestHeader("Content-Type", "application/json")
                        let profesorEditado = {
                            "nombre": nuevoNombreProfesor,
                            "clave": nuevoClaveProfesor,
                            "correo": nuevoCorreoProfesor
                        }
                        document.querySelector(".modalProfesor").style.display = "none"
                        alert("Profesor Editado")

                        llamadaApiProfesores.send(JSON.stringify(profesorEditado));
                    })

                    cancelarEditarProfesor.addEventListener("click", function () {
                        document.querySelector(".modalProfesor").style.display = "none"
                    })
                })

            })


        }

        catch (err) {

            console.log(err.message);
        }
    }
}
llamadaApiProfesores.send();

// Crear curso

// Crear estudiante

const crearCurso = document.getElementById("crearCurso")
let inputNombreCurso = document.getElementById("inputNombreCurso")


crearCurso.addEventListener("click", function () {
    let nombreCurso = inputNombreCurso.value
   

    let llamadaApiCursos = new XMLHttpRequest;
    llamadaApiCursos.open("POST", "https://68ab6ec77a0bbe92cbb785f6.mockapi.io/listaCursos");
    llamadaApiCursos.setRequestHeader("Content-Type", "application/json");



    let nuevoCurso= {
        "nombreCurso": nombreCurso,
    }

    llamadaApiCursos.onreadystatechange = function () {
        if (llamadaApiCursos.readyState === 4) {
            if (llamadaApiCursos.status === 201) {
                alert("Curso Creado");
                inputNombreCurso.value = ""
            
            }
        }
    };

    llamadaApiCursos.send(JSON.stringify(nuevoCurso));

})