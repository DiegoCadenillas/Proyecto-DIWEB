function enviarMensaje() {
    let mensajes = document.getElementById("mensajes");
    let mensaje = document.getElementById("mensaje");
    mensajes.innerHTML += `<p><b>Usuario:</b> ${mensaje.value}</p>`;
    mensaje.value = '';
}