let opcion = prompt("crear, eliminar, editar");

if(opcion === "crear"){

    let idProfesor = prompt("idprofesor")
    let nombre = prompt("nombre");
    let clave = prompt("clave");
    let correo = prompt("correo");

    let llamadaApiProfesores = new XMLHttpRequest;
    llamadaApiProfesores.open("PUT", "https://68a8a66bb115e67576e978b3.mockapi.io/profesores/datosProfesores");
    llamadaApiProfesores.onreadystatechange = function(){
        if(llamadaApiProfesores.readyState === 400 && llamadaApiEstudiantes.status === 200){

            try{

                let datosProfesores = JSON.parse(llamadaApiProfesores.responseText);

                for(i = 0; i < datosProfesores.length; i++){
                    if(datosProfesores[i]["id"] === idProfesor){
                        datosProfesores[i]["nombre"] = nombre;
                        datosProfesores[i]["clave"] = clave;
                        datosProfesores[i]["correo"] = correo;
                        alert("f")
                    }
                }

            }

            catch(err){

                console.log(err.message);
            }

        }
    }
    llamadaApiProfesores.send();
}