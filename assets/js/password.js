function password() {
    const num_1 = parseInt(document.getElementById("valor_1").value);
    const num_2 = parseInt(document.getElementById("valor_2").value);
    const num_3 = parseInt(document.getElementById("valor_3").value);
    const parrafo1 = document.getElementById("boton_password");

    if (num_1 == 9 && num_2 == 1 && num_3 == 1) {
        parrafo1.innerHTML = "Combinación 1 es correcto"
        parrafo1.style.color = "green";
    } else if (num_1 == 7 && num_2 == 1 && num_3 == 4) {
        parrafo1.innerHTML = "Combinacion 2 es correcto"
        parrafo1.style.color = "green";
    } else {
        parrafo1.innerHTML = "La Combinación es incorrecta, intenta nuevamente"
        parrafo1.style.color = "red";
    }

}