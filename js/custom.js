function cargarFragmento(idElemento, archivo) {
    fetch(archivo)
        .then(respuesta => respuesta.text())
        .then(contenido => {
            document.getElementById(idElemento).innerHTML = contenido;
        })
    .catch(error => console.error(`Error cargando ${archivo}:` , error));
}