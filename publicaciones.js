var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

function ingresar() {
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let Login = document.getElementById("Btn-login")
    let perfil = document.getElementById("perfil");
    let verperfil = document.getElementById("verperfil");
    let publicar = document.getElementById("publicar");
    let registrarorganizacion = document.getElementById("registrarorganizacion");
    let donar = document.getElementById("donar");
    let versolicitudes = document.getElementById("versolicitudes");
    let estadisticas = document.getElementById("estadisticas");
    let enviarinfo = document.getElementById("enviarinfo");
   
        
  if (usuario === "voluntario"){
    Login.classList.add("oculto");
    perfil.classList.remove("oculto");
    donar.classList.add("oculto");
    versolicitudes.classList.add("oculto");
    estadisticas.classList.add("oculto");
    enviarinfo.classList.add("oculto");

    // cerrar el modal
    var modal = document.getElementById("staticBackdrop");
    modal.style.display = "none";
    var backdrop = document.getElementsByClassName("modal-backdrop");
  if (backdrop.length > 0) {
    backdrop[0].parentNode.removeChild(backdrop[0]);
  }
// hasta aca
  }
  else if (usuario==="organizacion"){
    Login.classList.add("oculto");
    perfil.classList.remove("oculto");
    registrarorganizacion.classList.add("oculto");
    versolicitudes.classList.add("oculto");
    estadisticas.classList.add("oculto");
    enviarinfo.classList.add("oculto");

    var modal = document.getElementById("staticBackdrop");
    modal.style.display = "none";
    var backdrop = document.getElementsByClassName("modal-backdrop");
  if (backdrop.length > 0) {
    backdrop[0].parentNode.removeChild(backdrop[0]);
  }
  }
  else if (usuario==="coordinador"){
    Login.classList.add("oculto");
    perfil.classList.remove("oculto");
    registrarorganizacion.classList.add("oculto");
    donar.classList.add("oculto");
    var modal = document.getElementById("staticBackdrop");
    modal.style.display = "none";
    var backdrop = document.getElementsByClassName("modal-backdrop");
  if (backdrop.length > 0) {
    backdrop[0].parentNode.removeChild(backdrop[0]);
  }
  }

}


prueba


