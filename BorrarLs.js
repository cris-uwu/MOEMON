const botonBorrar = document.getElementById("borrar-localstorage");

botonBorrar.addEventListener("click", () => {
  localStorage.clear();
});