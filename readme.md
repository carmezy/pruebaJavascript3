Ejercicio teórico 1:
Explica qué es el DOM (Document Object Model) y cómo se utiliza en JavaScript para interactuar con el HTML.

El DOM (Document Object Model) es una representación estructurada de un documento HTML o XML en forma de un árbol jerárquico. Cada elemento HTML, atributo y texto dentro del documento se convierte en un nodo dentro de este árbol.

¿Cómo se utiliza en JavaScript?

JavaScript utiliza el DOM para interactuar y manipular el contenido, estructura y estilo de una página web de manera dinámica. A través del DOM, puedes:

Seleccionar elementos: Usar métodos como getElementById, querySelector, etc., para acceder a elementos específicos.
Modificar contenido: Cambiar el texto o atributos de los elementos con propiedades como textContent o setAttribute.
Estilizar elementos: Modificar estilos directamente usando la propiedad style.
Agregar o eliminar elementos: Crear nuevos nodos con createElement y agregarlos al documento con appendChild o eliminarlos con removeChild.

Escuchar eventos: Asignar manejadores de eventos como addEventListener para responder a interacciones del usuario.
El DOM es esencial para crear páginas web dinámicas e interactivas.

Ejercicio teórico 2:
Describe los diferentes métodos de selección de elementos HTML en JavaScript.

En JavaScript, existen varios métodos para seleccionar elementos HTML en el DOM. Estos son los más comunes:

getElementById:

Selecciona un elemento por su atributo id.
Devuelve un único elemento.

getElementsByClassName:

Selecciona todos los elementos que tienen una clase específica.
Devuelve una colección HTML (HTMLCollection).

getElementsByTagName:

Selecciona todos los elementos con una etiqueta específica (por ejemplo, div, p, etc.).
Devuelve una colección HTML.

querySelector:

Selecciona el primer elemento que coincide con un selector CSS.
Devuelve un único elemento.

querySelectorAll:

Selecciona todos los elementos que coinciden con un selector CSS.
Devuelve una NodeList (similar a un array).

Diferencias clave:
getElementById es más rápido para seleccionar un único elemento por id.
querySelector y querySelectorAll son más flexibles porque permiten usar selectores CSS complejos.
getElementsByClassName y getElementsByTagName devuelven colecciones dinámicas, mientras que querySelectorAll devuelve una NodeList estática.

Ejercicio teórico 3:
Explica cómo se pueden modificar los estilos de los elementos HTML utilizando JavaScript.

En JavaScript, puedes modificar los estilos de los elementos HTML utilizando la propiedad style del DOM. Esta propiedad permite acceder y cambiar los estilos en línea de un elemento.

Métodos para modificar estilos:
Modificar propiedades individuales:

Puedes cambiar propiedades CSS directamente utilizando la propiedad style del elemento.

Agregar múltiples estilos con cssText:

Puedes establecer varios estilos a la vez utilizando la propiedad style.cssText.

Clases CSS:

En lugar de modificar estilos directamente, puedes agregar o quitar clases CSS predefinidas utilizando classList.

Obtener estilos computados:

Para obtener los estilos actuales (computados) de un elemento, puedes usar getComputedStyle.

