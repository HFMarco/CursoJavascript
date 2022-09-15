class Registro {
    base(nombre,autor,fecha,paginas,idioma,tipoarchivo){
        this.nombre = nombre.toUpperCase();
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
    for (let i = 0; i < numeroentradas; i++){
    let nombre = prompt("Ingrese el título");
    let autor = prompt("Ingrese el autor");
    let fecha = prompt("sds")
    let paginas = parseInt(prompt("Ingrese el número de páginas"));
    let idioma = prompt("El documento en qué idioma se encuentra");
    let tipoarchivo = prompt("Tipo de documento(pdf/doc/epub)");
    let nuevoregistro = new Registro(nombre,autor,fecha,paginas,idioma,tipoarchivo);
    libros.push(nuevoregistro)
    }
    return libros
}
function registrodata(libros){
    for(let libro of libros){
        console.log(libro)
    }
}
function main(){
    let libros = ingresardocumento()
    registrodata(libros)
}

main()