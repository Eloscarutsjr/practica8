var regexNombre = /^[A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}([ ][A-ZÁÉÍÓÚÑ'][a-záéíóúñ']{1,}){0,}$/;
var regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var regexTelefonoNacional = /^\d{10}$/;

var nombre=document.getElementById("nombre");
var mensajeNombre=document.getElementsByTagName("mensajeNombre")[0];
var tacheNombre=document.getElementsByTagName("tacheNombre")[0];
var buenaNombre=document.getElementsByTagName("buenaNombre")[0];

var celular=document.getElementById("celular");
var mensajeCelular=document.getElementsByTagName("mensajeCelular")[0];
var tacheCelular=document.getElementsByTagName("tacheCelular")[0];
var buenaCelular=document.getElementsByTagName("buenaCelular")[0];

var correo=document.getElementById("correo");
var mensajeCorreo=document.getElementsByTagName("mensajeCorreo")[0];
var tacheCorreo=document.getElementsByTagName("tacheCorreo")[0];
var buenaCorreo=document.getElementsByTagName("buenaCorreo")[0];

nombre.addEventListener("blur", ()=>{
    if (!regexNombre.test(nombre.value)) {
        mensajeNombre.classList.remove("ocultar");
        nombre.classList.add("input-tache");
        tacheNombre.classList.remove("ocultar");
        buenaNombre.classList.add("ocultar");
        nombre.classList.remove("input-buena");
  }
  else{
    mensajeNombre.classList.add("ocultar");
    nombre.classList.add("input-buena");
    nombre.classList.remove("input_tache");
    tacheNombre.classList.add("ocultar");
    buenaNombre.classList.remove("ocultar");
  }
});

celular.addEventListener("blur", ()=>{
    if (!regexCelular.test(celular.value)) {
        mensajeCelular.classList.remove("ocultar");
        celular.classList.add("input-tache");
        tacheCelular.classList.remove("ocultar");
        buenaCelular.classList.add("ocultar");
        celular.classList.remove("input-buena");
  }
  else{
    mensajeCelular.classList.add("ocultar");
    celular.classList.add("input-buena");
    celular.classList.remove("input_tache");
    tacheCelular.classList.add("ocultar");
    buenaCelular.classList.remove("ocultar");
  }
});

correo.addEventListener("blur", ()=>{
    if (!regexCorreo.test(nombre.value)) {
        mensajeCorreo.classList.remove("ocultar");
        correo.classList.add("input-tache");
        tacheCorreo.classList.remove("ocultar");
        buenaCorreo.classList.add("ocultar");
        correo.classList.remove("input-buena");
  }
  else{
    mensajeCorreo.classList.add("ocultar");
    correo.classList.add("input-buena");
    correo.classList.remove("input_tache");
    tacheCorreo.classList.add("ocultar");
    buenaCorreo.classList.remove("ocultar");
  }
});