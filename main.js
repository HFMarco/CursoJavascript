function valorID(){
    inputID.value++;
}
function disminuirID(){
    inputID.value--;
    return inputID.value;
}
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
function ingresardocumento() {

    formulario = document.getElementById("formulario");
    id = document.getElementById("inputID");
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
        
        mostrarlibros();
    } else {
        alert("El id ya existe");
    }
    
}
function eliminarRegistro(id) {
    let columnaBorrar = document.getElementById(`lista lista-${id}`);
    let indiceBorrar = libros.findIndex(
        (libro) => Number(libro.id) === Number(id)
    );

    libros.splice(indiceBorrar, 1);
    columnaBorrar.remove();
    disminuirID();
}

function mostrarlibros() {
    let contenedorlibros = document.getElementById("mostrardocs");
    contenedorlibros.innerHTML = "";
        libros.forEach((libro) => {
            let lista = document.createElement("div");
            lista.className = "elemento-lista"
            lista.id = `lista lista-${libro.id}`
            lista.innerHTML=`
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
            contenedorlibros.append(lista)
            valorID();
        let botonEliminar = document.getElementById(`botonEliminar-${libro.id}`);
        botonEliminar.onclick = () => eliminarRegistro(libro.id);
        
    });
}

function main() {
    ingresardocumento();
    inicializarEventos();


}

main();

