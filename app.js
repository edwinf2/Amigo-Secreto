// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.value.trim();

    // Validaciones: no permitir nombres vacíos ni duplicados
    if (!nombre) {
        alert("Por favor, ingrese un nombre válido.");
        return;
    }
    if (amigos.includes(nombre)) {
        alert("Este nombre ya fue agregado.");
        return;
    }

    // Agregar el nombre al array y actualizar la lista visual
    amigos.push(nombre);
    actualizarListaAmigos();

    // Limpiar el campo de entrada y enfocar nuevamente
    inputAmigo.value = "";
    inputAmigo.focus();
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}
// Función para sortear un solo amigo
function sortearAmigo() {
    if (amigos.length < 1) {
        alert("Necesitas al menos un amigo para sortear.");
        return;
    }

    // Selecciona aleatoriamente un índice
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    // Quitar la lista de amigos
    document.getElementById("listaAmigos").innerHTML = "";

    // Mostrar el resultado en el elemento con id "resultado"
    document.getElementById("resultado").innerHTML = `<li>El amigo sorteado es: "${amigoSorteado}"</li>`;
}