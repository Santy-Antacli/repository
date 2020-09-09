var cont = 0;

function alerta() {

    var res = document.getElementById("respuesta").value;
    var etq = document.getElementById("etq");

    while (res != 8 && cont < 4) {
        
        if(cont==0) {
            alert("Su respuesta es incorrecta.");
            etq.innerHTML="Tiene tres intentos."
        }
        if(cont==1) {
            alert("Su respuesta es incorrecta. Pista: Es un número par.");
            etq.innerHTML="Tiene dos intentos."
        }
        if(cont==2) {
            alert("Su respuesta es incorrecta. Pista: Es un número menor a 10.");
            etq.innerHTML="Tiene un intento."
        }
        if(cont==3) {
            alert("Su respuesta es incorrecta. La respuesta correcta era 8.");
            etq.innerHTML="No tiene más intentos."
        }
        cont++;
        break;
    }

    if (res == 8 && cont <4) {
        alert("Felicitaciones. La respuesta correcta es 8.");
        cont=4;
        etq.innerHTML="No tiene más intentos."
    }
}