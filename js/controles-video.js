function mutear() {
    let img = document.getElementById("mutear");
    let ruta = img.src.split("/");
    let src = ruta[ruta.length - 1];
    if (src == "mutear.svg") img.src = "./img/desmutear.svg";
    else img.src = "./img/mutear.svg";
}

function silenciar() {
    let img = document.getElementById("silenciar");
    let ruta = img.src.split("/");
    let src = ruta[ruta.length - 1];
    if (src == "silenciar.svg") img.src = "./img/dessilenciar.svg";
    else img.src = "./img/silenciar.svg";
}