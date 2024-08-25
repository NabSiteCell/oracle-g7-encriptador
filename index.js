function copiarTexto() {
    // Selecciona el contenido del textarea
    let texto = document.getElementById('mensaje-desencriptado').value;

    if (texto.length === 0) {
        alert("No hay texto para copiar");
        return;
    }

    // Usa la API de Clipboard para copiar el texto
    navigator.clipboard.writeText(texto).then(() => {  
        console.log('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Verifica los permisos para escribir en el portapapeles
navigator.permissions.query({ name: "clipboard-write" }).then((resultado) => {
    if (resultado.state == "granted" || resultado.state == "prompt") {
        console.log("¡Permiso de escritura concedido!");
    }
});

function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
   

    if (texto.length === 0) {
        alert("Debes ingresar un texto para encriptar");
        return;
    }

    if (texto.length > 200) {
        alert("El texto no puede tener más de 200 caracteres");
        return;
    }

    // Verificar si hay mayúsculas o acentos
    if (/[A-ZÁÉÍÓÚáéíóú]/.test(texto)) {
        alert("Se han detectado caracteres no válidos");
        return;
    }

    let textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    document.getElementById("mensaje-desencriptado").value = textoCifrado;
    tituloMensaje.textContent = "Texto encriptado con éxito";
    if (parrafo) parrafo.textContent = "";
    
}


function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    

    if (texto.length === 0) {
        alert("Debes ingresar un texto para desencriptar");
        return;
    }

    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    document.getElementById("texto").value = textoCifrado;
    document.getElementById("mensaje-desencriptado").value = textoCifrado;
    tituloMensaje.textContent = "Texto desencriptado con éxito";
    if (parrafo) parrafo.textContent = "";
    
}
