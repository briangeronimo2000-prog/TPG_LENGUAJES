//-- MODO CLARO-------
const btnModo = document.getElementById("btnModo");
btnModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-claro");
    //Cambiar el texto del boton segun el estado actual
    const modoActivo = document.body.classList.contains("modo-claro");
    btnModo.textContent = modoActivo ? "Modo Romano" : "Modo claro";
});