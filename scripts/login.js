const botonEstudiante = document.getElementById("botonEstudiante")
const botonDocente = document.getElementById("botonDocente")

botonEstudiante.addEventListener("click", function(){
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container2").style.display = "flex";
})
    
botonDocente.addEventListener("click", function(){
    document.querySelector(".container").style.display = "none";
    document.querySelector(".container2").style.display = "flex";
})
    



