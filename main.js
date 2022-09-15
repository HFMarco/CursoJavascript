class registro {
    constructor(id,nombre, autor, fecha, paginas, idioma, tipoarchivo){
        this.id = id;
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
        let numeroid = i + 1;
        let str = numeroid.toString();
        let id = str.padStart(4,"0");
        let nombre = prompt("Ingrese el título");
        let autor = prompt("Ingrese el autor");
        let fecha = new Date();
        let paginas = parseInt(prompt("Ingrese el número de páginas"));
        let idioma = prompt("El documento en qué idioma se encuentra");
        let tipoarchivo = prompt("Tipo de documento(pdf/doc/epub)");
        let nuevoregistro = new registro(id,nombre,autor,fecha,paginas,idioma,tipoarchivo)
        libros.push(nuevoregistro);
    }
    return libros;
    
}
function mostrardatos(libros){
    for(let libro of libros){
        console.log("<=================>")
        console.log("ID: " + libro.id)
        console.log("Nombre del libro : " + libro.nombre)
        console.log("Autor de documento: " + libro.autor)
        console.log("Fecha de subida: " + libro.fecha)
        console.log("Número de Páginas: " + libro.paginas)
        console.log("Idioma: " + libro.idioma)
        console.log("Tipo de archivo: " + libro.tipoarchivo)
        
    }
}
function main() {
    let libros = ingresardocumento()
    mostrardatos(libros)
    console.table(libros)
}
main()