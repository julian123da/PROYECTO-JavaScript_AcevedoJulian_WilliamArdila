let modalListaTareas = document.querySelector(".modalListaTareas")
let crearTarea = document.getElementById("crearTarea")
let cancelarCrearTarea = document.getElementById("cancelarCrearTarea")
let crearTareaBoton = document.getElementById("crearTareaBoton")

let inputTipoDeTarea = document.getElementById("inputTipoDeTarea")
let inputNombreTarea = document.getElementById("inputNombreTarea")
let inputFechaTarea = document.getElementById("inputFechaTarea")

let sectionTareasCreadas = document.getElementById("sectionTareasCreadas")



crearTarea.addEventListener("click", function () {
    modalListaTareas.style.display = "block"


})

cancelarCrearTarea.addEventListener("click", function () {
    modalListaTareas.style.display = "none"

})

crearTareaBoton.addEventListener("click", function () {

    let llamadoApiTareas = new XMLHttpRequest
    llamadoApiTareas.open("POST", "https://68acf07fb996fea1c08b36dd.mockapi.io/listaTarea")
    llamadoApiTareas.setRequestHeader("Content-Type", "application/json")

    let crearNuevaTarea = {
        "tipoTarea": inputTipoDeTarea.value,
        "nombreTarea": inputNombreTarea.value,
        "fechaTarea": inputFechaTarea.value
    }

    llamadoApiTareas.onreadystatechange = function () {
        if (llamadoApiTareas.readyState === 4) {
            if (llamadoApiTareas.status === 201) {
                alert("Tarea Creada")
    

            }
        }
    }

    llamadoApiTareas.send(JSON.stringify(crearNuevaTarea));







})

let llamadoApiTareas = new XMLHttpRequest
llamadoApiTareas.open("GET", "https://68acf07fb996fea1c08b36dd.mockapi.io/listaTarea")


llamadoApiTareas.onreadystatechange = function () {
    if (llamadoApiTareas.readyState === 4) {
        if (llamadoApiTareas.status === 200) {

            let datosTareas = JSON.parse(llamadoApiTareas.responseText);
            for (let i = 0; i < datosTareas.length; i++) {
                sectionTareasCreadas.innerHTML += ` 
    <div class="assignment_card">
                <div class="assignment_title">${datosTareas[i]["tipoTarea"]}</div>
                <div class="assignment_description">${datosTareas[i]["nombreTarea"]}</div>
                <div><span class="assignment_date_label">Fecha</span> <span class="assignment_date">${datosTareas[i]["fechaTarea"]}</span></div>
                <a href="#" class="eliminarTarea" data-id="${datosTareas[i]["id"]}">Eliminar Tarea</a>
            </div>`


            }
            let eliminarTarea = document.querySelectorAll(".eliminarTarea")



            eliminarTarea.forEach(function (botonEliminarTarea) {
                botonEliminarTarea.addEventListener("click", function () {
                    let llamadoApiTareas = new XMLHttpRequest;
                    llamadoApiTareas.open("DELETE", `https://68acf07fb996fea1c08b36dd.mockapi.io/listaTarea/${botonEliminarTarea.dataset.id}`);
                    llamadoApiTareas.onreadystatechange = function () {
                        if (llamadoApiTareas.readyState === 4) {
                            if (llamadoApiTareas.status === 200) {
                                botonEliminarTarea.parentElement.remove()
                                alert("Tarea Eliminada");

                            }
                            else { alert("no") }
                        }
                    };


                    llamadoApiTareas.send();
                })
            })

        }
    }
}




llamadoApiTareas.send();






