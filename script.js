var cont = 0;

function alerta() {

    var res = document.getElementById("respuesta").value;

    while (res != 8 && cont < 4) {
        alert("Su respuesta es incorrecta.")
        cont++; // No funciona el contador.
        break;
    }

    if (cont >= 4) alert("No tiene más intentos. La respuesta correcta era 8.")

    if (res == 8) alert("La respuesta correcta es 8.");
}