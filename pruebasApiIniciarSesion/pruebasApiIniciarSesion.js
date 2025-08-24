let escojerUsuario = prompt("estudiate, profesor");


// Inicio de sesion estudiantes

if(escojerUsuario === "estudiante"){
    let contrasena = prompt("contraseña");
    let correo = prompt("correo");

    let llamadaApiEstudiantes = new XMLHttpRequest();
    llamadaApiEstudiantes.open("GET", "https://68a88e91a7e3ec06c2fc4249.mockapi.io/estudiantes/datosEstudiante")
    llamadaApiEstudiantes.onreadystatechange = function(){
        if(llamadaApiEstudiantes.readyState === 4 && llamadaApiEstudiantes.status === 200){
            try{
                let datosEstudiantes = JSON.parse(llamadaApiEstudiantes.responseText);
                for(let i = 0; i < datosEstudiantes.length; i++){
                    if (datosEstudiantes[i]["clave"] === contrasena && datosEstudiantes[i]["correo"] === correo) {
                        alert("Felicidades")
                        break;
                    }
                    else alert("usuario no encontrado") ;
                    break;
                }
            }

            catch(err){

                console.log(err.message);
            }
        }
    }
    llamadaApiEstudiantes.send();

}

// Inicio de sesion Profesores

if(escojerUsuario === "profesor"){
    let contrasena = prompt("contraseña");
    let correo = prompt("correo");

    let llamadaApiProfesores = new XMLHttpRequest();
    llamadaApiProfesores.open("GET", "https://68a8a66bb115e67576e978b3.mockapi.io/profesores/datosProfesores")
    llamadaApiProfesores.onreadystatechange = function(){
        if(llamadaApiProfesores.readyState === 4 && llamadaApiProfesores.status === 200){
            try{
                let datosProfesores = JSON.parse(llamadaApiProfesores.responseText);
                for(let i = 0; i < datosProfesores.length; i++){
                    if (datosProfesores[i]["clave"] === contrasena && datosProfesores[i]["correo"] === correo) {
                        alert("Felicidades")
                        break;
                    }
                    else alert("usuario no encontrado") ;
                    break;
                }
            }

            catch(err){

                console.log(err.message);
            }
        }
    }
    llamadaApiProfesores.send();

}