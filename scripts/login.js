const botonEstudiante = document.getElementById("botonEstudiante")
const botonDocente = document.getElementById("botonDocente")
const botonLogin = document.getElementById("botonLogin")

let inputEmail = document.getElementById("inputEmail")
let inputClave = document.getElementById("inputClave")

botonEstudiante.addEventListener("click", function () {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container2").style.display = "flex";

    botonLogin.addEventListener("click", function () {
        let email = inputEmail.value
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
                    if(usuarioEncontrado === false){
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
})




