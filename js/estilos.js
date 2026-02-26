/*
Investigacion: Area  de un circulo =PI * R^2
*/
function calculo(R){
    return Math.PI * R ** 2;

}



function calcularArea(){

    let radio = document.getElementById("radio").value
    let resultado = document.getElementById("resultado");

    if(radio < 0){
        resultado.innerText = `El radio no puede ser menor o igual a 0`
    }else{
        let Area = calculo(radio);
       resultado.innerText=`El área del círculo es: ${Area}`;
    }

   
    //Prueba unitaria
    //console.log(Area)
    
}

/*function calcularArea(){
    prueba unitaria
    console.log("Hola desde estilos.js")
    
}
*/



/*
let pruebaFuncionCalculo = calculo(3);
console.log(`El area del circulo es: ${pruebaFuncionCalculo}`);
*/