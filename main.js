//Creando el constructor

libros = [];
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
//Almacena data
function ingresardocumento() {
    formulario = document.getElementById("formulario");
    id = document.getElementById("inputId");
    nombre = document.getElementById("inputNombre");
    autor = document.getElementById("inputAutor");
    fecha = document.getElementById("inputFecha");
    paginas = document.getElementById("inputPaginas");
    idioma = document.getElementById("inputIdioma");
    tipoarchivo = document.getElementById("inputTipoArchivo");
}
function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
}
function validarFormulario(event) {
    event.preventDefault();
    let id = inputID.value;
    let nombre = inputNombre.value;
    let autor = inputAutor.value;
    let fecha = parseFloat(inputFecha.value);
    let paginas = parseFloat(inputPaginas.value);
    let idioma = parseInt(inputIdioma.value);
    let tipoarchivo = parseInt(inputTipoArchivo.value);

    const idExiste = libros.some((libro) => libro.id === id);
    if (!idExiste) {
        let libro = new registro(
            id,
            nombre,
            autor,
            fecha,
            paginas,
            idioma,
            tipoarchivo
        );

        libros.push(libro);
        formulario.reset();

        pintarProductos();
    } else {
        alert("El id ya existe");
    }
}
// function eliminarProducto(idProducto) {
//     let columnaBorrar = document.getElementById(`columna-${idProducto}`);
//     let indiceBorrar = productos.findIndex(
//         (producto) => Number(producto.id) === Number(idProducto)
//     );

//     productos.splice(indiceBorrar, 1);
//     columnaBorrar.remove();
// }

function pintarProductos() {
    let contenedorlibros = document.getElementById("mostrardocs");
    contenedorlibros.innerHTML = "";
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
        // let botonEliminar = document.getElementById(`botonEliminar-${producto.id}`);
        // botonEliminar.onclick = () => eliminarProducto(producto.id);
    });
}

function main() {
    ingresardocumento();
    inicializarEventos();
}

main();
// //Señalando DIV principal
// let contenedorlibros = document.getElementById("mostrardocs");
// //Muestra data en el DOM
// libros.forEach((libro) => {
//     let lista = document.createElement("div");
//     lista.className = "elemento-lista"
//     lista.id = `lista lista-${libro.id}`
//     lista.innerHTML=`
//     <div class="contenedor">
//         <p class="p-titulo">${libro.nombre}</p>
//         <p class="p-lista">ID: ${libro.id}</p>
//         <p class="p-lista">Autor: ${libro.autor}</p>
//         <p class="p-lista">Fecha: ${libro.fecha}</p>
//         <p class="p-lista">Páginas: ${libro.paginas}</p>
//         <p class="p-lista">Idioma: ${libro.idioma}</p>
//         <p class="p-lista">Tipo de Archivo: ${libro.tipoarchivo}</p>
//     </div>
//     `
//     contenedorlibros.append(lista)
// });





