# Encriptador de Texto

## Descripción

Este proyecto es una aplicación web que permite encriptar y desencriptar texto usando una serie de transformaciones simples. La aplicación también proporciona la opción de copiar el texto desencriptado al portapapeles. Es una herramienta útil para aprender y practicar el manejo de texto y funciones en JavaScript.

## Funcionalidades

- **Encriptar Texto**: Convierte texto simple en texto encriptado usando reemplazos específicos.
- **Desencriptar Texto**: Convierte texto encriptado de vuelta a su forma original.
- **Copiar Texto**: Permite copiar el texto desencriptado al portapapeles para su uso en otras aplicaciones.

## Tecnologías Utilizadas

- **HTML5**: Estructura del contenido.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript**: Lógica de encriptación, desencriptación y copia al portapapeles.

## Uso

1. **Encriptar Texto**:
    - Escribe el texto que deseas encriptar en el campo "Deja tu mensaje".
    - Haz clic en el botón **Encriptar**.
    - El texto encriptado aparecerá en el campo de "Mensaje Para encriptar o desencriptar".

2. **Desencriptar Texto**:
    - Escribe el texto encriptado en el campo "Mensaje Para encriptar o desencriptar".
    - Haz clic en el botón **Desencriptar**.
    - El texto desencriptado aparecerá en el mismo campo.

3. **Copiar Texto**:
    - Después de desencriptar el texto, haz clic en el botón **Copiar** para copiar el texto desencriptado al portapapeles.

## Estructura del Proyecto

- **index.html**: Contiene la estructura HTML de la aplicación.
- **styles/style.css**: Contiene los estilos CSS para la aplicación.
- **index.js**: Contiene el código JavaScript para las funcionalidades de encriptación, desencriptación y copia al portapapeles.

## Artista

- **Gracias al artista que hizo el background** (No se conoce el autor original).

## Detalles de Implementación

### HTML5

- Se añadieron dos áreas de texto: una para ingresar el texto y otra solo para mostrar el resultado.
- Se agregaron tres botones con diferentes funcionalidades: encriptar, desencriptar y copiar.

### CSS3

- Se estilizó la página y la mayoría de los elementos para mejorar la apariencia y la usabilidad.
- Se implementó un diseño responsivo para adaptarse a diferentes tamaños de pantalla.

### JavaScript

- Se añadió la función `copiarTexto` para copiar el mensaje desencriptado al portapapeles.
- Se implementó la función `encriptar` que no acepta mayúsculas, caracteres especiales y limita el texto a un máximo de 200 caracteres.
- Se añadió la función `desencriptar` que no permite desencriptar un texto vacío.

