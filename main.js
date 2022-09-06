// Promedio personas ingresadas


cantidad()
function cantidad(){
    x = prompt("Cantidad de numeros: ")
    return x
}
a = x
if (a != null) {
    if(a >= 0||x < 0){
        num = a
        let sumatoria
        let total = 0
        for (let i = 0; i < num; i++) {
            sumatoria = prompt("Escriba el" + " " + (i+1) + "° número :")
            total = parseInt(total) + parseFloat(sumatoria)
        }
        promedio = total/a
        alert("Suma total: " + parseFloat(total))
        alert("El promedio de la suma de " + a + " "+ "números es =" + " " + promedio)
        }else{
        alert('Por favor, ingrese un valor numérico válido.');
        cantidad()
}
}



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