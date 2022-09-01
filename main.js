let i
alert("Bienvenido a la calculadora de cuadrados js")
while (i != "no") {
    let x = prompt("Ingrese un valor para elevarlo al cuadrado")
    if(x > 0 || x < 0){
        let potencia= x * x
        alert("El cuadrado de"+" "+ x +" "+"es"+ " "+ potencia)
        i = prompt("¿Desea continuar?(no, para parar la calculadora)")
    }
    else{
    alert("Ingresar dato valido")
    }
    }