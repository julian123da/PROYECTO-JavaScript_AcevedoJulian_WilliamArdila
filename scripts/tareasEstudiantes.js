let tareasDejadas = document.getElementById("tareasDejadas")

let llamadoApiTareas = new XMLHttpRequest
llamadoApiTareas.open("GET", "https://68acf07fb996fea1c08b36dd.mockapi.io/listaTarea")


llamadoApiTareas.onreadystatechange = function () {
    if (llamadoApiTareas.readyState === 4) {
        if (llamadoApiTareas.status === 200) {

            let datosTareas = JSON.parse(llamadoApiTareas.responseText);
            for (let i = 0; i < datosTareas.length; i++) {
                tareasDejadas.innerHTML += ` 
                <div class="assignment_item">
                <div class="assignment_info">
                    <div class="assignment_title"><a href="./EntregaTarea.html">${datosTareas[i]["tipoTarea"]}: ${datosTareas[i]["nombreTarea"]} (Pendiente)</a>
                    </div>
                    <div class="assignment_date">Fecha: <span class="date_highlight">${datosTareas[i]["fechaTarea"]}</span></div>
                </div>
            </div>`


            }
           

        }
    }
}
llamadoApiTareas.send();