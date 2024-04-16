
function calcularQuadrado(numero) {
    return numero * numero;
}


function main() {
   
    let valores = [2, 5, 7];

   
    let quadrados = valores.map(numero => calcularQuadrado(numero));

    console.log("Valores e seus quadrados:");
    for (let i = 0; i < 3; i++) {
        console.log(valores[i] + " ao quadrado é igual a " + quadrados[i]);
    }
}


main();
