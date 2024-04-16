
function calcularMedia(numero1, numero2) {
    return (numero1 + numero2) / 2;
}


function main() {
    
    let valor1 = 10;
    let valor2 = 20;

   
    let media = calcularMedia(valor1, valor2);

    console.log("A média de " + valor1 + " e " + valor2 + " é: " + media);
}


main();
