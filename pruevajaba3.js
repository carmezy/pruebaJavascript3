
// Ejercicio práctico 1:
// Selecciona un elemento HTML específico en la página web utilizando diferentes métodos de selección.

// Selección por ID
const elementoPorId = document.getElementById('miId');
console.log('Elemento por ID:', elementoPorId);

// Selección por clase
const elementosPorClase = document.getElementsByClassName('miClase');
console.log('Elementos por clase:', elementosPorClase);

// Selección por etiqueta
const elementosPorEtiqueta = document.getElementsByTagName('div');
console.log('Elementos por etiqueta:', elementosPorEtiqueta);

// Selección con querySelector
const elementoQuery = document.querySelector('.miClase');
console.log('Elemento con querySelector:', elementoQuery);

// Selección con querySelectorAll
const elementosQueryAll = document.querySelectorAll('div.miClase');
console.log('Elementos con querySelectorAll:', elementosQueryAll);


// Ejercicio práctico 2:
// Modifica el contenido de un elemento HTML seleccionado utilizando JavaScript.

if (elementoPorId) {
    elementoPorId.textContent = 'Este es el nuevo contenido del elemento con ID "miId".';
}


// Ejercicio práctico 3:
// Agrega un nuevo elemento HTML a la página web utilizando JavaScript.

const nuevoElemento = document.createElement('p');
nuevoElemento.textContent = 'Este es un nuevo párrafo agregado dinámicamente.';
document.body.appendChild(nuevoElemento);