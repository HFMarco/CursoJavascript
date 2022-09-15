class registro {
    constructor(nombre, autor, fecha, paginas, idioma, tipoarchivo){
        this.nombre = nombre;
        this.autor = autor;
        this.fecha = fecha;
        this.paginas = paginas;
        this.idioma = idioma;
        this.tipoarchivo = tipoarchivo;
    }
}

function ingresardocumento() {
    let libros = [];
    let numeroentradas = parseInt(prompt("¿Cuántos documentos desea almacenar?"));
    for (let i = 0; i < numeroentradas; i++) {
        let nombre = prompt("Ingrese el título");
        let autor = prompt("Ingrese el autor");
        let fecha = prompt("Ingresar la fecha");
        let paginas = prompt("Ingrese el número de páginas");
        let idioma = prompt("El documento en qué idioma se encuentra");
        let tipoarchivo = prompt("Tipo de documento(pdf/doc/epub)");
        let nuevoregistro = new registro(nombre,autor,fecha,paginas,idioma,tipoarchivo)
        libros.push(nuevoregistro);
    }

    return libros
}



function main() {
    let libros = ingresardocumento()
    console.log(libros)
}

main()