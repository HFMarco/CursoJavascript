//Creando el constructor
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
let libros = ingresardocumento()
//Pide data
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

//Señalando DIV principal
let contenedorlibros = document.getElementById("mostrardocs");
//Muestra data en el DOM
libros.forEach((libro) => {
    let lista = document.createElement("div");
    lista.className = "elemento-lista"
    lista.id = `lista lista-${libro.id}`
    lista.innerHTML=`
    <div class="contenedor">
        <p class="p-titulo">${libro.nombre}</p>
        <p class="p-lista">ID: ${libro.id}</p>
        <p class="p-lista">Autor: ${libro.autor}</p>
        <p class="p-lista">Fecha: ${libro.fecha}</p>
        <p class="p-lista">Páginas: ${libro.paginas}</p>
        <p class="p-lista">Idioma: ${libro.idioma}</p>
        <p class="p-lista">Tipo de Archivo: ${libro.tipoarchivo}</p>
    </div>
    `
    contenedorlibros.append(lista)
});



