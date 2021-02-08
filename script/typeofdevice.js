
let mql = window.matchMedia("(max-width: 900px)");
let mql1 = window.matchMedia("(max-width: 1400px)");

function textChange () {
    if(mql.matches) {
        $("h4").text("Móvil");
    } else if (mql1.matches){ 
        $("h4").text("Tablet");
    }
    else {
        $("h4").text("PC");
    }
}
// Que cambie el texto al cambiar el tamaño de pantalla
window.addEventListener("resize", textChange);

// Que cambie el texto al entrar en la web
window.onload = textChange;