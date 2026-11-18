//-- MODO CLARO-------
const btnModo = document.getElementById("btnModo");
btnModo.addEventListener("click", () => {
    document.body.classList.toggle("modo-claro");
    //Cambiar el texto del boton segun el estado actual
    const modoActivo = document.body.classList.contains("modo-claro");
    btnModo.textContent = modoActivo ? "Modo Romano" : "Modo claro";
});
//seccion de comentarios

const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentsList = document.getElementById('comments-list');


commentForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Evita que la página se recargue

    const texto = commentInput.value.trim();
    if (texto === '') return; // Si está vacío, no hace nada


    const nuevoComentario = document.createElement('div');
    nuevoComentario.className = 'alert alert-light border py-2 mb-2';
    nuevoComentario.textContent = texto;


    commentsList.appendChild(nuevoComentario);


    commentInput.value = '';
});