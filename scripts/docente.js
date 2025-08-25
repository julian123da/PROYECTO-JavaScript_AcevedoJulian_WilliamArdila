let modalListaTareas = document.querySelector(".modalListaTareas")
let crearTarea = document.getElementById("crearTarea")
let cancelarCrearTarea = document.getElementById("cancelarCrearTarea")
let crearTareaBoton = document.getElementById("crearTareaBoton")

let inputTipoDeTarea = document.getElementById("inputTipoDeTarea")
let inputNombreTarea = document.getElementById("inputNombreTarea")
let inputFechaTarea = document.getElementById("inputFechaTarea")

let sectionTareasCreadas = document.getElementById("sectionTareasCreadas")

let eliminarTarea = document.querySelectorAll(".eliminarTarea")

let tarjeta = document.querySelectorAll(".assignment_card")


crearTarea.addEventListener("click", function(){
    modalListaTareas.style.display = "block"


})

cancelarCrearTarea.addEventListener("click", function(){
    modalListaTareas.style.display = "none"

})

crearTareaBoton.addEventListener("click", function(){

    
    sectionTareasCreadas.innerHTML += ` 
    <div class="assignment_card">
                <div class="assignment_title">${inputTipoDeTarea.value}</div>
                <div class="assignment_description">${inputNombreTarea.value}</div>
                <div><span class="assignment_date_label">${inputFechaTarea.value}</span> <span class="assignment_date">Marzo 14, 2025</span></div>
                <a href="#" class="eliminarTarea" id="eliminarTarea">Eliminar Tarea</a>
            </div>`
})

eliminarTarea.forEach(function(botonEliminarTarea){
    botonEliminarTarea.addEventListener("click", function(){
        alert("holis")
        tarjeta.forEach(function(tarjetitas){
            tarjetitas.style.display = "none"
        })
    })
})
    
