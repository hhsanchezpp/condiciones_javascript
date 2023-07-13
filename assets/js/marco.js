marco = false;  
function cambiomarco() {
    if (!marco) {
        imagen.style.border = "3px solid blue";
        marco = true;
    } else {
        imagen.style.border = "none";
        marco = false;
    }
}
