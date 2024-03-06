function borrarCita(idCita) {
    let cita = document.getElementById(`cita${idCita}`);
    let botones = cita.querySelectorAll(".boton");
    for(let boton of botones) {
        boton.style.transition = "0s";
    }
    cita.style.visibility = "collapse";
    cita.style.height = 0;
    cita.style.padding = 0;
}