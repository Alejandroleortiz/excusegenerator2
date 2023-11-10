# README

## Generador de Excusas en JavaScript

Este proyecto es un pequeño ejercicio diseñado para practicar la manipulación del DOM (Document Object Model) utilizando JavaScript. Consiste en un generador de excusas humorísticas que muestra una excusa aleatoria cada vez que se carga la página.

### Descripción

El generador de excusas crea frases cómicas combinando elementos aleatorios de cuatro listas diferentes: sujetos (`who`), acciones (`action`), objetos (`what`) y circunstancias (`when`). Estos elementos se eligen al azar para formar una excusa que se muestra en la página web.

### Estructura del Código

El código se compone de una función principal que se ejecuta cuando la ventana (`window`) termina de cargar. Dentro de esta función, se declara la función `excuseGenerator` y se ejecuta inmediatamente después. La lógica para generar la excusa se encuentra dentro de `excuseGenerator`.

#### Detalles de `excuseGenerator`:

- **Arrays de Excusas**: Cuatro arrays (`who`, `action`, `what`, `when`) contienen los diferentes elementos que se combinan para formar la excusa.

- **Selección Aleatoria**: Cada parte de la excusa (sujeto, acción, objeto, circunstancia) se selecciona al azar de su respectivo array.

- **Manipulación del DOM**: Se selecciona el elemento HTML con el ID `#excuse` y se actualiza su contenido (`innerHTML`) con la excusa generada.

### Uso

Para utilizar este generador de excusas, simplemente carga la página web. Una excusa aleatoria aparecerá en el elemento con el ID `excuse`. Recarga la página para generar una nueva excusa.

### Tecnologías Utilizadas

- HTML: Para la estructura de la página.
- CSS (opcional): Para el estilo de la página.
- JavaScript: Para la lógica del generador de excusas y la manipulación del DOM.

