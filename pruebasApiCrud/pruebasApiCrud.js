let opcion = prompt("crear, eliminar, editar");

if(opcion === "editar"){

    let idProfesor = prompt("idprofesor")
    let nombre = prompt("nombre");
    let clave = prompt("clave");
    let correo = prompt("correo");

    let llamadaApiProfesores = new XMLHttpRequest;
    llamadaApiProfesores.open("PUT", `https://68a8a66bb115e67576e978b3.mockapi.io/profesores/datosProfesores/${idProfesor}`);
    llamadaApiProfesores.setRequestHeader("Content-Type", "application/json")
    let profesorEditado = {
        "nombre":nombre,
        "clave":clave,
        "correo":correo
    }
    
    llamadaApiProfesores.send(JSON.stringify(profesorEditado));
}




if(opcion === "crear"){

    
    let nombre = prompt("nombre");
    let clave = prompt("clave");
    let correo = prompt("correo");

    let llamadaApiProfesores = new XMLHttpRequest;
    llamadaApiProfesores.open("POST", "https://68a8a66bb115e67576e978b3.mockapi.io/profesores/datosProfesores");
    
    

     let nuevoProfesor = {
                    "nombre":nombre,
                    "clave":clave,
                    "correo":correo
                }

    llamadaApiProfesores.send(JSON.stringify(nuevoProfesor));
}