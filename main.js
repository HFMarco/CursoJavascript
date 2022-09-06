// Promedio personas ingresadas


cantidad()
function cantidad(){
    cant = prompt("Cantidad de numeros: ")
    if (cant != null) {
        if(cant>=0||cant<0){
            num = cant
            let sumatoria
            let total = 0
            for (let i = 0; i < num; i++) {
                sumatoria = prompt("Escriba el" + " " + (i+1) + "° número :")
                total = parseInt(total) + parseFloat(sumatoria)
            }
            promedio = total/cant
            promedio = promedio.toFixed(2)
            alert("Suma total: " + parseFloat(total))
            alert("El promedio de la suma de los " + cant + " "+ "números es =" + " " + promedio)
            }else{
            alert('Por favor, ingrese un valor numérico válido.');
            cantidad()
        }
        }
}