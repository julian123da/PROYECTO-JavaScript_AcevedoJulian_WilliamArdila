const botonEstudiante = document.getElementById("botonEstudiante")
const botonDocente = document.getElementById("botonDocente")
const botonAdministrador = document.getElementById("botonAdministrador")
const botonLogin = document.getElementById("botonLogin")

let inputEmail = document.getElementById("inputEmail")
let inputClave = document.getElementById("inputClave")

botonEstudiante.addEventListener("click", function () {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container2").style.display = "flex";

    botonLogin.addEventListener("click", function () {
        let email = inputEmail.value.toLowerCase()
        let clave = inputClave.value

        let llamadaApiEstudiantes = new XMLHttpRequest();
        llamadaApiEstudiantes.open("GET", "https://68a88e91a7e3ec06c2fc4249.mockapi.io/estudiantes/datosEstudiante")
        llamadaApiEstudiantes.onreadystatechange = function () {
            if (llamadaApiEstudiantes.readyState === 4 && llamadaApiEstudiantes.status === 200) {
                try {
                    let datosEstudiantes = JSON.parse(llamadaApiEstudiantes.responseText);
                    let usuarioEncontrado = false
                    for (let i = 0; i < datosEstudiantes.length; i++) {
                        if (datosEstudiantes[i]["clave"] === clave && datosEstudiantes[i]["correo"] === email) {
                            window.location.href = "../Estudiante/estudiante.html"
                            usuarioEncontrado = true
                            break;
                        }

                    }
                    if (usuarioEncontrado === false) {
                        alert("Usuario no encontrado")
                    }
                }

                catch (err) {

                    console.log(err.message);
                }
            }
        }
        llamadaApiEstudiantes.send();

    })





})

botonDocente.addEventListener("click", function () {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container2").style.display = "flex";

    botonLogin.addEventListener("click", function(){
    let email = inputEmail.value.toLowerCase()
    let clave = inputClave.value

    let llamadaApiProfesores = new XMLHttpRequest();
    llamadaApiProfesores.open("GET", "https://68a8a66bb115e67576e978b3.mockapi.io/profesores/datosProfesores")
    llamadaApiProfesores.onreadystatechange = function () {
        if (llamadaApiProfesores.readyState === 4 && llamadaApiProfesores.status === 200) {
            try {
                let datosProfesores = JSON.parse(llamadaApiProfesores.responseText);
                let usuarioEncontrado = false
                for (let i = 0; i < datosProfesores.length; i++) {
                    if (datosProfesores[i]["clave"] === clave && datosProfesores[i]["correo"] === email) {
                        usuarioEncontrado = true
                        window.location.href = "../Estudiante/estudiante.html"
                        break;
                    }


                }
                if (usuarioEncontrado === false) {
                    alert("Usuario no encontrado")
                }
            }

            catch (err) {

                console.log(err.message);
            }
        }
    }
    llamadaApiProfesores.send();
    })
})

botonAdministrador.addEventListener("click", function(){
    window.location.href = "../administrador/administrador.html"
})


