let escojerUsuario = prompt("estudiate, profesor");

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