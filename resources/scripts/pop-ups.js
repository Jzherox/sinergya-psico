function cambiarEstilo1(event) {
    event.preventDefault();
    var cuadro = document.getElementById("cuadro-1");
    cuadro.style.display = "flex";
  }
  function cambiarEstilo11(event) {
      event.preventDefault();
      var cuadro = document.getElementById("cuadro-1");
      cuadro.style.display = "none";   
}
  
function copiarAlPortapapeles1() {
    var texto1 = "+593 96 207 3715";
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto1;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
    var copiar1 = document.getElementById("copiar1");
    copiar1.innerHTML = "Copiado";
    copiar1.removeAttribute("onclick");
    copiar1.style.background = "#14ac00";
    copiar1.style.boxshadow = "0px 0px 10px #14ac00";
}



function cambiarEstilo2(event) {
    event.preventDefault(); 
    var cuadro = document.getElementById("cuadro-2");
    cuadro.style.display = "flex";
  }
  function cambiarEstilo22(event) {
    event.preventDefault();
    var cuadro = document.getElementById("cuadro-2");
    cuadro.style.display = "none";
}

function copiarAlPortapapeles2() {
    var texto2 = "096 207 3715";
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto2;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
    var copiar2 = document.getElementById("copiar2");
    copiar2.innerHTML = "Copiado";
    copiar2.removeAttribute("onclick");
    copiar2.style.background = "#14ac00";
    copiar2.style.boxshadow = "0px 0px 10px #14ac00";
}



function cambiarEstilo3(event) {
    event.preventDefault();
    var cuadro = document.getElementById("cuadro-3");
    cuadro.style.display = "flex";
  }
  function cambiarEstilo33(event) {
    event.preventDefault();
    var cuadro = document.getElementById("cuadro-3");
    cuadro.style.display = "none";
}

function copiarAlPortapapeles3() {
    var texto3 = "psi.jballadaresm01@gmail.com";
    var elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = texto3;
    document.body.appendChild(elementoTemporal);
    elementoTemporal.select();
    document.execCommand("copy");
    document.body.removeChild(elementoTemporal);
    var copiar3 = document.getElementById("copiar3");
    copiar3.innerHTML = "Copiado";
    copiar3.removeAttribute("onclick");
    copiar3.style.background = "#14ac00";
    copiar3.style.boxshadow = "0px 0px 10px #14ac00";
}