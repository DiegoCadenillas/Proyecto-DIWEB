function enviarMensaje() {
    let mensajes = document.getElementById("mensajes");
    let mensajesActuales = mensajes.children;
    let mensaje = document.getElementById("mensaje");
    if (mensaje.value != "") {
        if (mensajesActuales[0].id == "mensaje-inicial") mensajes.innerHTML = "";
        mensajes.innerHTML += `<p><b>Usuario:</b> ${mensaje.value}</p>`;
        mensaje.value = '';
    }
}