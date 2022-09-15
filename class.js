// Primer ejercicio --
// let i
// alert("Bienvenido a la calculadora de cuadrados js")
// while (i != "no") {
//     let x = prompt("Ingrese un valor para elevarlo al cuadrado")
//     if(x > 0 || x < 0){
//         let potencia= x * x
//         alert("El cuadrado de"+" "+ x +" "+"es"+ " "+ potencia)
//         i = prompt("¿Desea continuar?(no, para parar la calculadora)")
//     }
//     else{
//     alert("Ingresar dato valido")
//     }
//     }


// Ejercicio Propio 1
// alert("Bienvenido a la aplicación de registro, rellene sus datos de las siguientes casillas.");

// nombrefunc()
// dnifunc();
// telefonofunc();
// emailfunc();

// nombremostrar = nombre
// dnimostrar = dni
// telefonomostrar = telefono 
// emailmostrar = email

// function nombrefunc(){
//     nombre = prompt("Ingrese el Nombre con el que desea ser registrado.")
//     return nombre
// }
// function dnifunc(){
//     dni = prompt("Ingrese su DNI")
//     return dni
// }
// function telefonofunc(){
//     telefono = prompt("Ingrese su número de Celular")
//     return telefono
// }
// function emailfunc(){
//     email = prompt("ingrese su email")
//     return email
// }

// alert("Registro exitoso!\n" + "Nombre:" + nombremostrar + "\n DNI: " + dnimostrar +"\n Teléfono: " + telefonomostrar +"\n Email: " + emailmostrar)


// alert("Bienvenido")
// x = parseFloat(prompt("Ingrese Número de Personas"))

// for(x = x ; x != 0; x--){
//     sumatoria()
//     function sumatoria(){
//         edad = parseFloat(prompt("Ingrese la edad del "+ x + "participante"))
//         return edad
//     }
//     while(x != 1){
//         suma = edad 
//     }
// }
// alert(suma)


// ...

// num = cant
// let sumatoria
// let total = 0
// for (let i = 0; i < num; i++) {
//     sumatoria = prompt("Escriba el" + " " + (i+1) + "° número :")
//     total = parseInt(total) + parseFloat(sumatoria)
// }
// promedio = total/cant
// alert("Suma total: " + parseFloat(total))
// alert("El promedio de la suma de " + cant + " "+ "números es =" + " " + promedio)

// Promedio personas ingresadas


// cantidad()
// function cantidad(){
//     cant = prompt("Cantidad de numeros: ")
//     if (cant != null) {
//         if(cant>=0||cant<0){
//             num = cant
//             let sumatoria
//             let total = 0
//             for (let i = 0; i < num; i++) {
//                 sumatoria = prompt("Escriba el" + " " + (i+1) + "° número :")
//                 total = parseInt(total) + parseFloat(sumatoria)
//             }
//             promedio = total/cant
//             promedio = promedio.toFixed(2)
//             alert("Suma total: " + parseFloat(total))
//             alert("El promedio de la suma de los " + cant + " "+ "números es =" + " " + promedio)
//             }else{
//             alert('Por favor, ingrese un valor numérico válido.');
//             cantidad()
//         }
//         }
// }
//fin ejemplo

//INTRODUCCIÓN
// const persona = {
//     nombre : "Marco",
//     apellido : "Flores",
//     edad : 25,
//     pais: "Perú",
//     ciudad : "Chincha",
//     esDesarrollador : true
// }
//imrpimiendo el objeto en la consola
// console.log(persona)

//Alert solo imprimen strings..
// alert(persona.nombre)

//ACCEDIENDO A LAS PROPIEDADES DEL OBJETO
//método1
// console.log(persona.nombre)
//método2
// console.log(persona["apellido"])

//Imprimiendo tipo de dato
// console.log(typeof persona["apellido"])

//Accediendo a datos de objetos

// persona.edad = 40
// persona["edad"] = 50

// EJEMPLO

function Persona (nombre, apellido, edad, pais, ciudad, esDesarrollador){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.pais = pais
    this.ciudad = ciudad
    this.esDesarrollador = esDesarrollador
}

// const PersonaUno = new Persona("Marco", "Flores", 23, "Perú", "Ica", true)
// console.log(PersonaUno)

//Pidiendo datos 

function peticion(){
    let nombre = prompt("Ingrese su Nombre")
    let apellido =prompt("Ingrese su Apellido")
    let edad =  parseInt(prompt("Ingrese su edad"))
    let pais =  prompt("Ingrese su Pais")
    let ciudad = prompt("Ingrese su ciudad")
    let esDesarrollador = prompt("Es usted, un desarrollador?(si/no)")

    let esDesarrolladorbool = false

    if (esDesarrollador.toLocaleLowerCase() == "si"){
        esDesarrolladorbool = true
    }
    let resultpeticion = new Persona(nombre,apellido,edad,pais,ciudad,esDesarrolladorbool)
    return resultpeticion
}

let personauno = peticion()
console.log(personauno)


//Clases 

class producto {
    constructor(nombre,precio,cantidad){
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.vendido = true
    }
    aumentarprecio = (precioAAumentar) => this.precio = this.precio + precioAAumentar
    disminuirprecio = (precioADisminuir) => this.precio = this.precio - precioADisminuir
}

let nombrepro = prompt("nombre")
let precio = parseInt(prompt("Cual es el precio"))
let cantidadpro = parseInt(prompt("Cual es la cantidad"))

const item = new producto(nombrepro,precio,cantidadpro)
item.aumentarprecio(10)
console.log(item.precio)
item.disminuirprecio(11)
console.log(item.precio)
console.log(item)