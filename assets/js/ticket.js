function calcular() {
    const a = 10;
    const ticketone = parseInt(document.getElementById("num_1").value);
    const tickettwo = parseInt(document.getElementById("num_2").value);
    const ticketthree = parseInt(document.getElementById("num_3").value);
    const texto_mensaje = document.getElementById("boton_ticket");
    const suma = ticketone + tickettwo + ticketthree;
    if (ticketone < 0 || tickettwo < 0 || ticketthree < 0) {
        alert("El numero ingresado debe ser mayor o igual de 0");
    } else if (suma <= a) {
        texto_mensaje.innerHTML = "Compraste : " + suma;
        texto_mensaje.style.color = "green";
    } else {
        texto_mensaje.innerHTML = "Llevas demasiados tickets!!";
        texto_mensaje.style.color = "red";
    }

}