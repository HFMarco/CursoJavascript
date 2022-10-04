function valorID() {
    inputID.value++;
}

function disminuirID() {
    inputID.value--;
    return inputID.value;
}
//Inici. Variables
libros = [];
let usuario;

let formularioIdentificacion;
let contenedorIdentificacion;
let contenedorUsuario;
let textoUsuario;
let limpiarStorage;
//Constructor:
class registro {
    constructor(id, nombre, autor, fecha, paginas, idioma, tipoarchivo) {
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
    formularioIdentificacion = document.getElementById("formularioIdentificacion");
    inputUsuario = document.getElementById("inputUsuario");
    contenedorIdentificacion = document.getElementById("contenedorIdentificacion");
    contenedorUsuario = document.getElementById("contenedorUsuario");
    textoUsuario = document.getElementById("textoUsuario");

    formulario = document.getElementById("formulario");
    id = document.getElementById("inputID");
    nombre = document.getElementById("inputNombre");
    autor = document.getElementById("inputAutor");
    fecha = document.getElementById("inputFecha");
    paginas = document.getElementById("inputPaginas");
    idioma = document.getElementById("inputIdioma");
    tipoarchivo = document.getElementById("inputTipoArchivo");

    btneliminardata = document.getElementById("eliminardataregistro");
    btneliminarusuario = document.getElementById("eliminardatausuario");
}

function inicializarEventos() {
    formulario.onsubmit = (event) => validarFormulario(event);
    formularioIdentificacion.onsubmit = (event) => identificarUsuario(event);
    btneliminardata.onclick = eliminardata;
    btneliminarusuario.onclick = eliminarusuario;
}
function eliminarusuario(){
    localStorage.clear(localStorage.key("usuario"));
    usuario = "";
    actualizarUsuarioStorage();
    mostrarFormularioIdentificacion();
}
function eliminardata() {
    localStorage.clear();
    libros = [];
    mostrarlibros();
    inputID.value = 0;
}

function identificarUsuario(event) {
    event.preventDefault();
    usuario = inputUsuario.value;
    formularioIdentificacion.reset();
    actualizarUsuarioStorage();
    mostrarTextoUsuario();
}
function mostrarTextoUsuario() {
    contenedorIdentificacion.hidden = true;
    contenedorUsuario.hidden = false;
    textoUsuario.innerHTML += ` ${usuario}`;
}
function mostrarFormularioIdentificacion() {
    contenedorIdentificacion.hidden = false;
    contenedorUsuario.hidden = true;
    textoUsuario.innerHTML = `Bienvenido: ${usuario}`;
}
inputID.value = 0;

function validarFormulario(event) {
    event.preventDefault();
    let id = inputID.value;
    let nombre = inputNombre.value;
    let autor = inputAutor.value;
    let fecha = inputFecha.value;
    let paginas = parseFloat(inputPaginas.value);
    let idioma = inputIdioma.value;
    let tipoarchivo = inputTipoArchivo.value;
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
        agregaritemls();
        mostrarlibros();
    } else {
        valorID();
    }

}

function eliminarRegistro(id) {
    let columnaBorrar = document.getElementById(`lista lista-${id}`);
    let indiceBorrar = libros.findIndex(
        (libro) => Number(libro.id) === Number(id)
    );
    libros.splice(indiceBorrar, 1);
    columnaBorrar.remove();
    agregaritemls();
}

