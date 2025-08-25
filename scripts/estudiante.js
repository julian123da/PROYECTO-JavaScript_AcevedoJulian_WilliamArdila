let tarjetasCursos = document.getElementById("tarjetasCursos")


const listaCursos = document.getElementById("listaCursos")

let llamadaApiCursos = new XMLHttpRequest();
llamadaApiCursos.open("GET", "https://68ab6ec77a0bbe92cbb785f6.mockapi.io/listaCursos")
llamadaApiCursos.onreadystatechange = function () {
    if (llamadaApiCursos.readyState === 4 && llamadaApiCursos.status === 200) {
        try {
            let datosCursos = JSON.parse(llamadaApiCursos.responseText);
            for (let i = 0; i < datosCursos.length; i++) {
                tarjetasCursos.innerHTML += ` 
            

        
           <div class="course_card">
      <div class="course_header course_matematicas">
          <p>${datosCursos[i]["nombreCurso"]}</p>
      </div>
      <div class="course_body">
          <div class="course_info">10 lecciones</div>
          <div class="progress_bar">
              <div class="progress_fill_matematicas"></div>
          </div>
           <a href="./tareaEstu.html" class="enter_button">Entrar</a>
      </div>
  </div>
`





            }

            














        }

        catch (err) {

            console.log(err.message);
        }
    }
}
llamadaApiCursos.send();