function mostrarlibros() {
    let contenedorlibros = document.getElementById("mostrardocs");
    contenedorlibros.innerHTML = "";
    libros.forEach((libro) => {
        libro.paginas = libro.paginas  || 0;
        let lista = document.createElement("div");
        lista.className = "elemento-lista"
        lista.id = `lista lista-${libro.id}`
        if (libro.id < 10) {
            lista.innerHTML = `
            <div class="contenedor_lista">
                <p class="p-titulo">${libro.nombre}</p>
                <p class="p-lista">ID: 000${libro.id}</p>
                <p class="p-lista">Autor: ${libro.autor}</p>
                <p class="p-lista">Fecha: ${libro.fecha}</p>
                <p class="p-lista">Páginas: ${libro.paginas}</p>
                <p class="p-lista">Idioma: ${libro.idioma}</p>
                <p class="p-lista">Tipo de Archivo: ${libro.tipoarchivo}</p>
                <div class="card-footer">
                <button class="btn btn-danger" id="botonEliminar-${libro.id}" >Eliminar</button>
                </div>
            </div>
            `
        }
        if (libro.id >= 10) {
            lista.innerHTML = `
            <div class="contenedor_lista">
                <p class="p-titulo">${libro.nombre}</p>
                <p class="p-lista">ID: 00${libro.id}</p>
                <p class="p-lista">Autor: ${libro.autor}</p>
                <p class="p-lista">Fecha: ${libro.fecha}</p>
                <p class="p-lista">Páginas: ${libro.paginas}</p>
                <p class="p-lista">Idioma: ${libro.idioma}</p>
                <p class="p-lista">Tipo de Archivo: ${libro.tipoarchivo}</p>
                <div class="card-footer">
                <button class="btn btn-danger" id="botonEliminar-${libro.id}" >Eliminar</button>
                </div>
            </div>
            `
        }
        if (libro.id >= 100) {
            lista.innerHTML = `
            <div class="contenedor_lista">
                <p class="p-titulo">${libro.nombre}</p>
                <p class="p-lista">ID: 0${libro.id}</p>
                <p class="p-lista">Autor: ${libro.autor}</p>
                <p class="p-lista">Fecha: ${libro.fecha}</p>
                <p class="p-lista">Páginas: ${libro.paginas}</p>
                <p class="p-lista">Idioma: ${libro.idioma}</p>
                <p class="p-lista">Tipo de Archivo: ${libro.tipoarchivo}</p>
                <div class="card-footer">
                <button class="btn btn-danger" id="botonEliminar-${libro.id}" >Eliminar</button>
                </div>
            </div>
            `
        }
        if (libro.id >= 1000) {
            lista.innerHTML = `
            <div class="contenedor_lista">
                <p class="p-titulo">${libro.nombre}</p>
                <p class="p-lista">ID: ${libro.id}</p>
                <p class="p-lista">Autor: ${libro.autor}</p>
                <p class="p-lista">Fecha: ${libro.fecha}</p>
                <p class="p-lista">Páginas: ${libro.paginas}</p>
                <p class="p-lista">Idioma: ${libro.idioma}</p>
                <p class="p-lista">Tipo de Archivo: ${libro.tipoarchivo}</p>
                <div class="card-footer">
                <button class="btn btn-danger" id="botonEliminar-${libro.id}" >Eliminar</button>
                </div>
            </div>
            `
        }
        contenedorlibros.append(lista)
        agregaritemls();
        valorID();
        let botonEliminar = document.getElementById(`botonEliminar-${libro.id}`);
        botonEliminar.onclick = () => eliminarRegistro(libro.id);

    });
}

function agregaritemls() {
    let librosJSON = JSON.stringify(libros);
    localStorage.setItem("LIBROS", librosJSON);
}

function actualizarUsuarioStorage() {
    localStorage.setItem("usuario", usuario);
}

function obteneritemsls() {
    let librosJSON = localStorage.getItem("LIBROS");
    if (librosJSON) {
        libros = JSON.parse(librosJSON);
        mostrarlibros();
    }
}
function obtenerUsuarioStorage() {
    let usuarioAlmacenado = localStorage.getItem("usuario");
    if (usuarioAlmacenado) {
        usuario = usuarioAlmacenado;
        mostrarTextoUsuario();
    }
}

function main() {
    ingresardocumento();
    inicializarEventos();
    obteneritemsls();
    obtenerUsuarioStorage();
}

main();